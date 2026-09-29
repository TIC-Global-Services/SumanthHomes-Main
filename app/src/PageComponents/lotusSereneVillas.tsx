import React from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'
import { ScrollToTop } from '../utils/ScrollToTop'
import Hero from '../Components/lotus-vilas/hero'
import LuxuriLifeStyle from '../Components/lotus-vilas/luxuriLifeStyle'
import Community from '../Components/lotus-vilas/community'
import Discover from '../Components/lotus-vilas/discover'
import Aminities from '../Components/lotus-vilas/aminities'
import ShowReel from '../Components/lotus-vilas/showReel'
import OnGoingDevelopement from '../Components/lotus-vilas/onGoingDevelopement'
import FindyourDream from '../Components/lotus-vilas/FindyourDream'

const LotusSereneVillas: React.FC = () => {
  return (
    <div className="w-full bg-[#fbfbfb] min-h-screen">
      <ParallaxProvider>
        <ScrollToTop />
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Luxurious Lifestyle Section */}
        <LuxuriLifeStyle />

        {/* 3. Community Designed Around Modern Living Section */}
        <Community />

        {/* 4. Discover the Complete Lifestyle Section */}
        <Discover />

        {/* 5. Amenities, Floor Plans, Specifications, Location Section */}
        <Aminities />

        {/* 6. Video / Showreel Section */}
        <ShowReel />

        {/* 7. Ongoing Developments Section */}
        <OnGoingDevelopement />

        {/* 8. Find Your Dream Home Call-to-Action Section */}
        <FindyourDream />
      </ParallaxProvider>
    </div>
  )
}

export default LotusSereneVillas