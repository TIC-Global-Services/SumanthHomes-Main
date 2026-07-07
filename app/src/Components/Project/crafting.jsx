import React from 'react'
import banner from '../../assets/img/OurProjectsSection/urban_hormony.jpg'

const Crafting = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-[5%] w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div className="flex flex-col space-y-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Crafting <span className='text-[#5A3A2E]'>Urban Harmony</span> <br /> for <span>Superior Living</span>
          </h2>
          <p className="text-gray-600 leading-relaxed">
            A premium residential community by Sumanth Homes, thoughtfully designed to blend contemporary architecture with timeless Indian values. Located in the heart of Tirupati, Urbanscapes offers spacious 2 & 3 BHK residences with exceptional connectivity, modern amenities, and 100% Vaastu-compliant planning.
          </p>
        </div>

        {/* Image Content */}
        <div className="w-full h-64 md:h-[400px] bg-gray-200 overflow-hidden shadow-lg">
          <img 
            src={banner}
            alt="Crafting Urban Harmony" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default Crafting