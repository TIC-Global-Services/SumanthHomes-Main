import React from 'react'
import Hero from '../Components/padmavathi-garden/hero'
import BuildFor from '../Components/padmavathi-garden/buildfor'
import Discover from '../Components/padmavathi-garden/discover'
import Showreel from '../Components/padmavathi-garden/showreel'
import Ongoing from '../Components/padmavathi-garden/ongoing'
import FindYour from '../Components/padmavathi-garden/findyour'

const PadmavathiGarden = () => {
  return (
    <div className="w-full bg-[#fbfbfb] min-h-screen">
      <Hero />
      <BuildFor />
      <Discover />
      <Showreel />
      <Ongoing />
      <FindYour />
    </div>
  )
}

export default PadmavathiGarden