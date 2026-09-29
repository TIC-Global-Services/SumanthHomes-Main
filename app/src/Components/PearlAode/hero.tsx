import React from 'react'

const Hero: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#202722]">
      {/* Hero Banner Image */}
      <div className="relative w-full h-screen flex items-center justify-center">
        <img
          src="/pearlaode/pearl-adode-hero.png"
          alt="Sri Vasantha Pearl Abode - Premium Apartments by Sumanth Homes"
          className="w-full h-full object-cover object-center select-none"
          loading="eager"
        />
        {/* Subtle Gradient Overlays for Depth and Seamless Section Flow */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/30 pointer-events-none" />

        {/* Brand Overlay Badge at Bottom Right matching design */}
        <div className="absolute bottom-6 sm:bottom-10 right-6 sm:right-12 z-10 text-right select-none pointer-events-none bg-black/15 backdrop-blur-[2px] px-4 py-2 rounded-lg">
          <p className="text-[11px] sm:text-xs md:text-sm font-semibold tracking-widest text-[#408C8C] uppercase drop-shadow-sm">
            Sri Vasantha
          </p>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-light text-[#2B7A78] tracking-wide flex items-center justify-end gap-1.5 drop-shadow-md">
            <span>Pearl</span>
            <span className="font-semibold text-[#1F5F5B]">Abode</span>
          </h1>
        </div>
      </div>
    </section>
  )
}

export default Hero