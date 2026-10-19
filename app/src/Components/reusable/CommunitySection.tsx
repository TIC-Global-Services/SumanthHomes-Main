import React from 'react'
import { motion } from 'motion/react'
import BlurText from '../../utils/BlurText'

interface AnimatedDescriptionProps {
  highlightedText?: string
  highlightTextColor?: string
  description: string
  className?: string
  delay?: number
}

const AnimatedDescription: React.FC<AnimatedDescriptionProps> = ({
  highlightedText,
  highlightTextColor = '#CC1518',
  description,
  className = '',
  delay = 15,
}) => {
  const ref = React.useRef<HTMLParagraphElement>(null)
  const [inView, setInView] = React.useState(false)

  React.useEffect(() => {
    if (!ref.current) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(ref.current!)
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  // Defensively remove highlightedText prefix if already repeated at the start of description
  const cleanDesc =
    highlightedText && description.startsWith(highlightedText)
      ? description.slice(highlightedText.length).trim()
      : description

  const highlightedWords = highlightedText
    ? highlightedText.trim().split(/\s+/).filter(Boolean)
    : []
  const descWords = cleanDesc ? cleanDesc.trim().split(/\s+/).filter(Boolean) : []

  const words: Array<{ text: string; isHighlighted: boolean }> = [
    ...highlightedWords.map((word) => ({ text: word, isHighlighted: true })),
    ...descWords.map((word) => ({ text: word, isHighlighted: false })),
  ]

  const fromSnapshot = { filter: 'blur(10px)', opacity: 0, y: 30 }
  const toSnapshots = [
    { filter: 'blur(5px)', opacity: 0.5, y: -4 },
    { filter: 'blur(0px)', opacity: 1, y: 0 },
  ]

  const totalDuration = 0.35
  const times = [0, 0.5, 1]

  return (
    <p
      ref={ref}
      className={className}
      style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
    >
      {words.map((item, index) => {
        const animateKeyframes = {
          filter: [fromSnapshot.filter, ...toSnapshots.map((s) => s.filter)],
          opacity: [fromSnapshot.opacity, ...toSnapshots.map((s) => s.opacity)],
          y: [fromSnapshot.y, ...toSnapshots.map((s) => s.y)],
        }

        const spanTransition = {
          duration: totalDuration,
          times,
          delay: (index * delay) / 1000,
        }

        return (
          <motion.span
            key={index}
            className={`inline-block will-change-[transform,filter,opacity] ${
              item.isHighlighted ? 'font-bold' : 'font-normal'
            }`}
            style={item.isHighlighted ? { color: highlightTextColor } : undefined}
            initial={fromSnapshot}
            animate={inView ? animateKeyframes : fromSnapshot}
            transition={spanTransition}
          >
            {item.text}
            {index < words.length - 1 && '\u00A0'}
          </motion.span>
        )
      })}
    </p>
  )
}

export interface CommunityMediaItem {
  title?: string
  src: string
  alt?: string
  className?: string
}

export interface CommunitySectionProps {
  id?: string
  subtitle?: string
  highlightedText?:string
  highlightTextColor?:string
  title?: string
  description?: string
  media?: CommunityMediaItem[]
  className?: string
  containerClassName?: string
  headerClassName?: string
  subtitleClassName?: string
  titleClassName?: string
  descriptionClassName?: string
  gridClassName?: string
  showMediaCaption?: boolean
}

export const defaultCommunityMedia: CommunityMediaItem[] = [
  {
    title: 'Lotus Serene Villas - Modern Living Villa Elevation',
    src: '/loutus-phase-1/lotus-community-1.jpg',
  },
  {
    title: 'Lotus Serene Villas - Premium Gated Community Living',
    src: '/loutus-phase-1/lotus-community-2.jpg',
  },
  {
    title: 'Lotus Serene Villas - Gated Avenue and Villas',
    src: '/loutus-phase-1/lotus-community-3.jpg',
  },
]

export const CommunitySection: React.FC<CommunitySectionProps> = ({
  id = 'community',
  subtitle,
  title = 'A Community Designed Around Modern Living',
  description = 'Lotus Serene Villas – Phase I is an exclusive gated villa community offering elegantly designed homes, expansive living spaces, and world-class amenities. Surrounded by serene landscapes, it delivers a lifestyle that blends sophistication, comfort, and everyday convenience.',
  media = defaultCommunityMedia,
  className = '',
  highlightedText,
  highlightTextColor,
  containerClassName = '',
  headerClassName,
  subtitleClassName,
  titleClassName,
  descriptionClassName,
  gridClassName,
  showMediaCaption = false,
}) => {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 px-4 sm:px-8 md:px-[5%] w-full bg-[#fbfbfb] ${className}`}
    >
      <div className={containerClassName}>
        {/* Section Heading, Subtitle & Description (Centered) */}
        {(subtitle || title || description) && (
          <div className={headerClassName || 'text-center max-w-7xl mx-auto mb-10 md:mb-14'}>
            {/* 1. First: Subtitle */}
            {subtitle && (
              <BlurText
                text={subtitle}
                delay={20}
                animateBy="words"
                direction="bottom"
                className={
                  subtitleClassName ||
                  'text-xs sm:text-sm md:text-[32px] font-semibold tracking-tight  text-black mb-6 justify-center'
                }
              />
            )}

            {/* 2. Next: Title */}
            {title && (
              <BlurText
                text={title}
                delay={30}
                animateBy="words"
                direction="bottom"
                className={
                  `text-[${highlightTextColor}] text-3xl sm:text-4xl md:text-4xl lg:text-[64px] font-semibold tracking-tight leading-relaxed mb-4 mt-4 justify-center`
                }
              />
            )}

            {/* 3. Then: Description */}
            {description && (
              highlightedText ? (
                <AnimatedDescription
                  highlightedText={highlightedText}
                  highlightTextColor={highlightTextColor || '#CC1518'}
                  description={description}
                  delay={15}
                  className={
                    descriptionClassName ||
                    'text-black text-sm sm:text-base md:text-xl lg:text-[28px] leading-[1.8] tracking-tight mt-10 max-w-5xl mx-auto justify-center'
                  }
                />
              ) : (
                <BlurText
                  text={description}
                  delay={15}
                  animateBy="words"
                  direction="bottom"
                  className={
                    descriptionClassName ||
                    'text-[#929292] text-sm sm:text-base md:text-[28px] leading-relaxed tracking-tight mt-4 max-w-3xl mx-auto justify-center'
                  }
                />
              )
            )}
          </div>
        )}

        {/* 4. Then: Media Gallery */}
        {media && media.length > 0 && (
          <div className={gridClassName || 'flex flex-col gap-4 md:gap-6'}>
            {media.length === 3 ? (
              <>
                {/* Top Row: 2 Images Side-by-Side */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  {media.slice(0, 2).map((item, idx) => (
                    <div
                      key={idx}
                      className="overflow-hidden bg-gray-100 group shadow-sm relative"
                    >
                      <img
                        src={item.src}
                        alt={item.alt || item.title || `Community elevation ${idx + 1}`}
                        className="w-full h-[300px] sm:h-[380px] md:h-[440px] lg:h-[480px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        loading="lazy"
                      />
                      {showMediaCaption && item.title && (
                        <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 via-black/30 to-transparent text-white">
                          <p className="text-sm sm:text-base font-medium">{item.title}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Bottom Row: 1 Full-Width Image */}
                {media[2] && (
                  <div className="w-full overflow-hidden bg-gray-100 group shadow-sm relative">
                    <img
                      src={media[2].src}
                      alt={media[2].alt || media[2].title || 'Community avenue and villas'}
                      className="w-full h-[280px] sm:h-[360px] md:h-[440px] lg:h-[520px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    {showMediaCaption && media[2].title && (
                      <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 via-black/30 to-transparent text-white">
                        <p className="text-sm sm:text-base font-medium">{media[2].title}</p>
                      </div>
                    )}
                  </div>
                )}
              </>
            ) : media.length === 2 ? (
              /* 2 Images: Side-by-Side Grid */
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {media.map((item, idx) => (
                  <div
                    key={idx}
                    className="overflow-hidden bg-gray-100 group shadow-sm relative"
                  >
                    <img
                      src={item.src}
                      alt={item.alt || item.title || `Community elevation ${idx + 1}`}
                      className="w-full h-[300px] sm:h-[380px] md:h-[440px] lg:h-[480px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    {showMediaCaption && item.title && (
                      <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 via-black/30 to-transparent text-white">
                        <p className="text-sm sm:text-base font-medium">{item.title}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : media.length === 1 ? (
              /* 1 Image: Full-Width */
              <div className="w-full overflow-hidden bg-gray-100 group shadow-sm relative">
                <img
                  src={media[0].src}
                  alt={media[0].alt || media[0].title || 'Community overview'}
                  className="w-full h-[300px] sm:h-[400px] md:h-[480px] lg:h-[540px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                {showMediaCaption && media[0].title && (
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 via-black/30 to-transparent text-white">
                    <p className="text-sm sm:text-base font-medium">{media[0].title}</p>
                  </div>
                )}
              </div>
            ) : (
              /* > 3 Images: Responsive 3-Column Grid */
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {media.map((item, idx) => (
                  <div
                    key={idx}
                    className="overflow-hidden bg-gray-100 group shadow-sm relative"
                  >
                    <img
                      src={item.src}
                      alt={item.alt || item.title || `Community item ${idx + 1}`}
                      className="w-full h-[300px] sm:h-[380px] md:h-[420px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    {showMediaCaption && item.title && (
                      <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 via-black/30 to-transparent text-white">
                        <p className="text-sm sm:text-base font-medium">{item.title}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

export default CommunitySection
