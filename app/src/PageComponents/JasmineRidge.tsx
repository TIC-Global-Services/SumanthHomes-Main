import React from 'react'
import { ScrollToTop } from '../utils/ScrollToTop'
import Hero from '../Components/JasmineRidge/hero'
import Thoughtful from '../Components/JasmineRidge/Thoughtful'
import ExploreDetails from '../Components/JasmineRidge/exploreDetails'
import FindyourDream from '../Components/JasmineRidge/FindyourDream'
import OngoingDevelopment from '../Components/Project/ongoingDevelopment'

const JasmineRidge: React.FC = () => {
  return (
    <div className="w-full bg-[#fbfbfb] min-h-screen">
      <ScrollToTop />
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Thoughtfully Designed Section (with custom Showreel) */}
      <Thoughtful />

      {/* 3. Explore Details Slider */}
      <ExploreDetails />

      {/* 4. Find Your Dream Home Section */}
      <FindyourDream />

      {/* 5. Ongoing Developments Section */}
      <OngoingDevelopment />
    </div>
  )
}

export default JasmineRidge
