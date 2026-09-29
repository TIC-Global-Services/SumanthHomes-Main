import React, { useState } from 'react'
import aminitiesImg from '../../assets/img/OurProjectsSection/amenities.png'
import floorplan1 from '../../assets/img/OurProjectsSection/floor_plan-1.png'
import floorplan2 from '../../assets/img/OurProjectsSection/floor_plan-2.png'
import specification from '../../assets/img/OurProjectsSection/specification.png'

interface LocationItem {
  name: string
  dist: string
}

const tabs: string[] = ['Amenities', 'Floor Plans', 'Specifications', 'Location']
const floorPlans: string[] = [floorplan1, floorplan2]

const locationData: LocationItem[] = [
  { name: "Sri Venkateswara Children's School", dist: '300 Mts' },
  { name: 'Medigo Multi Speciality Hospital', dist: '1 Km' },
  { name: 'DMART', dist: '1 Km' },
  { name: 'ANKURA Hospital', dist: '2 Kms' },
  { name: 'Narayanadri Hospital', dist: '3 Kms' },
  { name: 'Tirupati Central Bus Stand', dist: '3 Kms' },
  { name: 'Tirupati Railway Station', dist: '3.5 Kms' },
  { name: 'New Tiruchanoor Railway Station', dist: '3.5 Kms' },
  { name: 'Tirumala Alipiri Toll Gate', dist: '5 Kms' },
  { name: 'Tirupati International Airport', dist: '15 Kms' }
]

const Aminities: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('Amenities')
  const [currentSlide, setCurrentSlide] = useState<number>(0)

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? floorPlans.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === floorPlans.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="py-16 md:py-24 w-full bg-[#fbfbfb]">
      <div className="px-4 md:px-[5%] max-w-7xl mx-auto">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 mb-12 md:mb-16">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab)
                if (tab === 'Floor Plans') setCurrentSlide(0)
              }}
              className={`px-6 py-1.5 rounded-full text-sm sm:text-base font-medium transition-all duration-300 cursor-pointer ${
                activeTab === tab
                  ? 'bg-[#144234] text-white scale-105 shadow-md'
                  : 'bg-white text-gray-700 hover:text-[#144234] hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[360px] flex items-center justify-center">
          {/* Amenities Tab */}
          {activeTab === 'Amenities' && (
            <div className="w-full flex flex-col items-center">
              <div className="w-full max-w-5xl bg-white p-6 sm:p-10 rounded-2xl border border-gray-100 flex items-center justify-center transition-all duration-500 shadow-sm">
                <img
                  src={aminitiesImg}
                  alt="Lotus Serene Villas Amenities"
                  className="w-full h-auto object-contain max-h-[500px]"
                />
              </div>
            </div>
          )}

          {/* Floor Plans Tab */}
          {activeTab === 'Floor Plans' && (
            <div className="w-full flex flex-col items-center">
              <div className="relative w-full max-w-3xl bg-white p-4 sm:p-8 rounded-2xl border border-gray-100 shadow-sm">
                {/* Slider Image */}
                <div className="overflow-hidden rounded-xl flex items-center justify-center min-h-[300px] sm:min-h-[420px]">
                  <img
                    src={floorPlans[currentSlide]}
                    alt={`Floor Plan ${currentSlide + 1}`}
                    className="w-full max-h-[500px] object-contain transition-opacity duration-500"
                  />
                </div>

                {/* Prev Button */}
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous Floor Plan"
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#144234] w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 border border-gray-100 shadow-md cursor-pointer"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Next Button */}
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next Floor Plan"
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#144234] w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 border border-gray-100 shadow-md cursor-pointer"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Dots Indicator */}
              <div className="flex gap-2 mt-6">
                {floorPlans.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    aria-label={`Go to slide ${index + 1}`}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                      currentSlide === index
                        ? 'bg-[#144234] scale-125'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Specifications Tab */}
          {activeTab === 'Specifications' && (
            <div className="w-full flex justify-center">
              <div className="w-full max-w-4xl bg-white p-6 sm:p-10 rounded-2xl border border-gray-100 flex items-center justify-center shadow-sm">
                <img
                  src={specification}
                  alt="Lotus Serene Villas Specifications"
                  className="w-full max-w-3xl rounded-xl object-contain max-h-[550px]"
                />
              </div>
            </div>
          )}

          {/* Location Tab */}
          {activeTab === 'Location' && (
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm">
              {/* Proximities List */}
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-[#144234] mb-2">Location Map</h3>
                <h4 className="text-base font-semibold text-gray-700 mb-4">Nearby Landmarks & Proximities</h4>
                <ul className="divide-y divide-gray-100">
                  {locationData.map((item, idx) => (
                    <li key={idx} className="flex justify-between items-center py-2.5 text-sm sm:text-base">
                      <span className="text-gray-700 font-medium">{item.name}</span>
                      <span className="text-[#144234] bg-emerald-50 border border-emerald-100 font-semibold px-3 py-0.5 rounded-full text-xs sm:text-sm">
                        {item.dist}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Map Embed */}
              <div className="w-full h-80 lg:h-full min-h-[300px] rounded-xl overflow-hidden border border-gray-200 relative group">
                <iframe
                  title="Lotus Serene Villas Location Map"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight={0}
                  marginWidth={0}
                  src="https://www.openstreetmap.org/export/embed.html?bbox=79.3900%2C13.6100%2C79.4500%2C13.6500&amp;layer=mapnik&amp;marker=13.6288%2C79.4192"
                  className="w-full h-full"
                />
                <div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded text-[11px] text-gray-600">
                  <a
                    href="https://www.openstreetmap.org/#map=14/13.6288/79.4192"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline font-medium text-[#144234]"
                  >
                    View Larger Map
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Aminities