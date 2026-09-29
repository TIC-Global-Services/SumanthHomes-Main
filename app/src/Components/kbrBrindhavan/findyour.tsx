import React from 'react'
import BlurText from '../../utils/BlurText'

const ctaData = {
  title: 'Find Your Dream Home',
  subtitlePrefix: 'at ',
  subtitleHighlight: 'Urbanscapes',
  description:
    'Experience elevated living where thoughtful design meets exceptional comfort. Discover a lifestyle built around convenience, community, and timeless quality.',
  buttonText: 'Book a Site Visit Today',
  phoneNumbers: ['+91 7680 999 899', '+91 8220 637 727'],
  image: '/brindavan/dream-home.jpg',
  imageAlt: 'Find Your Dream Home at Urbanscapes'
}

const FindYour: React.FC = () => {
  return (
    <section id="contact-cta" className="pb-28 sm:pb-32 pt-8 sm:pt-12 md:pt-16 px-[5%] w-full bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left Column: Image */}
        <div className="w-full h-72 sm:h-96 md:h-[420px] lg:h-[450px]  overflow-hidden shadow-xl bg-gray-200 group">
          <img
            src={ctaData.image}
            alt={ctaData.imageAlt}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>

        {/* Right Column: Information & Call to Action */}
        <div className="flex flex-col justify-center">
          <div>
            <BlurText
              text={ctaData.title}
              delay={30}
              animateBy="words"
              direction="bottom"
              className="text-3xl sm:text-4xl md:text-[38px] font-semibold leading-tight text-gray-900 tracking-tight"
            />
            <div className="flex items-center text-3xl sm:text-4xl md:text-[38px] font-semibold leading-tight text-gray-900 tracking-tight mt-1">
              <span>{ctaData.subtitlePrefix}</span>
              <span className="text-[#B50404] font-semibold ml-2">{ctaData.subtitleHighlight}</span>
            </div>
          </div>

          <div className="mt-4 mb-6">
            <BlurText
              text={ctaData.description}
              delay={25}
              animateBy="words"
              direction="bottom"
              className="text-[#666666] leading-[1.2] max-w-xl text-sm sm:text-base md:text-xl"
            />
          </div>

          <div className="pt-2">
            <a
              href="/contact"
              className="inline-block bg-[#B50404] hover:bg-[#8e0303] text-white px-8 py-3.5 rounded-lg text-sm sm:text-xs md:text-xs font-semibold transition-all duration-200 shadow-md hover:shadow-xl hover:-translate-y-0.5 uppercase tracking-wider mb-6 cursor-pointer"
            >
              {ctaData.buttonText}
            </a>

            <div className="flex flex-wrap items-center gap-2 text-sm sm:text-base md:text-xl font-semibold text-gray-900">
              <span className="font-bold">Call :</span>
              {ctaData.phoneNumbers.map((phone, idx) => (
                <span key={idx} className="flex items-center">
                  <a
                    href={`tel:${phone.replace(/\s+/g, '')}`}
                    className="text-[#B50404] hover:underline transition-colors"
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

export default FindYour