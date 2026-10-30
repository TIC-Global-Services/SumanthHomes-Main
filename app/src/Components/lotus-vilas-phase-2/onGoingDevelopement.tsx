import React from 'react'
import BlurText from '../../utils/BlurText'

interface DevelopmentItem {
  id: number
  title: string
  tags: string[]
  image: string
  alt: string
}

const developmentData = {
  sectionTitle: 'Our Ongoing Developments',
  developments: [
    {
      id: 1,
      title: 'Pearl aode',
      tags: ['Apartments'],
      image: '/lotus-vila/ongoing-develolpment-1.png',
      alt: 'Sri Vasantha Pearl aode Apartment Elevation'
    },
    {
      id: 2,
      title: 'Lotus Serene Villas',
      tags: ['Villas'],
      image: '/lotus-vila/ongoing-developement-2.jpg',
      alt: 'Lotus Serene Villas Master Layout Aerial View'
    }
  ]
}

const OnGoingDevelopement: React.FC = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-[#fbfbfb]">
      <div className="px-4 md:px-[5%]">
        <div className="text-center mb-12 md:mb-16">
          <BlurText
            text={developmentData.sectionTitle}
            delay={30}
            animateBy="words"
            direction="bottom"
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 justify-center"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {developmentData.developments.map((dev) => (
            <div
              key={dev.id}
              className="relative w-full h-[320px] sm:h-[380px] md:h-[440px] rounded-xl overflow-hidden shadow-lg group cursor-pointer bg-gray-200"
            >
              <img
                src={dev.image}
                alt={dev.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent transition-opacity duration-300" />
              <div className="absolute bottom-6 left-6 right-6 text-white flex">
                <h1 className="text-xs sm:text-base flex justify-center gap-2 font-medium tracking-wider  text-white mb-1">
                  {dev.tags}
                </h1>
                <span className='w-10 h-px bg-white block mx-auto'></span>
                <h1>{dev.title}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OnGoingDevelopement