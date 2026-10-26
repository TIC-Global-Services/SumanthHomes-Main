import React from 'react'
import BlurText from '../../utils/BlurText'

const ctaData = {
  title: 'Find Your Dream Home',
  prefix: 'at',
  subtitle: 'Jasmine Ridge',
  description:
    'Experience elevated living where thoughtful design meets exceptional comfort. Discover a lifestyle built around convenience, community, and timeless quality.',
  buttonText: 'DOWNLOAD BROCHURE',
  phoneNumbers: ['+91 7680 999 899', '+91 8220 637 727'],
  image: '/brindavan/dream-home.jpg',
  imageAlt: 'Dream Home at Jasmine Ridge',
}

const FindyourDream: React.FC = () => {
  return (
    <section id="contact-cta" className="pb-32 pt-8 md:pt-16 px-4 md:px-[5%] w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-center max-w-7xl mx-auto">
        {/* 1. Image Content (Swapped to First / Left Position) */}
        <div className="w-full h-72 sm:h-80 md:h-[420px] overflow-hidden shadow-xl bg-gray-200 group">
          <img
            src={ctaData.image}
            alt={ctaData.imageAlt}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        {/* 2. Text Content (Swapped to Second / Right Position) */}
        <div className="flex flex-col space-y-6">
          <div className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.2]">
            <BlurText
              text={ctaData.title}
              delay={30}
              animateBy="words"
              direction="bottom"
              className="text-gray-900 block mb-1"
            />
            <div className="flex items-center gap-2">
              <span className="text-gray-900">{ctaData.prefix}</span>
              <BlurText
                text={ctaData.subtitle}
                delay={35}
                animateBy="words"
                direction="bottom"
                className="inline text-[#CC1518]"
              />
            </div>
          </div>

          <BlurText
            text={ctaData.description}
            delay={25}
            animateBy="words"
            direction="bottom"
            className="text-[#929292] leading-relaxed max-w-lg text-sm md:text-base lg:text-lg"
          />

          <div className="pt-2">
            <a
              href="/contact"
              className="inline-block bg-[#CC1518] hover:bg-[#B50404] text-white px-8 py-3.5 text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-200 shadow-md hover:shadow-xl hover:-translate-y-0.5 mb-4"
            >
              {ctaData.buttonText}
            </a>

            <div className="flex flex-wrap items-center gap-2 text-sm lg:text-xl font-semibold text-[#CC1518] mt-2">
              <span>Call :</span>
              {ctaData.phoneNumbers.map((phone, idx) => (
                <span key={idx} className="flex items-center">
                  <a
                    href={`tel:${phone.replace(/\s+/g, '')}`}
                    className="hover:underline transition-colors"
                  >
                    {phone}
                  </a>
                  {idx < ctaData.phoneNumbers.length - 1 && <span className="mx-2 text-gray-400">|</span>}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default FindyourDream