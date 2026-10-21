import React from 'react'
import { ScrollToTop } from '../utils/ScrollToTop'
import Hero from '../Components/padmavathi-garden/hero'
import BuildFor from '../Components/padmavathi-garden/buildfor'
import Discover from '../Components/padmavathi-garden/discover'
import Showreel from '../Components/padmavathi-garden/showreel'
import Ongoing from '../Components/padmavathi-garden/ongoing'
import FindYour from '../Components/padmavathi-garden/findyour'
import OngoingDevelopment from '../Components/Project/ongoingDevelopment'
import Community from '../Components/padmavathi-garden/community'

const PadmavathiGarden = () => {
  return (
    <div className="w-full bg-[#fbfbfb] min-h-screen">
      <ScrollToTop />
      <Hero />
      <Discover />
      <Community />
      <Showreel />
      <OngoingDevelopment />
    </div>
  )
}

export default PadmavathiGarden