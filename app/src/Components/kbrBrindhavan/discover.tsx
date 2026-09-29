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
    <section className="py-16 md:py-24 px-4 sm:px-8 md:px-[5%] w-full bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left Column: Text Content */}
        <div className="flex flex-col justify-center">
          <div className="mb-6">
            <BlurText
              text="Discover the Complete Lifestyle"
              delay={30}
              animateBy="words"
              direction="bottom"
              className="text-3xl sm:text-4xl md:text-[38px] font-semibold leading-tight text-gray-900 tracking-tight"
            />
          </div>

          <div className="mb-8">
            <BlurText
              text="Explore every aspect of Lotus Serene Villas – Phase II through our comprehensive brochure. From the thoughtfully designed master plan and spacious villa configurations to premium amenities, architectural details, and community features, discover what makes this exclusive development a distinguished address crafted for refined and modern living.."
              delay={20}
              animateBy="words"
              direction="bottom"
              className="text-[#666666] text-sm sm:text-base md:text-lg leading-relaxed max-w-xl"
            />
          </div>

          <div>
            <button
              onClick={handleScrollToContact}
              className="inline-flex items-center gap-2.5 bg-[#B50404] hover:bg-[#8e0303] text-white px-8 py-3.5 rounded-lg text-sm sm:text-base font-semibold shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 uppercase tracking-wider cursor-pointer"
            >
              <span>Download Brochure</span>
              
            </button>
          </div>
        </div>

        {/* Right Column: Architectural Elevation Image */}
        <div className="w-full h-72 sm:h-96 md:h-[420px] lg:h-[460px] rounded-2xl overflow-hidden shadow-xl bg-gray-100 group">
          <img
            src="/brindavan/discover.jpg"
            alt="KBR Brindavanam - Architectural Villa Gated Community Render"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>
      </div>
    </section>
  )
}

export default Discover