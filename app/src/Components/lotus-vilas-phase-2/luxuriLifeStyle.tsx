import React from 'react'
import BlurText from '../../utils/BlurText'

const LuxuriLifeStyle: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-[5%] w-full flex flex-col items-center bg-white">
      {/* Headings */}
      <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
        <BlurText
          text="A Superior Expression of"
          delay={25}
          animateBy="words"
          direction="bottom"
          className="text-lg md:text-[34px] font-semibold text-gray-800 tracking-tighter flex justify-center mb-1"
        />
        <BlurText
          text="Luxurious Lifestyle"
          delay={35}
          animateBy="words"
          direction="bottom"
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#164944] flex justify-center"
        />
      </div>

      {/* Featured Elevation Image */}
      <div className="w-full max-w-5xl  overflow-hidden  transition-shadow duration-500 bg-gray-100 mb-8 md:mb-12 group">
        <img
          src="/lotus-vila/luxury-lifetyle.jpg"
          alt="Lotus Serene Villas - Luxurious Lifestyle Elevation"
          className="w-full h-auto max-h-[550px] object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Bottom Description */}
      <div className="max-w-4xl mx-auto text-center px-4">
        <BlurText
          text="Nestled amidst serene surroundings, Lotus Serene Villas – Phase II by Sumanth Homes is an exclusive gated villa community designed for families seeking privacy, comfort, and timeless elegance. Thoughtfully planned homes, premium amenities, and lush landscapes come together to create a lifestyle that feels refined and effortlessly connected."
          delay={20}
          animateBy="words"
          direction="bottom"
          className="text-gray-600 text-sm md:text-base lg:text-lg leading-[1.2] justify-center"
        />
      </div>
    </section>
  )
}

export default LuxuriLifeStyle