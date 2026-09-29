import React from 'react'
import BlurText from '../../utils/BlurText'

const Community: React.FC = () => {
  return (
    <section className="py-12 md:py-20 px-4 md:px-[5%] w-full bg-white">
      {/* Header Section: Title on Left, Description on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start mb-8 md:mb-12">
        <div className="lg:col-span-6">
          <BlurText
            text="A Community Designed Around Modern Living"
            delay={30}
            animateBy="words"
            direction="bottom"
            className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.15] text-gray-900 tracking-tight"
          />
        </div>
        <div className="lg:col-span-6 flex justify-start lg:justify-end">
          <BlurText
            text="Lotus Serene Villas Phase II is a premium gated development featuring beautifully crafted independent villas with spacious layouts and thoughtfully curated amenities. Every home is designed to provide the perfect balance of luxury, functionality, and tranquility."
            delay={20}
            animateBy="words"
            direction="bottom"
            className="text-gray-500 text-sm md:text-lg leading-[1.2] text-right max-w-2xl"
          />
        </div>
      </div>

      {/* Asymmetric Staggered Image Grid */}
      <div className="flex flex-col gap-3 md:gap-4 lg:gap-5">
        {/* Top Row: Wide (left 58.5%) + Narrow (right 41.5%) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 lg:gap-5">
          <div className="md:col-span-7 h-64 sm:h-80 md:h-[300px] lg:h-[300px] overflow-hidden bg-gray-100 group">
            <img
              src="/lotus-vila/community-1.jpg"
              alt="Clubhouse at Lotus Serene Villas"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
          <div className="md:col-span-5 h-64 sm:h-80 md:h-[300px] lg:h-[300px] overflow-hidden bg-gray-100 group">
            <img
              src="/lotus-vila/community-2.jpg"
              alt="Villa Avenue Walkways"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
        </div>

        {/* Bottom Row: Narrow (left 41.5%) + Wide (right 58.5%) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 lg:gap-5">
          <div className="md:col-span-5 h-64 sm:h-80 md:h-[300px] lg:h-[300px] overflow-hidden bg-gray-100 group">
            <img
              src="/lotus-vila/community-3.jpg"
              alt="Pergola Central Park and Gazebo"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
          <div className="md:col-span-7 h-64 sm:h-80 md:h-[300px] lg:h-[300px] overflow-hidden bg-gray-100 group">
            <img
              src="/lotus-vila/community-4.jpg"
              alt="Grand Entrance Arch Gate"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Community