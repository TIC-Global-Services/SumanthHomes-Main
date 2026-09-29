import React from 'react'
import BlurText from '../../utils/BlurText'

const Hero: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#1a1a1a]">
      {/* Hero Banner Image */}
      <div className="relative w-full h-screen flex items-end">
        <img
          src="/padmavathi-garden/padhmavathi-hero.jpg"
          alt="KBR Brindavanam - Luxury Villa Community View"
          className="absolute inset-0 w-full h-full object-cover object-center select-none"
          loading="eager"
        />

        {/* Ambient Dark Gradient Overlays for Navigation and Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/40 pointer-events-none" />

        {/* Hero Title at Bottom Left */}
        <div className="relative z-10 w-full px-6 sm:px-10 md:px-[5%] pb-12 sm:pb-16 md:pb-20">
          <BlurText
            text="MN Sri Padmavati Gradens"
            delay={40}
            animateBy="words"
            direction="bottom"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-white tracking-tight drop-shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero