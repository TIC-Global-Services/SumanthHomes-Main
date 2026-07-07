import React, { useState } from 'react'
import aminitiesImg from '../../assets/img/OurProjectsSection/amenities.png'
import floorplan1 from '../../assets/img/OurProjectsSection/floor_plan-1.png'
import floorplan2 from '../../assets/img/OurProjectsSection/floor_plan-2.png'
import specification from '../../assets/img/OurProjectsSection/specification.png'

const tabs = ['Amenities', 'Floor Plans', 'Specifications', 'Location'];
const floorPlans = [floorplan1, floorplan2];

const Amenities = () => {
  const [activeTab, setActiveTab] = useState('Amenities');
  const [currentSlide, setCurrentSlide] = useState(0);

  const locationData = [
    { name: "Sri Venkateswara Children's School", dist: "300Mts" },
    { name: "Medigo Multi Speciality Hospital", dist: "1Km" },
    { name: "DMART", dist: "1Km" },
    { name: "ANKURA Hospital", dist: "2kms" },
    { name: "Narayanadri Hospital", dist: "3kms" },
    { name: "Tirupati Central Bus Stand", dist: "3kms" },
    { name: "Tirupati Railway Station", dist: "3.5kms" },
    { name: "New Tiruchanoor Railway Station", dist: "3.5kms" },
    { name: "Tirumala Alipiri Toll Gate", dist: "5kms" },
    { name: "Tirupati International Airport", dist: "15kms" }
  ]

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? floorPlans.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === floorPlans.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 w-full">
      <div className="px-[5%]">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                if (tab === 'Floor Plans') setCurrentSlide(0);
              }}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === tab
                  ? 'bg-[#5A3A2E] text-white'
                  : 'text-gray-600 hover:text-gray-900'
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[300px]">
          {/* Amenities Tab */}
          {activeTab === 'Amenities' && (
            <div className="flex flex-col items-center gap-10">
              <img
                src={aminitiesImg}
                alt="Amenities"
                className="w-full max-w-6xl rounded-xl h-full object-contain"
              />
            </div>
          )}

          {/* Floor Plans Tab - Slider */}
          {activeTab === 'Floor Plans' && (
            <div className="flex flex-col items-center">
              <div className="relative w-full max-w-3xl">
                {/* Slider Image */}
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={floorPlans[currentSlide]}
                    alt={`Floor Plan ${currentSlide + 1}`}
                    className="w-full object-contain transition-opacity duration-500"
                  />
                </div>

                {/* Prev Button */}
                <button
                  onClick={handlePrev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#6b4c3a] w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Next Button */}
                <button
                  onClick={handleNext}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#6b4c3a] w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Dots Indicator */}
              <div className="flex gap-2 mt-6">
                {floorPlans.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index
                        ? 'bg-[#6b4c3a] scale-110'
                        : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Specifications Tab */}
          {activeTab === 'Specifications' && (
            <div className="flex justify-center">
              <img
                src={specification}
                alt="Specifications"
                className="w-full max-w-xl lg:max-w-4xl rounded-xl object-contain"
              />
            </div>
          )}

          {/* Location Tab */}
          {activeTab === 'Location' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mt-6">
              {/* Proximities List */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-[#5A3A2E] mb-4">Location Map</h3>
                <h4 className="text-lg font-medium text-black mb-2">Proximities</h4>
                <ul className="max-w-xl">
                  {locationData.map((item, idx) => (
                    <li key={idx} className="flex justify-between items-center text-sm md:text-base border-b border-gray-50 pb-2 last:border-0 last:pb-0">
                      <span className="text-[#5A5A5A] font-medium text-base" >{item.name}</span>
                      <span className="text-[#6b4c3a] font-semibold px-2.5 py-0.5 rounded-full text-xs md:text-sm">
                        {item.dist}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Map Embed */}
              <div className="w-full h-full  overflow-hidden border-gray-200 relative group">
                <iframe
                  title="OpenStreetMap Location Map"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=79.3900%2C13.6100%2C79.4500%2C13.6500&amp;layer=mapnik&amp;marker=13.6288%2C79.4192"
                  className="w-full h-full"
                ></iframe>
                <div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-[10px] text-gray-500 shadow-sm">
                  <a
                    href="https://www.openstreetmap.org/#map=14/13.6288/79.4192"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
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

export default Amenities