import React, { useState, useRef, useEffect } from 'react'
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
  const ref = useRef<HTMLParagraphElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
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

export interface ThoughtfulProps {
  id?: string
  subtitle?: string
  title?: string
  highlightedText?: string
  highlightTextColor?: string
  description?: string
  videoUrl?: string
  thumbnailSrc?: string
  thumbnailAlt?: string
  buttonText?: string
  buttonColor?: string
  className?: string
}

const Thoughtful: React.FC<ThoughtfulProps> = ({
  id = 'thoughtful-section',
  subtitle = 'Thoughtfully Designed',
  title = 'For Every Family.',
  highlightedText = 'Lotus Serene Villas – Phase I',
  highlightTextColor = '#CC1518',
  description = 'offers elegant, independent homes nestled in lush green surroundings. This secure gated community perfectly combines premium amenities with privacy for a timeless family lifestyle.',
  videoUrl = 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1',
  thumbnailSrc = '/jasmine-ridge/jasmine-showreel-clean.png',
  thumbnailAlt = 'Jasmine Ridge Heritage Showreel',
  buttonText = 'SHOWREEL',
  buttonColor = '#CC1518',
  className = '',
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false)

  return (
    <section
      id={id}
      className={`py-14 sm:py-20 md:py-24 px-4 sm:px-8 md:px-[5%] w-full ${className}`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header (Subtitle, Title, Description) */}
        <div className="text-center max-w-4xl mx-auto mb-10 md:mb-14">
          {/* Subtitle */}
          {subtitle && (
            <BlurText
              text={subtitle}
              delay={20}
              animateBy="words"
              direction="bottom"
              className="text-xl sm:text-2xl md:text-[32px] font-semibold tracking-tight text-gray-900 justify-center mb-1"
            />
          )}

          {/* Title */}
          {title && (
            <BlurText
              text={title}
              delay={30}
              animateBy="words"
              direction="bottom"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-semibold tracking-tight leading-tight justify-center mb-6"
              style={{ color: highlightTextColor }}
            />
          )}

          {/* Animated Description */}
          {description && (
            <AnimatedDescription
              highlightedText={highlightedText}
              highlightTextColor={highlightTextColor}
              description={description}
              delay={15}
              className="text-[#2b2b2b] text-sm sm:text-base md:text-lg lg:text-[19px] leading-relaxed tracking-tight max-w-3xl mx-auto justify-center"
            />
          )}
        </div>

        {/* Showreel Card matching Image 2 */}
        <div className="relative w-full h-[45vh] sm:h-[55vh] md:h-[65vh] overflow-hidden shadow-2xl group bg-neutral-900">
          {isPlaying ? (
            <div className="relative w-full h-full flex items-center justify-center bg-black">
              <iframe
                className="w-full h-full"
                src={videoUrl}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <button
                onClick={() => setIsPlaying(false)}
                className="absolute top-4 right-4 bg-black/75 hover:bg-black text-white px-4 py-2 rounded-full text-xs font-semibold backdrop-blur-sm transition-all cursor-pointer z-20"
                aria-label="Close showreel video"
              >
                ✕ Close
              </button>
            </div>
          ) : (
            <>
              {/* Showreel Thumbnail */}
              <img
                src={thumbnailSrc}
                alt={thumbnailAlt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Ambient Hover Overlay */}
              <div
                onClick={() => setIsPlaying(true)}
                className="absolute inset-0 bg-black/15 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center cursor-pointer"
                role="button"
                tabIndex={0}
                aria-label="Play showreel"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setIsPlaying(true)
                  }
                }}
              >
                {/* Center White Play Button Icon */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/95 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300 text-gray-900 border border-white/60">
                  <svg
                    className="w-7 h-7 sm:w-9 sm:h-9 ml-1 fill-black"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              {/* Bottom Right Flat Solid Red Button */}
              <button
                type="button"
                onClick={() => setIsPlaying(true)}
                style={{ backgroundColor: buttonColor }}
                className="absolute bottom-0 right-0 text-white px-6 sm:px-12 py-2.5 sm:py-3.5 text-xs sm:text-sm font-semibold tracking-wider uppercase backdrop-blur-md shadow-lg hover:brightness-105 transition-all duration-200 cursor-pointer flex items-center justify-center"
              >
                <span>{buttonText}</span>
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  )
}

export default Thoughtful