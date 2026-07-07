import React from 'react'
import banner from '../../assets/img/OurProjectsSection/project_hero_banner.png'
import logo from '../../assets/img/OurProjectsSection/urbanscapes_logo.png'

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen bg-gray-300">
      {/* Background Image Placeholder */}
      <img
        src={banner}
        alt="Urbanscapes Building"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Overlay to darken image if needed */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Centered Content */}
      <div className="absolute inset-0 z-10 flex items-start -top-[15%] justify-center text-white px-4">
        <img src={logo} alt="" width={800} height={700} />
      </div>
    </section>
  )
}

export default Hero