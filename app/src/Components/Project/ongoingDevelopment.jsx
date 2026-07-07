import React from 'react'

const developmentData = {
  sectionTitle: "Our Ongoing Developments",
  developments: [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      alt: "Architecture",
      tags: ["Architecture", "Spaces"]
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80",
      alt: "Villas",
      tags: ["Interiors", "Villas"]
    }
  ]
};

const OngoingDevelopment = () => {
  return (
    <section className="w-full pb-24">
      {/* Ongoing Developments */}
      <div className="py-16 px-4 md:px-[5%] w-full">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-black">
          {developmentData.sectionTitle}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {developmentData.developments.map((dev) => (
            <div key={dev.id} className="relative w-full h-[300px] md:h-[400px] bg-gray-300 overflow-hidden group cursor-pointer shadow-lg">
              <img 
                src={dev.image} 
                alt={dev.alt} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white font-medium text-lg tracking-wide">
                {dev.tags.join(' - ')}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OngoingDevelopment