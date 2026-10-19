import React from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'
import { ScrollToTop } from '../utils/ScrollToTop'
import Hero from '../Components/lotus-vilas-phase-2/hero'
import LuxuriLifeStyle from '../Components/lotus-vilas-phase-2/luxuriLifeStyle'
import Community from '../Components/lotus-vilas-phase-2/community'
import Discover from '../Components/lotus-vilas-phase-2/discover'
import Aminities from '../Components/lotus-vilas-phase-2/aminities'
import ShowReel from '../Components/lotus-vilas-phase-2/showReel'
import OnGoingDevelopement from '../Components/lotus-vilas-phase-2/onGoingDevelopement'
import FindyourDream from '../Components/lotus-vilas-phase-2/FindyourDream'
import OngoingDevelopment from '../Components/Project/ongoingDevelopment'

const LotusSereneVillas: React.FC = () => {
  return (
    <div className="w-full bg-[#fbfbfb] min-h-screen">
      <ParallaxProvider>
        <ScrollToTop />
        {/* 1. Hero Section */}
        <Hero />
        <Discover />
        {/* 2. Thoughtfully Designed Section */}
        {/* <Thoughtful /> */}

        {/* 3. A Community Designed Around Modern Living Section */}
        <Community />



        {/* 5. Amenities, Floor Plans, Specifications, Location Section */}
        <Aminities />

        {/* 6. Showreel Section */}
        <ShowReel />

        {/* 7. Ongoing Developments Section */}
        <OngoingDevelopment />

        {/* 8. Find Your Dream Home Section */}
        <FindyourDream />
      </ParallaxProvider>
    </div>
  )
}

export default LotusSereneVillas