import React from 'react'
import dreamHomeImg from '../../assets/img/OurProjectsSection/urban_hormony.jpg'

const ctaData = {
  titleLine1: "Find Your Dream Home",
  titleLine2: "at Urbanscapes",
  description: "Experience elevated living where thoughtful design meets exceptional comfort. Discover a lifestyle built around convenience, community, and timeless quality.",
  buttonText: "BOOK A SITE VISIT TODAY",
  phoneNumbers: ["+91 7680 999 899", "+91 8220 637 727"],
  image: dreamHomeImg,
  imageAlt: "Find Your Dream Home at Urbanscapes"
};

const Urbanscapes = () => {
  return (
    <div className="pt-4 sm:pt-8 md:pt-16 pb-16 sm:pb-24 md:pb-36 px-5 sm:px-8 md:px-[5%] w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
        {/* Image Content - First on Mobile (Portrait 4:5 matching reference), Right Column on Desktop */}
        <div className="order-1 md:order-2 w-full aspect-[4/5] sm:aspect-auto sm:h-[440px] md:h-[480px] lg:h-[520px] overflow-hidden rounded-none md:rounded-lg shadow-sm md:shadow-xl bg-gray-100">
          <img 
            src={ctaData.image} 
            alt={ctaData.imageAlt} 
            className="w-full h-full object-cover object-[52%_center] transition-transform duration-700 hover:scale-105"
          />
        </div>

        {/* Text Content - Second on Mobile, Left Column on Desktop */}
        <div className="order-2 md:order-1 flex flex-col space-y-4 sm:space-y-5 md:space-y-6">
          <h2 className="text-[28px] sm:text-3xl md:text-4xl lg:text-[42px] font-bold tracking-tight leading-[1.15] text-[#111111] text-left">
            {ctaData.titleLine1} <br />
            {ctaData.titleLine2}
          </h2>

          <p className="text-[#737373] text-[15px] sm:text-base md:text-lg leading-relaxed max-w-xl text-left">
            {ctaData.description}
          </p>

          <div className="pt-2 sm:pt-3">
            <a
              href="/contact"
              className="inline-block bg-[#4E3124] hover:bg-[#3D251A] active:scale-[0.98] text-white px-8 py-3.5 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-200 mb-5 sm:mb-6 cursor-pointer text-center"
            >
              {ctaData.buttonText}
            </a>

            <div className="flex flex-wrap items-center text-sm sm:text-base font-semibold text-black">
              <span className="font-bold text-black mr-2">Call:</span>
              <div className="inline-flex items-center space-x-2 font-bold text-[#3D251A]">
                <a 
                  href={`tel:${ctaData.phoneNumbers[0].replace(/\s+/g, '')}`} 
                  className="hover:underline transition-colors"
                >
                  {ctaData.phoneNumbers[0]}
                </a>
                <span className="text-stone-400 font-normal">|</span>
                <a 
                  href={`tel:${ctaData.phoneNumbers[1].replace(/\s+/g, '')}`} 
                  className="hover:underline transition-colors"
                >
                  {ctaData.phoneNumbers[1]}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Urbanscapes