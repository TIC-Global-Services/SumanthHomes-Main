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
import OngoingDevelopment from '../Components/Project/ongoingDevelopment'
import Community from '../Components/PearlAode/community'
import Discover from '../Components/PearlAode/discover'

const Pearlaode: React.FC = () => {
  return (
    <div className="w-full bg-[#fbfbfb] min-h-screen" style={{
      backgroundImage: "url('/pearl-adode-bg.png')",
      backgroundRepeat: 'repeat',
      backgroundSize: '1200px auto',
      backgroundPosition: 'top center',
    }}>
      <ScrollToTop />
      {/* 1. Hero Section */}
      <Hero />
      <Discover />
      {/* 3. A Community Designed Around Modern Living Section */}
      <Community />
      {/* 5. Amenities, Floor Plans, Specifications, Location Section */}
      <Aminities />
      {/* 6. Showreel Section */}
      <Showreel />
      {/* 7. Ongoing Developments Section */}
      <OngoingDevelopment />
      {/* 8. Find Your Dream Home Section */}
      {/* <FindYour /> */}
    </div>
  )
}

export default Pearlaode
