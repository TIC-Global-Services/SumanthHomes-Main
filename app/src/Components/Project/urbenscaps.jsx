import React from 'react'

const ctaData = {
  title: "Find Your Dream Home\nat Urbanscapes",
  description: "Experience elevated living where thoughtful design meets exceptional comfort. Discover a lifestyle built around convenience, community, and timeless quality.",
  buttonText: "Enquire Now",
  phoneNumbers: ["+91 7680 999 899 ", "+91 8220 637 727"],
  image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
  imageAlt: "Dream Home"
};

const Urbanscapes = () => {
  return (
    <div className="pb-40 px-4 md:px-[5%] w-full  border-gray-300">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div className="flex flex-col space-y-6">
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-gray-900 whitespace-pre-line">
            Find Your Dream Home <br className='hidden md:block'/>at <span className='text-[#5A3A2E]'>Urbanscapes</span>
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-lg">
            {ctaData.description}
          </p>
          <div>
            <button className="bg-[#5A3A2E] hover:bg-[#5a3f30] text-white px-8 py-3 rounded text-sm font-medium transition-colors mb-4">
              Book a Site Visit Today
            </button>
            <p className="text-sm lg:text-lg font-semibold text-[#5A3A2E] mt-2">
              Call : {ctaData.phoneNumbers.join(' | ')}
            </p>
          </div>
        </div>

        {/* Image Content */}
        <div className="w-full h-64 md:h-[400px] bg-gray-200 overflow-hidden shadow-lg">
          <img 
            src={ctaData.image} 
            alt={ctaData.imageAlt} 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default Urbanscapes