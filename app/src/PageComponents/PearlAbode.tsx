import React from 'react'
import { ScrollToTop } from '../utils/ScrollToTop'
import Hero from '../Components/PearlAode/hero'
import Timeless from '../Components/PearlAode/timeless'
import DesignedFor from '../Components/PearlAode/designedfor'
import Everything from '../Components/PearlAode/everything'
import Aminities from '../Components/PearlAode/aminities'
import Showreel from '../Components/PearlAode/showreel'
import Ongoing from '../Components/PearlAode/ongoing'
import FindYour from '../Components/PearlAode/findyour'

const PearlAbode: React.FC = () => {
  return (
    <div className="w-full bg-[#fbfbfb] min-h-screen">
      <ScrollToTop />
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Timeless Homes / Lasting Memories Section */}
      <Timeless />

      {/* 3. Designed for the Way You Live (GSAP Pinned ScrollTrigger Section) */}
      <DesignedFor />

      {/* 4. Everything You Need, All in One Place Section */}
      <Everything />

      {/* 5. Amenities, Floor Plans, Specifications, Location Section */}
      <Aminities />

      {/* 6. Showreel Section */}
      <Showreel />

      {/* 7. Ongoing Developments Section */}
      <Ongoing />

      {/* 8. Find Your Dream Home Section */}
      <FindYour />
    </div>
  )
}

export default PearlAbode
