import React, { useState, useRef, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import BlurText from '../../utils/BlurText'

// Default Assets
import explore1 from '../../assets/img/OurProjectsSection/explore-1.png'
import explore2 from '../../assets/img/OurProjectsSection/explore-2.png'
import explore3 from '../../assets/img/OurProjectsSection/explore-3.png'
import explore4 from '../../assets/img/OurProjectsSection/explore-4.png'
import explore5 from '../../assets/img/OurProjectsSection/explore-5.png'

export type CardSize =
  | 'large'
  | 'medium'
  | 'small'
  | 'wide'
  | 'square'
  | 'narrow'
  | 'lg'
  | 'md'
  | 'sm'
  | string

export interface ExploreCardItem {
  id?: string | number
  title?: string
  subtitle?: string
  image: string
  alt?: string
  /**
   * Card size preset. In a single row on desktop:
   * - 'large' / 'wide': ~49% width (landscape ~16:9)
   * - 'medium' / 'square': ~30% width (square / 4:5)
   * - 'small' / 'narrow': ~19% width (portrait ~9:14)
   * Together, a row of [large, medium, small] fits 100% of the desktop viewport row.
   */
  size?: CardSize
  /** Custom width override (e.g. '45%', '500px', or Tailwind class 'w-[45%]') */
  width?: string
  /** Custom height override for this card (defaults to section cardHeight) */
  height?: string
  /** CSS aspect-ratio string */
  aspectRatio?: string
  /** Image object-fit ('cover' | 'contain' | 'fill') */
  objectFit?: 'cover' | 'contain' | 'fill'
  /** Custom card wrapper class */
  className?: string
  /** Inner card image container class */
  cardClassName?: string
  /** Image element class */
  imageClassName?: string
  /** Optional caption or custom render */
  caption?: React.ReactNode
  /** Link to navigate when clicked */
  link?: string
  /** Custom click handler */
  onClick?: () => void
}

export interface ExploreDetailsSectionProps {
  id?: string
  title?: string
  highlightTitle?: string
  highlightTitleColor?: string
  subtitle?: string
  subtitleClassName?: string
  titleClassName?: string
  description?: string
  descriptionClassName?: string
  highlightedText?: string
  highlightTextColor?: string
  /** Array of card objects */
  items?: ExploreCardItem[]
  /** Alias for `items` for backward compatibility */
  exploreItems?: ExploreCardItem[]
  buttonText?: string
  buttonColor?: string
  buttonTextColor?: string
  buttonClassName?: string
  showButton?: boolean
  onButtonClick?: () => void
  onDownload?: () => void
  contactTargetId?: string
  contactUrl?: string
  brochureUrl?: string
  /** Height class for the cards (default: responsive h-[280px] to h-[560px]) */
  cardHeight?: string
  /** Border radius class for the cards */
  cardRadius?: string
  /** Gap between cards */
  gap?: string
  /** Show or hide bottom navigation arrows */
  showArrows?: boolean
  arrowActiveColor?: string
  arrowDisabledColor?: string
  /** Hide arrows when all cards fit within the container */
  hideArrowsIfNoScroll?: boolean
  /** Display title overlay inside card */
  showCaptions?: boolean
  /** Zoom image slightly on card hover */
  zoomOnHover?: boolean
  /** Custom size presets map to override default sizing classes */
  sizeClasses?: Partial<Record<string, string>>
  /** Default size to assign to items without an explicit `size` (or 'auto') */
  defaultItemSize?: 'large' | 'medium' | 'small' | 'auto' | string
  className?: string
  containerClassName?: string
  headerClassName?: string
  trackClassName?: string
  trackPadding?: string
  bgPattern?: boolean | string
}

/**
 * 3 distinct card sizes proportioned so that [Large, Medium, Small]
 * fit perfectly side-by-side in a single row on desktop (49% + 30% + 19% ≈ 98% + gap):
 * - Large: ~50% of the row (landscape ~16:9)
 * - Medium: ~30% of the row (square ~1:1)
 * - Small: ~20% of the row (portrait ~9:14)
 */
export const CARD_SIZES: Record<string, string> = {
  large: 'w-[84vw] sm:w-[58vw] md:w-[48%] lg:w-[79%]',
  medium: 'w-[70vw] sm:w-[40vw] md:w-[31%] lg:w-[50%]',
  small: 'w-[56vw] sm:w-[28vw] md:w-[30%] lg:w-[30%]',
  // Convenient aliases
  wide: 'w-[84vw] sm:w-[58vw] md:w-[48%] lg:w-[49%]',
  square: 'w-[70vw] sm:w-[40vw] md:w-[31%] lg:w-[30%]',
  narrow: 'w-[56vw] sm:w-[28vw] md:w-[19%] lg:w-[19%]',
  lg: 'w-[84vw] sm:w-[58vw] md:w-[48%] lg:w-[49%]',
  md: 'w-[70vw] sm:w-[40vw] md:w-[31%] lg:w-[30%]',
  sm: 'w-[56vw] sm:w-[28vw] md:w-[19%] lg:w-[19%]',
}

export const defaultExploreItems: ExploreCardItem[] = [
  {
    id: 1,
    title: 'State-of-the-art Fitness Center',
    image: explore1,
    alt: 'Gym and Fitness Studio at Urbanscapes',
    size: 'large', // Wide (~50%)
  },
  {
    id: 2,
    title: 'Modern Villa Architecture',
    image: '/loutus-phase-1/lotus-community-1.jpg',
    alt: 'Modern Living Villa Elevation',
    size: 'medium', // Square (~30%)
  },
  {
    id: 3,
    title: "Children's Play Arena & Daycare",
    image: explore2,
    alt: 'Vibrant Children Play Area at Urbanscapes',
    size: 'small', // Narrow (~20%)
  },
  {
    id: 4,
    title: 'Open-Air Amphitheatre & Cinema',
    image: explore3,
    alt: 'Open Air Amphitheatre at Urbanscapes',
    size: 'large',
  },
  {
    id: 5,
    title: 'Yoga & Meditation Studio',
    image: explore4,
    alt: 'Yoga and Meditation Studio at Urbanscapes',
    size: 'medium',
  },
  {
    id: 6,
    title: 'Indoor Recreation & Games Arena',
    image: explore5,
    alt: 'Indoor Games and Recreation Arena at Urbanscapes',
    size: 'small',
  },
]

export const ExploreDetailsSection: React.FC<ExploreDetailsSectionProps> = ({
  id = 'explore-details',
  title = 'Explore Every Detail Before You Move In',
  highlightTitle,
  highlightTitleColor = '#CC1518',
  subtitle,
  subtitleClassName,
  titleClassName,
  description = 'Discover the thoughtfully designed spaces, premium amenities, floor plans, and specifications that make Urbanscapes a landmark address in Tirupati. Download our brochure to get a complete overview of the project and experience elevated living crafted for modern families.',
  descriptionClassName,
  highlightedText,
  highlightTextColor = '#5A3A2E',
  items,
  exploreItems,
  buttonText = 'DOWNLOAD BROCHURE',
  buttonColor = '#5A3A2E',
  buttonTextColor = '#ffffff',
  buttonClassName,
  showButton = true,
  onButtonClick,
  onDownload,
  contactTargetId = 'contact',
  contactUrl = '/contact',
  brochureUrl,
  cardHeight = 'h-[280px] sm:h-[380px] md:h-[460px] lg:h-[520px] xl:h-[560px]',
  cardRadius = '',
  gap = 'gap-4 sm:gap-5 md:gap-6',
  showArrows = true,
  arrowActiveColor = '#DC2626',
  arrowDisabledColor = '#D1D5DB',
  hideArrowsIfNoScroll = false,
  showCaptions = false,
  zoomOnHover = true,
  sizeClasses = {},
  defaultItemSize = 'auto',
  className = '',
  containerClassName = '',
  headerClassName,
  trackClassName = '',
  trackPadding = 'px-4 sm:px-8 md:px-[5%] lg:px-[5%]',
  bgPattern,
}) => {
  const navigate = useNavigate()
  const data = items || exploreItems || defaultExploreItems

  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef<boolean>(false)
  const startX = useRef<number>(0)
  const scrollLeftStart = useRef<number>(0)
  const dragDistance = useRef<number>(0)

  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false)
  const [canScrollRight, setCanScrollRight] = useState<boolean>(true)

  // Merge default card size presets with custom sizeClasses overrides
  const mergedSizes: Record<string, string> = { ...CARD_SIZES, ...sizeClasses }

  // Check scroll bounds to enable/disable arrow buttons
  const checkScrollBounds = useCallback(() => {
    if (!scrollContainerRef.current) return
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
    setCanScrollLeft(scrollLeft > 10)
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10)

    // Detect closest card to the initial alignment position
    const container = scrollContainerRef.current
    const children = container.children
    if (children && children.length > 0) {
      if (scrollLeft <= 15) {
        setCurrentIndex(0)
        return
      }

      const firstChild = children[0] as HTMLElement
      const baseOffset = firstChild ? firstChild.offsetLeft : 0
      let closestIdx = 0
      let minDiff = Infinity

      for (let i = 0; i < children.length; i++) {
        const child = children[i] as HTMLElement
        const targetScroll = child.offsetLeft - baseOffset
        const diff = Math.abs(scrollLeft - targetScroll)
        if (diff < minDiff) {
          minDiff = diff
          closestIdx = i
        }
      }
      setCurrentIndex(closestIdx)
    }
  }, [])

  useEffect(() => {
    checkScrollBounds()
    window.addEventListener('resize', checkScrollBounds)
    const timer = setTimeout(checkScrollBounds, 200)
    return () => {
      window.removeEventListener('resize', checkScrollBounds)
      clearTimeout(timer)
    }
  }, [checkScrollBounds, data])

  // Scroll to a specific card index smoothly
  const scrollToCard = useCallback((targetIndex: number) => {
    if (!scrollContainerRef.current) return
    const container = scrollContainerRef.current
    const children = container.children
    if (!children || targetIndex < 0 || targetIndex >= children.length) return

    // Card 0 must always scroll completely back to the initial position (left: 0)
    if (targetIndex === 0) {
      container.scrollTo({
        left: 0,
        behavior: 'smooth',
      })
      setCurrentIndex(0)
      return
    }

    const firstChild = children[0] as HTMLElement
    const targetElement = children[targetIndex] as HTMLElement
    if (targetElement && firstChild) {
      // Calculate offset preserving initial trackPadding alignment
      const scrollOffset = targetElement.offsetLeft - firstChild.offsetLeft

      container.scrollTo({
        left: Math.max(0, scrollOffset),
        behavior: 'smooth',
      })
      setCurrentIndex(targetIndex)
    }
  }, [])

  // Navigation handlers
  const handlePrev = () => {
    if (scrollContainerRef.current && scrollContainerRef.current.scrollLeft <= 10) return
    if (currentIndex <= 1) {
      scrollToCard(0)
      return
    }
    const targetIdx = Math.max(0, currentIndex - 1)
    scrollToCard(targetIdx)
  }

  const handleNext = () => {
    if (!canScrollRight && currentIndex === data.length - 1) return
    const targetIdx = Math.min(data.length - 1, currentIndex + 1)
    scrollToCard(targetIdx)
  }

  // Mouse drag-to-scroll handlers
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!scrollContainerRef.current) return
    isDragging.current = true
    dragDistance.current = 0
    startX.current = e.pageX - scrollContainerRef.current.offsetLeft
    scrollLeftStart.current = scrollContainerRef.current.scrollLeft
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging.current || !scrollContainerRef.current) return
    e.preventDefault()
    const x = e.pageX - scrollContainerRef.current.offsetLeft
    const walk = (x - startX.current) * 1.3
    dragDistance.current = Math.abs(x - startX.current)
    const targetScrollLeft = scrollLeftStart.current - walk
    scrollContainerRef.current.scrollLeft = Math.max(0, targetScrollLeft)
    checkScrollBounds()
  }

  const handleMouseUp = () => {
    isDragging.current = false
    if (scrollContainerRef.current && scrollContainerRef.current.scrollLeft < 35) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' })
    }
  }

  const handleMouseLeave = () => {
    isDragging.current = false
    if (scrollContainerRef.current && scrollContainerRef.current.scrollLeft < 35) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' })
    }
  }

  const handleTouchEnd = () => {
    if (scrollContainerRef.current && scrollContainerRef.current.scrollLeft < 35) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' })
    }
  }

  // Card click handler
  const handleCardClick = (item: ExploreCardItem, index: number) => {
    // If the user was dragging/swiping, do not trigger click
    if (dragDistance.current > 8) return

    if (item.onClick) {
      item.onClick()
      return
    }
    if (item.link) {
      navigate(item.link)
      return
    }

    scrollToCard(index)
  }

  // Brochure button click handler
  const handleBrochureClick = () => {
    if (onDownload) {
      onDownload()
      return
    }
    if (onButtonClick) {
      onButtonClick()
      return
    }
    if (brochureUrl) {
      window.open(brochureUrl, '_blank')
      return
    }
    const contactSection =
      document.getElementById(contactTargetId) ||
      document.getElementById('contact') ||
      document.getElementById('enquire')

    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate(contactUrl)
    }
  }

  // Determine size class for a card item
  const getCardSizeClass = (item: ExploreCardItem, index: number): string => {
    if (item.size) {
      const key = item.size.toLowerCase()
      return mergedSizes[key] || mergedSizes.medium
    }
    if (defaultItemSize === 'auto') {
      // Auto cycles [large, medium, small] across single row
      const pattern = ['large', 'medium', 'small']
      return mergedSizes[pattern[index % pattern.length]]
    }
    return mergedSizes[defaultItemSize] || mergedSizes.medium
  }

  const sectionStyle = bgPattern
    ? {
        backgroundImage:
          typeof bgPattern === 'string' ? `url('${bgPattern}')` : "url('/bg_layer.svg')",
        backgroundRepeat: 'repeat',
        backgroundSize: '1200px auto',
        backgroundPosition: 'top center',
      }
    : undefined

  const shouldRenderArrows = showArrows && (!hideArrowsIfNoScroll || canScrollLeft || canScrollRight)

  return (
    <section
      id={id}
      className={`relative py-16 md:py-24 w-full overflow-hidden ${className}`}
      // style={sectionStyle}
    >
      <div className={containerClassName}>
        {/* Section Header: Subtitle, Title, Description, CTA Button */}
        <div
          className={
            headerClassName ||
            'max-w-4xl mx-auto px-4 text-center flex flex-col items-center mb-10 md:mb-14'
          }
        >
          {subtitle && (
            <div className="mb-3">
              <BlurText
                text={subtitle}
                delay={20}
                animateBy="words"
                direction="bottom"
                className={
                  subtitleClassName ||
                  'text-xs sm:text-sm font-semibold tracking-wider uppercase text-gray-500 justify-center flex-wrap'
                }
              />
            </div>
          )}

          {title && (
            <div className="max-w-xl mx-auto mb-4">
              <BlurText
                text={title}
                delay={25}
                animateBy="words"
                direction="bottom"
                className={
                  titleClassName ||
                  'text-3xl sm:text-4xl md:text-[38px] font-semibold text-black leading-[1.2] tracking-tight justify-center flex-wrap'
                }
              />
              {highlightTitle && (
                <BlurText
                  text={highlightTitle}
                  delay={25}
                  animateBy="words"
                  direction="bottom"
                  className={`text-3xl sm:text-4xl md:text-[38px] font-semibold leading-[1.2] tracking-tight justify-center flex-wrap`}
                  style={{ color: highlightTitleColor }}
                />
              )}
            </div>
          )}

          {description && (
            <div className="max-w-2xl sm:max-w-4xl mx-auto mb-8 px-2">
              <BlurText
                text={description}
                delay={15}
                animateBy="words"
                direction="bottom"
                className={
                  descriptionClassName ||
                  'text-[#929292] text-sm sm:text-lg md:text-xl leading-relaxed justify-center flex-wrap'
                }
              />
            </div>
          )}

          {showButton && (
            <div>
              <button
                onClick={handleBrochureClick}
                style={{ backgroundColor: buttonColor, color: buttonTextColor }}
                className={
                  buttonClassName ||
                  'px-8 py-3.5 rounded-[3px] text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-200 shadow-sm hover:shadow hover:brightness-105 active:scale-95 cursor-pointer'
                }
              >
                {buttonText}
              </button>
            </div>
          )}
        </div>

        {/* Gallery Slider Track with Different Sized Cards in a Single Row */}
        <div className="w-full relative">
          <div
            ref={scrollContainerRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onTouchEnd={handleTouchEnd}
            onScroll={checkScrollBounds}
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
            className={`flex items-center ${gap} overflow-x-auto no-scrollbar select-none cursor-grab active:cursor-grabbing w-full ${trackPadding} ${trackClassName}`}
          >
            {data.map((item, index) => {
              const sizeClass = getCardSizeClass(item, index)
              const customStyle: React.CSSProperties = {
                ...(item.width ? { width: item.width } : {}),
                ...(item.aspectRatio ? { aspectRatio: item.aspectRatio } : {}),
              }
              const heightClass = item.height || cardHeight

              return (
                <div
                  key={item.id ?? index}
                  onClick={() => handleCardClick(item, index)}
                  style={customStyle}
                  className={`flex-shrink-0 transition-all duration-300 group cursor-pointer ${sizeClass} ${
                    item.className || ''
                  }`}
                >
                  <div
                    className={`w-full ${heightClass} ${cardRadius} overflow-hidden shadow-md relative bg-gray-100 select-none ${
                      item.cardClassName || ''
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.alt || item.title || `Explore detail ${index + 1}`}
                      className={`w-full h-full ${
                        item.objectFit === 'contain' ? 'object-contain' : 'object-cover'
                      } ${
                        zoomOnHover
                          ? 'transition-transform duration-700 ease-out group-hover:scale-105'
                          : ''
                      } ${item.imageClassName || ''}`}
                      loading={index === 0 ? 'eager' : 'lazy'}
                      draggable="false"
                    />

                    {/* Optional Title Caption Overlay */}
                    {showCaptions && item.title && (
                      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white pointer-events-none">
                        <p className="text-sm sm:text-base md:text-lg font-semibold leading-snug">
                          {item.title}
                        </p>
                        {item.subtitle && (
                          <p className="text-xs sm:text-sm text-gray-200 mt-0.5">
                            {item.subtitle}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom Navigation Arrows */}
        {shouldRenderArrows && (
          <div className="flex items-center justify-center gap-8 mt-8 sm:mt-10">
            <button
              onClick={handlePrev}
              disabled={!canScrollLeft}
              aria-label="Previous cards"
              className={`p-2 transition-all duration-200 ${
                !canScrollLeft
                  ? 'cursor-not-allowed opacity-40'
                  : 'hover:opacity-80 active:scale-95 cursor-pointer'
              }`}
              style={{
                color: canScrollLeft ? arrowActiveColor : arrowDisabledColor,
              }}
            >
              <svg
                width="34"
                height="22"
                viewBox="0 0 34 22"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="30" y1="11" x2="4" y2="11" />
                <polyline points="12 3 4 11 12 19" />
              </svg>
            </button>

            <button
              onClick={handleNext}
              disabled={!canScrollRight}
              aria-label="Next cards"
              className={`p-2 transition-all duration-200 ${
                !canScrollRight
                  ? 'cursor-not-allowed opacity-40'
                  : 'hover:opacity-80 active:scale-95 cursor-pointer'
              }`}
              style={{
                color: canScrollRight ? arrowActiveColor : arrowDisabledColor,
              }}
            >
              <svg
                width="34"
                height="22"
                viewBox="0 0 34 22"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" y1="11" x2="30" y2="11" />
                <polyline points="22 3 30 11 22 19" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default ExploreDetailsSection
