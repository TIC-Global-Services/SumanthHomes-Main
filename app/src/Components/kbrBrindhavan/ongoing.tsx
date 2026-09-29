import React from 'react'
import { Link } from 'react-router-dom'
import BlurText from '../../utils/BlurText'

interface DevelopmentItem {
  id: number
  title: string
  tag: string
  image: string
  alt: string
  link: string
}

const developmentData: DevelopmentItem[] = [
  {
    id: 1,
    title: 'Pearl Abode',
    tag: 'Apartments',
    image: '/lotus-vila/ongoing-develolpment-1.png',
    alt: 'Pearl Abode - Premium Apartments by Sumanth Homes',
    link: '/urbanscapes'
  },
  {
    id: 2,
    title: 'Lotus Serene Villas',
    tag: 'Villas',
    image: '/lotus-vila/ongoing-developement-2.jpg',
    alt: 'Lotus Serene Villas - Phase II Luxury Gated Villa Layout',
    link: '/lotus-serene-villas'
  }
]

const Ongoing: React.FC = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-[#fbfbfb]">
      <div className="px-4 sm:px-8 md:px-[5%]">
        {/* Section Heading */}
        <div className="text-center mb-12 md:mb-16">
          <BlurText
            text="Our Ongoing Developments"
            delay={30}
            animateBy="words"
            direction="bottom"
            className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 justify-center tracking-tight"
          />
        </div>

        {/* Development Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {developmentData.map((dev) => (
            <Link
              key={dev.id}
              to={dev.link}
              className="relative w-full h-[320px] sm:h-[380px] md:h-[440px] rounded-xl overflow-hidden shadow-lg group cursor-pointer bg-gray-200 block"
            >
              {/* Development Image */}
              <img
                src={dev.image}
                alt={dev.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent transition-opacity duration-300" />

              {/* Bottom Details Overlay */}
              <div className="absolute bottom-6 left-6 right-6 text-white flex items-center justify-center gap-3">
                <span className="text-sm sm:text-base md:text-lg font-medium tracking-wide">
                  {dev.title}
                </span>
                <span className="w-8 sm:w-12 h-px bg-white/70 block" />
                <span className="text-xs sm:text-sm md:text-base font-light text-white/90 uppercase tracking-wider">
                  {dev.tag}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Ongoing