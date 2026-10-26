import React from 'react'
import BlurText from '../../utils/BlurText'

const Discover: React.FC = () => {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact-cta')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.location.href = '/contact'
    }
  }

  return (
    <section className="py-16 md:py-24 px-4 md:px-[5%] w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-center">
        {/* Left Column: Text Content */}
        <div className="flex flex-col space-y-4">
          <BlurText
            text="A Superior Expression of"
            delay={30}
            animateBy="words"
            direction="bottom"
            className="text-3xl md:text-3xl lg:text-[2rem] font-semibold leading-tight text-gray-900"
          />
          <BlurText
            text="Luxurious Lifestyle"
            delay={30}
            animateBy="words"
            direction="bottom"
            className="text-3xl md:text-3xl lg:text-[3rem] font-semibold leading-none text-[#164944]"
          />
          <BlurText
            text="Nestled amidst serene surroundings, Lotus Serene Villas – Phase II by Sumanth Homes is an exclusive gated villa community designed for families seeking privacy, comfort, and timeless elegance. Thoughtfully planned homes, premium amenities, and lush landscapes come together to create a lifestyle that feels refined and effortlessly connected."
            delay={20}
            animateBy="words"
            direction="bottom"
            className="text-[#929292] leading-relaxed text-sm md:text-base lg:text-xl"
          />
          {/* <div className="pt-2">
            <button
              onClick={handleScrollToContact}
              className="bg-[#164944] hover:bg-[#0e2f25] text-white px-8 py-3.5 rounded-lg text-sm md:text-base font-medium shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
            >
              Download Brochure
            </button>
          </div> */}
        </div>

        {/* Right Column: Image Content */}
        <div className="w-full h-72 sm:h-80 md:h-[400px] lg:h-[440px] overflow-hidden shadow-xl bg-gray-100 group">
          <img
            src="/lotus-vila/luxury-lifetyle.jpg"
            alt="Discover the complete lifestyle at Lotus Serene Villas"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </div>
    </section>
  )
}

export default Discover