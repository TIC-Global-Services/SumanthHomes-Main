import React from 'react'
import BlurText from '../../utils/BlurText'

const Community: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-8 md:px-[5%] w-full">
      <div className="">
        {/* Section Heading & Subtitle (Centered) */}
        <div className="md:text-center max-w-7xl mx-auto mb-10 md:mb-14">
          <BlurText
            text="A Community Designed Around Modern Living"
            delay={30}
            animateBy="words"
            direction="bottom"
            className="text2xl sm:text-2xl lg:text-4xl font-semibold text-black tracking-tight justify-start lg:justify-center"
          />
          <BlurText
            text="Lotus Serene Villas – Phase I is an exclusive gated villa community offering elegantly designed homes, expansive living spaces, and world-class amenities. Surrounded by serene landscapes, it delivers a lifestyle that blends sophistication, comfort, and everyday convenience."
            delay={15}
            animateBy="words"
            direction="bottom"
            className="text-[#929292] text-sm sm:text-base lg:text-lg leading-[1.2] mt-4 lg:max-w-4xl lg:mx-auto justify-start"
          />
        </div>

        {/* Community Images Grid: 2 Top + 1 Bottom */}
        <div className="flex flex-col gap-4 md:gap-6">
          {/* Top Row: 2 Images Side-by-Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-4">
            <div className="overflow-hidden bg-gray-100 group shadow-sm">
              <img
                src="/loutus-phase-1/lotus-community-1.jpg"
                alt="Lotus Serene Villas - Modern Living Villa Elevation"
                className="w-full h-[300px] sm:h-[380px] md:h-[440px] lg:h-[480px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="overflow-hidden bg-gray-100 group shadow-sm">
              <img
                src="/loutus-phase-1/lotus-community-2.jpg"
                alt="Lotus Serene Villas - Premium Gated Community Living"
                className="w-full h-[300px] sm:h-[380px] md:h-[440px] lg:h-[480px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>

          {/* Bottom Row: 1 Full-Width Image */}
          <div className="w-full overflow-hidden bg-gray-100 group shadow-sm">
            <img
              src="/loutus-phase-1/lotus-community-3.jpg"
              alt="Lotus Serene Villas - Gated Avenue and Villas"
              className="w-full h-[280px] sm:h-[360px] md:h-[440px] lg:h-[520px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Community