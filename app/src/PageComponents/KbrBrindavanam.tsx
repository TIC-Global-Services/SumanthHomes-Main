import React from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'
import { ScrollToTop } from '../utils/ScrollToTop'
import Hero from '../Components/kbrBrindhavan/hero'
import InspiredBy from '../Components/kbrBrindhavan/inspiredby'
import Discover from '../Components/kbrBrindhavan/discover'
import Showreel from '../Components/kbrBrindhavan/showreel'
import Ongoing from '../Components/kbrBrindhavan/ongoing'
import FindYour from '../Components/kbrBrindhavan/findyour'

const KbrBrindavanam: React.FC = () => {
  return (
    <div className="w-full bg-[#fbfbfb] min-h-screen">
      <ParallaxProvider>
        <ScrollToTop />
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Inspired by Luxury / Designed for Life Section */}
        <InspiredBy />

        {/* 3. Discover the Complete Lifestyle Section */}
        <Discover />

        {/* 4. Showreel / Video Section */}
        <Showreel />

        {/* 5. Ongoing Developments Section */}
        <Ongoing />

        {/* 6. Find Your Dream Home Call-to-Action Section */}
        <FindYour />
      </ParallaxProvider>
    </div>
  )
}

export default KbrBrindavanam