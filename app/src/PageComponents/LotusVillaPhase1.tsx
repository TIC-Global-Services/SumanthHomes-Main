import React from 'react'
import { ScrollToTop } from '../utils/ScrollToTop'
import Hero from '../Components/lotus-villa-phase1/hero'
import Thoughtful from '../Components/lotus-villa-phase1/thoughtful'
import Community from '../Components/lotus-villa-phase1/community'
import Discover from '../Components/lotus-villa-phase1/discover'
import Aminities from '../Components/lotus-villa-phase1/aminities'
import Showreel from '../Components/lotus-villa-phase1/showreel'
import Ongoing from '../Components/lotus-villa-phase1/ongoing'
import FindYour from '../Components/lotus-villa-phase1/findyour'

const LotusVillaPhase1: React.FC = () => {
  return (
    <div className="w-full bg-[#fbfbfb] min-h-screen">
      <ScrollToTop />
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Thoughtfully Designed Section */}
      <Thoughtful />

      {/* 3. A Community Designed Around Modern Living Section */}
      <Community />

      {/* 4. Discover the Complete Lifestyle Section */}
      <Discover />

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

export default LotusVillaPhase1
