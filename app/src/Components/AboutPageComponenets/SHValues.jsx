import React, { useRef, useState, useEffect, useCallback } from 'react'
import image1 from '../../assets/img/AboutSection/shvalueImage1.png'
import image2 from '../../assets/img/AboutSection/shvalueImage2.png'
import image3 from '../../assets/img/AboutSection/image-middle.png'
import image4 from '../../assets/img/AboutSection/image-left.png'
import BlurText from '../../utils/BlurText'
import { motion } from 'motion/react'
import { useSwipeable } from 'react-swipeable'
import FromTheFounder from './FromTheFounder'

const valuesCards = [
  {
    id: 1,
    title: 'Timeless Design',
    description:
      'Spaces designed around your needs, lifestyle, comfort, and the way you want to live.',
    image: image1,
    alt: 'Timeless Design',
    isTall: true,
  },
  {
    id: 2,
    title: 'Lasting Quality',
    description:
      'Carefully chosen materials and workmanship that deliver quality you can see and experience every day.',
    image: image2,
    alt: 'Lasting Quality',
    isTall: false,
  },
  {
    id: 3,
    title: 'Honest Craftsmanship',
    description:
      'Uncompromising commitment to ethical building, structural integrity, and transparent processes.',
    image: image3,
    alt: 'Honest Craftsmanship',
    isTall: true,
  },
  {
    id: 4,
    title: 'Enduring Value',
    description:
      'Homes that appreciate in value and stand as a timeless legacy for generations.',
    image: image4,
    alt: 'Enduring Value',
    isTall: false,
  },
]

const SHValues = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const trackRef = useRef(null)

  const totalCards = valuesCards.length
  // On desktop 2 cards fit side-by-side, so max slide index is totalCards - 2 = 2
  const [maxIndex, setMaxIndex] = useState(totalCards - 2)

  const getMinProgress = useCallback(
    (maxIdx) => 100 / (maxIdx + 1),
    []
  )

  const [progress, setProgress] = useState(33.33)

  useEffect(() => {
    const handleResize = () => {
      const newMax = window.innerWidth >= 1024 ? totalCards - 2 : totalCards - 1
      setMaxIndex(newMax)
      const minP = 100 / (newMax + 1)
      setProgress(minP + (currentIndex / Math.max(1, newMax)) * (100 - minP))
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [totalCards, currentIndex])

  const scrollToSlide = (index) => {
    const clamped = Math.max(0, Math.min(index, maxIndex))
    setCurrentIndex(clamped)

    const minP = getMinProgress(maxIndex)
    const targetProgress = minP + (clamped / Math.max(1, maxIndex)) * (100 - minP)
    setProgress(targetProgress)

    if (trackRef.current) {
      const container = trackRef.current
      const card = container.children[clamped]
      if (card) {
        const containerLeft = container.getBoundingClientRect().left
        const cardLeft = card.getBoundingClientRect().left
        const targetScroll = container.scrollLeft + (cardLeft - containerLeft)

        container.scrollTo({
          left: targetScroll,
          behavior: 'smooth',
        })
      }
    }
  }

  const prevSlide = () => {
    if (currentIndex > 0) {
      scrollToSlide(currentIndex - 1)
    }
  }

  const nextSlide = () => {
    if (currentIndex < maxIndex) {
      scrollToSlide(currentIndex + 1)
    }
  }

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    trackMouse: true,
  })

  // Keep state and progress bar synced on manual touch/mouse scrolling
  const handleScroll = () => {
    if (!trackRef.current) return
    const container = trackRef.current
    const maxScroll = container.scrollWidth - container.clientWidth
    const minP = getMinProgress(maxIndex)

    if (maxScroll > 5) {
      const scrollRatio = Math.min(1, Math.max(0, container.scrollLeft / maxScroll))
      const currentProgress = minP + scrollRatio * (100 - minP)
      setProgress(currentProgress)

      const firstCard = container.children[0]
      const secondCard = container.children[1]
      if (firstCard && secondCard) {
        const step = secondCard.offsetLeft - firstCard.offsetLeft
        if (step > 0) {
          const detectedIndex = Math.round(container.scrollLeft / step)
          const clamped = Math.max(0, Math.min(detectedIndex, maxIndex))
          if (clamped !== currentIndex) {
            setCurrentIndex(clamped)
          }
        }
      }
    }
  }

  return (
    <div className="w-full">
      {/* 1. From the Founder Component (placed on top of SH Values) */}
      <div className="w-full">
        <FromTheFounder />
      </div>

      {/* 2. SH Values Section */}
      <section className="py-10 sm:py-14 md:py-16 lg:py-20 w-full overflow-hidden font-manrope">
        {/* Top Layout: Left Column & Right Cards */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-6 items-start w-full">
          {/* Left Text Column */}
          <div className="w-full lg:w-[36%] xl:w-[33%] flex-shrink-0 pt-0.5">
            {/* Red Tag / Mini Title */}
            <p className="text-[#CC1518] text-xs sm:text-[13px] font-semibold tracking-[0.2em] uppercase mb-3">
              SH VALUES
            </p>

            {/* Main Title */}
            <BlurText
              text="What We Stand For"
              delay={35}
              animateBy="words"
              direction="bottom"
              className="font-manrope font-semibold text-3xl sm:text-4xl md:text-[38px] xl:text-[42px] text-[#191919] tracking-tight leading-[1.18] mb-5"
            />

            {/* Exact Paragraph Description from Screenshot */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              viewport={{ once: true }}
              className="text-[#737373] text-[14px] sm:text-lg font-normal leading-[1.7] "
            >
              At Sumanth Homes, we believe a home should be thoughtfully designed, carefully built, and made to last. From the materials we choose to the way we manage each project, we focus on quality, transparency, and attention to detail—creating spaces that feel considered, comfortable, and truly yours.
            </motion.p>
          </div>

          {/* Right Cards Track */}
          <div {...swipeHandlers} className="w-full lg:w-[64%] xl:w-[67%] overflow-hidden">
            <div
              ref={trackRef}
              onScroll={handleScroll}
              className="relative flex items-start gap-4 sm:gap-5 md:gap-6 overflow-x-auto scroll-smooth pb-3"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {valuesCards.map((card) => (
                <div
                  key={card.id}
                  className="w-[78vw] sm:w-[310px] md:w-[340px] lg:w-[360px] xl:w-[380px] flex-shrink-0 group"
                >
                  {/* Image Container: Staggered height matching exact mockup (Tall vs Shorter) */}
                  <div
                    className={`w-full overflow-hidden bg-gray-100 ${card.isTall
                        ? 'h-[340px] sm:h-[390px] md:h-[420px] lg:h-[440px]'
                        : 'h-[250px] sm:h-[290px] md:h-[310px] lg:h-[325px]'
                      }`}
                  >
                    <img
                      src={card.image}
                      alt={card.alt}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  {/* Card Title */}
                  <h3 className="font-manrope font-semibold text-xl sm:text-[22px] text-[#191919] mt-4 tracking-tight leading-snug">
                    {card.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-[#737373] text-[13px] sm:text-sm font-normal leading-relaxed mt-1.5 max-w-[320px]">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Controls Bar: 00 ────── 01 on left, ← → arrows on right */}
        <div className="flex items-center justify-between w-full mt-8 sm:mt-10 md:mt-12 pt-2 pr-6 sm:pr-10 md:pr-16 lg:pr-24 xl:pr-28">
          {/* Progress & Pagination (00 ------ 01) */}
          <div className="flex items-center gap-3 sm:gap-4 select-none">
            <span className="text-xs sm:text-sm font-medium text-[#737373]">
              00
            </span>

            {/* Progress bar line that expands from 00 towards 01 */}
            <div className="w-32 sm:w-44 md:w-52 h-[1.5px] bg-[#E0E0E0] relative overflow-hidden">
              <div
                className="absolute top-0 bottom-0 left-0 bg-[#4A4A4A] transition-all duration-300 ease-out"
                style={{
                  width: `${progress}%`,
                }}
              />
            </div>

            <span className="text-xs sm:text-sm font-semibold text-[#CC1518]">
              01
            </span>
          </div>

          {/* Clean Arrow Navigation Buttons (← →) without circles matching mockup */}
          <div className="flex items-center gap-6 sm:gap-8">
            <button
              type="button"
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className={`transition-all duration-300 p-1.5 flex items-center justify-center ${currentIndex === 0
                  ? 'text-[#9E9E9E] cursor-not-allowed opacity-60'
                  : 'text-[#CC1518] hover:scale-115 cursor-pointer'
                }`}
              aria-label="Previous card"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M19 12H5m0 0l6-6m-6 6l6 6"
                />
              </svg>
            </button>

            <button
              type="button"
              onClick={nextSlide}
              disabled={currentIndex >= maxIndex}
              className={`transition-all duration-300 p-1.5 flex items-center justify-center ${currentIndex >= maxIndex
                  ? 'text-[#9E9E9E] cursor-not-allowed opacity-60'
                  : 'text-[#CC1518] hover:scale-115 cursor-pointer'
                }`}
              aria-label="Next card"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M5 12h14m0 0l-6-6m6 6l-6 6"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SHValues