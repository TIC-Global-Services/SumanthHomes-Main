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
    <section className="py-16 md:py-24 px-4 md:px-[5%] w-full bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-center">
        {/* Left Column: Text Content */}
        <div className="flex flex-col space-y-6">
          <BlurText
            text="Discover the Complete Lifestyle"
            delay={30}
            animateBy="words"
            direction="bottom"
            className="text-3xl md:text-3xl lg:text-[2.375rem] font-semibold leading-tight text-gray-900"
          />
          <BlurText
            text="Explore every aspect of Lotus Serene Villas – Phase II through our comprehensive brochure. From the thoughtfully designed master plan and spacious villa configurations to premium amenities, architectural details, and community features, discover what makes this exclusive development a distinguished address crafted for refined and modern living."
            delay={20}
            animateBy="words"
            direction="bottom"
            className="text-[#929292] leading-relaxed text-sm md:text-base lg:text-xl"
          />
          <div className="pt-2">
            <button
              onClick={handleScrollToContact}
              className="bg-[#164944] hover:bg-[#0e2f25] text-white px-8 py-3.5 rounded-lg text-sm md:text-base font-medium shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
            >
              Download Brochure
            </button>
          </div>
        </div>

        {/* Right Column: Image Content */}
        <div className="w-full h-72 sm:h-80 md:h-[400px] lg:h-[440px] rounded-[4px] overflow-hidden shadow-xl bg-gray-100 group">
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