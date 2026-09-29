import React from 'react'

const Hero: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#22331c]">
      {/* Hero Banner Image */}
      <div className="relative w-full h-screen flex items-center justify-center">
        <img
          src="/loutus-phase-1/lotus-villas-phase-1-hero.png"
          alt="Lotus Serene Villas - Phase I Aerial View"
          className="w-full h-full object-cover object-top select-none"
          loading="eager"
        />
        {/* Subtle Gradient Overlays for Depth and Seamless Section Flow */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/30 pointer-events-none" />
      </div>
    </section>
  )
}

export default Hero