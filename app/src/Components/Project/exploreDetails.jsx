import React, { useState, useRef, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import BlurText from '../../utils/BlurText'

import explore1 from '../../assets/img/OurProjectsSection/explore-1.png'
import explore2 from '../../assets/img/OurProjectsSection/explore-2.png'
import explore3 from '../../assets/img/OurProjectsSection/explore-3.png'
import explore4 from '../../assets/img/OurProjectsSection/explore-4.png'
import explore5 from '../../assets/img/OurProjectsSection/explore-5.png'

const exploreItems = [
  {
    id: 1,
    title: "State-of-the-art Fitness Center",
    image: explore1,
    alt: "Gym and Fitness Studio at Urbanscapes",
  },
  {
    id: 2,
    title: "Children's Play Arena & Daycare",
    image: explore2,
    alt: "Vibrant Children's Play Area at Urbanscapes",
  },
  {
    id: 3,
    title: "Open-Air Amphitheatre & Cinema",
    image: explore3,
    alt: "Open Air Amphitheatre at Urbanscapes",
  },
  {
    id: 4,
    title: "Yoga & Meditation Studio",
    image: explore4,
    alt: "Yoga and Meditation Studio at Urbanscapes",
  },
  {
    id: 5,
    title: "Indoor Recreation & Games Arena",
    image: explore5,
    alt: "Indoor Games and Recreation Arena at Urbanscapes",
  },
]

const ExploreDetails = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [slideStep, setSlideStep] = useState(0)
  const trackRef = useRef(null)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)
  const navigate = useNavigate()

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1)
    }
  }

  const handleNext = () => {
    if (currentIndex < exploreItems.length - 1) {
      setCurrentIndex((prev) => prev + 1)
    }
  }

  const updateSlideStep = useCallback(() => {
    if (trackRef.current && trackRef.current.children.length > 1) {
      const firstChild = trackRef.current.children[0]
      const secondChild = trackRef.current.children[1]
      const step = secondChild.offsetLeft - firstChild.offsetLeft
      if (step > 0) {
        setSlideStep(step)
      }
    }
  }, [])

  useEffect(() => {
    updateSlideStep()
    window.addEventListener('resize', updateSlideStep)
    const timer = setTimeout(updateSlideStep, 150)
    return () => {
      window.removeEventListener('resize', updateSlideStep)
      clearTimeout(timer)
    }
  }, [updateSlideStep])

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current
    const threshold = 40
    if (diff > threshold) {
      handleNext()
    } else if (diff < -threshold) {
      handlePrev()
    }
  }

  const handleBrochureClick = () => {
    const contactSection = document.getElementById('contact') || document.getElementById('enquire')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/contact')
    }
  }

  return (
    <section 
      className="relative py-16 md:py-24 w-full overflow-hidden"
      
    >
      {/* Top Text Content */}
      <div className="max-w-4xl mx-auto px-4 text-center flex flex-col items-center">
        <div className="max-w-lg mx-auto mb-4">
          <BlurText 
            text="Explore Every Detail Before You Move In"
            delay={25}
            animateBy="words"
            direction="bottom" 
            className="text-3xl sm:text-4xl md:text-[38px] font-semibold text-black leading-[1.2] tracking-tight justify-center flex-wrap" 
          />
        </div>

        <div className="max-w-2xl sm:max-w-4xl mx-auto mb-8 px-2">
          <BlurText 
            text="Discover the thoughtfully designed spaces, premium amenities, floor plans, and specifications that make Urbanscapes a landmark address in Tirupati. Download our brochure to get a complete overview of the project and experience elevated living crafted for modern families."
            delay={15}
            animateBy="words"
            direction="bottom" 
            className="text-[#929292] text-sm sm:text-xl leading-relaxed justify-center flex-wrap" 
          />
        </div>

        <div className="mb-12 md:mb-16">
          <button 
            onClick={handleBrochureClick}
            className="bg-[#5A3A2E] hover:bg-[#472c22] text-white px-8 py-3.5 rounded-[3px] text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-200 shadow-sm hover:shadow active:scale-95 cursor-pointer"
          >
            DOWNLOAD BROCHURE
          </button>
        </div>
      </div>

      {/* Image Gallery Slider */}
      <div 
        className="w-full overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="pl-4 sm:pl-8 md:pl-[6%] lg:pl-[8%] pr-0">
          <div 
            ref={trackRef}
            className="flex gap-4 sm:gap-6 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
            style={{
              transform: `translateX(-${currentIndex * slideStep}px)`
            }}
          >
            {exploreItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => {
                  if (index !== currentIndex) {
                    setCurrentIndex(index)
                  }
                }}
                className={`flex-shrink-0 w-[84vw] sm:w-[80vw] md:w-[76vw] lg:w-[75vw] max-w-[1240px] transition-all duration-300 ${
                  index !== currentIndex ? 'cursor-pointer hover:opacity-95' : ''
                }`}
              >
                <div className="w-full h-[280px] sm:h-[400px] md:h-[500px] lg:h-[580px] xl:h-[620px] rounded-xl sm:rounded-[4px] overflow-hidden shadow-lg select-none bg-gray-200">
                  <img 
                    src={item.image} 
                    alt={item.alt}
                    className="w-full h-full object-cover"
                    loading={index === 0 ? "eager" : "lazy"}
                    draggable="false"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Navigation Arrows */}
      <div className="flex items-center justify-center gap-8 mt-8 sm:mt-10">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          aria-label="Previous image"
          className={`p-2 transition-all duration-200 ${
            currentIndex === 0
              ? "text-gray-300 cursor-not-allowed opacity-50"
              : "text-gray-600 hover:text-red-600 active:scale-95 cursor-pointer"
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
          onClick={handleNext}
          disabled={currentIndex === exploreItems.length - 1}
          aria-label="Next image"
          className={`p-2 transition-all duration-200 ${
            currentIndex === exploreItems.length - 1
              ? "text-gray-300 cursor-not-allowed opacity-50"
              : "text-[#DC2626] hover:text-red-700 active:scale-95 cursor-pointer"
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
    </section>
  )
}

export default ExploreDetails