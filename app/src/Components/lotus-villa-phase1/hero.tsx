import React from 'react'
import { ProjectHeroSection } from '../reusable/ProjectHeroSection'
import logo from '../../assets/img/OurProjectsSection/lotus-vilas-phase-1.png'

export interface HeroProps {
  data?: any[]
  [key: string]: any
}

const Hero: React.FC<HeroProps> = (props) => {
  const data = [
    {
      banner: '/loutus-phase-1/lotus-villas-phase-1-banner.jpg',
      alt: 'Lotus Serene Villas - Phase I Aerial View',
      logo: logo,
      logoPosition: 'bottom-center' as const,
      buttonText: 'EXPLORE THE VILLAS',
      buttonLink: '#build-for',
      buttonBgColor: '#164944',
    },
  ]

  return (
    <ProjectHeroSection
      data={props.data || data}
      {...props}
    />
  )
}

export default Hero