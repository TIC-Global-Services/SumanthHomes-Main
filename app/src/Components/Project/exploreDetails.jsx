import React from 'react'
import banner from '../../assets/img/OurProjectsSection/explore_banner.jpg'
import BlurText from '../../utils/BlurText'

const ExploreDetails = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-[5%] w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Image Content */}
        <div className="w-full h-64 md:h-[400px] bg-gray-200 overflow-hidden shadow-lg order-2 md:order-1">
          <img 
            src={banner} 
            alt="Explore Details" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col space-y-6 order-1 md:order-2">
          <BlurText 
              text="Explore Every Detail Before You Move In"
              delay={30}
              animateBy="words"
              direction="bottom" 
              className="text-3xl md:text-4xl font-semibold leading-tight text-gray-900" />
          <BlurText 
              text="Discover the thoughtfully designed spaces, premium amenities, floor plans, and specifications that make Urbanscapes a landmark address in Tirupati. Download our brochure to get a complete overview of the project and experience elevated living crafted for modern families."
              delay={30}
              animateBy="words"
              direction="bottom" 
              className="text-gray-600 leading-relaxed max-w-lg" />
          <div>
            <button className="bg-[#5A3A2E] hover:bg-[#5a3f30] text-white px-8 py-3 rounded text-sm font-medium transition-colors">
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExploreDetails