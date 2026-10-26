import React from 'react'
import BlurText from '../../utils/BlurText'

export interface HeroProps {
  banner?: string
  title?: string
  alt?: string
  className?: string
}

const Hero: React.FC<HeroProps> = ({
  banner = '/jasmin-redign.png',
  title = 'Jasmine Ridge',
  alt = 'Jasmine Ridge',
  className = '',
}) => {
  return (
    <section
      id="hero"
      className={`relative w-full h-[70vh] sm:h-[82vh] md:h-[90vh] lg:h-screen min-h-[500px] overflow-hidden bg-neutral-900 ${className}`}
    >
      <img
        src={banner}
        alt={alt}
        className="w-full h-full object-cover object-center select-none"
        loading="eager"
      />
      {/* Subtle bottom gradient vignette for depth and text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />

      {/* Centered title overlay at bottom */}
      <div className="absolute inset-x-0 bottom-8 sm:bottom-12 md:bottom-16 z-10 flex items-center justify-center text-center px-4 pointer-events-none">
        <BlurText
          text={title}
          delay={40}
          animateBy="words"
          direction="bottom"
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-white tracking-tight drop-shadow-2xl justify-center"
        />
      </div>
    </section>
  )
}

export default Hero
