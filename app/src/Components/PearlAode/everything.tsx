import React from 'react'
import BlurText from '../../utils/BlurText'

const Everything: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-8 md:px-[5%] w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left Column: Heading, Description & Download Brochure CTA */}
        <div className="flex flex-col justify-center">
          <BlurText
            text="Everything You Need, All in One Place"
            delay={25}
            animateBy="words"
            direction="bottom"
            className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 tracking-tight leading-tight mb-6"
          />

          <p className="text-[#929292] text-sm sm:text-base md:text-lg leading-relaxed mb-8 max-w-xl">
            Get a closer look at <span className='font-medium text-black'>Pearl Adobe </span>through our detailed brochure. Explore the community vision, home designs, floor plans, premium amenities, and key features that come together to create a comfortable, modern, and well-connected lifestyle.
          </p>

          <div>
            <a
              href="/contact"
              className="inline-block bg-[#CCA062] hover:bg-[#b88f54] text-white px-8 py-3.5 rounded-lg text-xs sm:text-sm font-semibold uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
            >
              Download Brochure
            </a>
          </div>
        </div>

        {/* Right Column: Building Exterior Elevation Image */}
        <div className="w-full h-72 sm:h-96 md:h-[420px] rounded-2xl overflow-hidden shadow-xl bg-gray-200 group">
          <img
            src="/pearlaode/designedfor-3.png"
            alt="Pearl Abode - Everything You Need, All in One Place"
            className="w-full h-full object-cover transition-transform duration-700 ease-out scale-105"
          />
        </div>
      </div>
    </section>
  )
}

export default Everything