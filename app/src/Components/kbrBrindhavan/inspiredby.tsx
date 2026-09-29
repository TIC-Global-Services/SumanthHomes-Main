import React from 'react'
import BlurText from '../../utils/BlurText'

const InspiredBy: React.FC = () => {
  return (
    <section className="py-16 md:py-20 px-[5%] w-full bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left Column: Villa Photo */}
        <div className="w-full h-72 sm:h-96 md:h-[420px] lg:h-[460px] overflow-hidden shadow-xl bg-gray-100 group">
          <img
            src="/brindavan/inspired-by.jpg"
            alt="Inspired by Luxury - KBR Brindavanam Villa Elevation"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>

        {/* Right Column: Text Information */}
        <div className="flex flex-col justify-center">
          <div className="mb-2">
            <BlurText
              text="Inspired by Luxury"
              delay={30}
              animateBy="words"
              direction="bottom"
              className="text-lg sm:text-xl md:text-[34px] font-semibold text-gray-800 tracking-tight"
            />
          </div>

          <div className="mb-6">
            <BlurText
              text="Designed for Life"
              delay={35}
              animateBy="words"
              direction="bottom"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#B50404] tracking-tight leading-tight"
            />
          </div>

          <BlurText
            text="Experience a lifestyle of comfort and elegance at KBR Brindavanam, a premium residential development crafted for contemporary living. With beautifully designed homes, green open spaces, and thoughtfully integrated amenities, it creates the perfect balance between serenity and everyday convenience."
            delay={20}
            animateBy="words"
            direction="bottom"
            className="text-[#666666] text-sm sm:text-base md:text-2xl leading-[1.2] max-w-xl"
          />
        </div>
      </div>
    </section>
  )
}

export default InspiredBy