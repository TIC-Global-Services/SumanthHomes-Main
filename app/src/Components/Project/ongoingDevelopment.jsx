import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BlurText from '../../utils/BlurText'

// Project Assets
import projectHeroBanner from '../../assets/img/OurProjectsSection/project_hero_banner.png'
import urbanscapesLogo from '../../assets/img/OurProjectsSection/urbanscapes_logo.png'
import lotusSerenephase2 from '../../assets/img/OurProjectsSection/lotus-vilas-phase-2.png'
import lotusSerenephase1 from '../../assets/img/OurProjectsSection/lotus-vilas-phase-1.png'


export const defaultDevelopments = [
  {
    id: 1,
    title: 'URBANSCAPES',
    bgimage: projectHeroBanner,
    logo: urbanscapesLogo,
    logotitle: '',
    link: '/urbanscapes',
  },
  {
    id: 2,
    title: 'LOTUS SERENE VILLAS PHASE 2',
    bgimage: '/lotus-vila/ongoing-developement-2.jpg',
    logo: lotusSerenephase2,
    logotitle: '',
    link: '/lotus-serene-villas',
  },
  {
    id: 3,
    title: 'LOTUS SERENE VILLAS PHASE 1',
    bgimage: '/lotus-vila/community-2.jpg',
    logo: lotusSerenephase1,
    logotitle: '',
    link: '/lotus-villa-phase-1',
  },
  {
    id: 4,
    title: 'PEARL ABODE',
    bgimage: '/lotus-vila/luxury-lifetyle.jpg',
    logo: '/pearl_aode.png',
    logotitle: '',
    link: '/pearl-abode',
  },
]

const OngoingDevelopment = ({
  id = 'ongoing-developments',
  title = 'Our Ongoing Developments',
  items,
  developments,
  className = '',
  showArrows = true,
  scrollStep = 360,
  bgPattern = true,
}) => {
  const navigate = useNavigate()
  const scrollContainerRef = useRef(null)
  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollLeftStart = useRef(0)
  const dragDistance = useRef(0)

  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  // Allow passing data via either `items` or `developments`, with fallback to defaultDevelopments
  const data = items || developments || defaultDevelopments

  const checkScrollBounds = () => {
    if (!scrollContainerRef.current) return
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
    setCanScrollLeft(scrollLeft > 10)
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10)
  }

  const scrollByAmount = (distance) => {
    if (!scrollContainerRef.current) return
    scrollContainerRef.current.scrollBy({
      left: distance,
      behavior: 'smooth',
    })
  }

  // Mouse Drag to Scroll Handlers
  const handleMouseDown = (e) => {
    if (!scrollContainerRef.current) return
    isDragging.current = true
    dragDistance.current = 0
    startX.current = e.pageX - scrollContainerRef.current.offsetLeft
    scrollLeftStart.current = scrollContainerRef.current.scrollLeft
  }

  const handleMouseMove = (e) => {
    if (!isDragging.current || !scrollContainerRef.current) return
    e.preventDefault()
    const x = e.pageX - scrollContainerRef.current.offsetLeft
    const walk = (x - startX.current) * 1.5
    dragDistance.current = Math.abs(x - startX.current)
    scrollContainerRef.current.scrollLeft = scrollLeftStart.current - walk
    checkScrollBounds()
  }

  const handleMouseUp = () => {
    isDragging.current = false
  }

  const handleMouseLeave = () => {
    isDragging.current = false
  }

  const handleCardClick = (link) => {
    if (dragDistance.current > 6) return
    if (link) navigate(link)
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

  return (
    <section
      id={id}
      className={`relative w-full py-16 md:py-24 overflow-hidden bg-[#FAF9F7] ${className}`}
      // style={sectionStyle}
    >
      {/* Section Header */}
      {title && (
        <div className="w-full text-center px-4 mb-10 md:mb-14">
          <BlurText
            text={title}
            delay={30}
            animateBy="words"
            direction="bottom"
            className="text-3xl sm:text-4xl md:text-[40px] font-semibold text-black tracking-tight justify-center"
          />
        </div>
      )}

      {/* Horizontal Cards Track */}
      <div className="relative w-full">
        <div
          ref={scrollContainerRef}
          onScroll={checkScrollBounds}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          className="flex gap-5 sm:gap-6 md:gap-7 overflow-x-auto scroll-smooth pl-4 sm:pl-8 md:pl-[5%] lg:pl-[5%] pr-6 select-none cursor-grab active:cursor-grabbing no-scrollbar"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {data.map((dev, index) => {
            const imageSrc = dev.bgimage || dev.image
            const itemTitle = dev.title || dev.name || ''
            const itemLink = dev.link || dev.href
            const itemLogo = dev.logo
            const itemLogoTitle = dev.logotitle ?? (!itemLogo ? itemTitle : '')

            return (
              <div
                key={dev.id || index}
                onClick={() => handleCardClick(itemLink)}
                className="group relative flex-shrink-0 w-[270px] sm:w-[310px] md:w-[340px] lg:w-[370px] h-[390px] sm:h-[450px] md:h-[490px] lg:h-[520px] bg-neutral-900 overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                {/* Background Project Image */}
                {imageSrc && (
                  <img
                    src={imageSrc}
                    alt={itemTitle}
                    draggable="false"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                )}

                {/* Dark Gradient Overlay for Maximum Legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 via-45% to-transparent transition-opacity duration-300" />

                {/* Bottom Branding / Logo Overlay */}
                <div className="absolute bottom-6 sm:bottom-8 left-3 right-3 flex flex-col items-center justify-center text-center pointer-events-none z-10">
                  {itemLogo && (
                    <img
                      src={itemLogo}
                      alt={itemTitle}
                      draggable="false"
                      className="w-auto max-h-24 sm:max-h-28 md:max-h-32 max-w-[85%] object-contain filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)] brightness-105"
                    />
                  )}

                  {itemLogoTitle && (
                    <h3 className="text-lg sm:text-xl md:text-2xl font-serif text-white tracking-[0.2em] uppercase font-semibold drop-shadow-[0_4px_10px_rgba(0,0,0,0.85)] mt-2">
                      {itemLogoTitle}
                    </h3>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Navigation Controls (Arrows for Smooth Carousel Browsing) */}
      {showArrows && data.length > 1 && (
        <div className="flex items-center justify-center gap-8 mt-8 sm:mt-10">
          <button
            onClick={() => scrollByAmount(-scrollStep)}
            disabled={!canScrollLeft}
            aria-label="Previous development"
            className={`p-2 transition-all duration-200 ${!canScrollLeft
                ? 'text-gray-300 cursor-not-allowed opacity-40'
                : 'text-gray-600 hover:text-red-600 active:scale-95 cursor-pointer'
              }`}
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
            onClick={() => scrollByAmount(scrollStep)}
            disabled={!canScrollRight}
            aria-label="Next development"
            className={`p-2 transition-all duration-200 ${!canScrollRight
                ? 'text-gray-300 cursor-not-allowed opacity-40'
                : 'text-[#DC2626] hover:text-red-700 active:scale-95 cursor-pointer'
              }`}
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
    </section>
  )
}

export default OngoingDevelopment