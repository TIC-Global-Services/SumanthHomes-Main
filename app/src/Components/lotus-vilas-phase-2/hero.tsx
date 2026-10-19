import React from 'react'
import { ProjectHeroSection } from '../reusable/ProjectHeroSection'
import logo from '../../assets/img/OurProjectsSection/lotus-vilas-phase-2.png'

export interface HeroProps {
  data?: any[]
  [key: string]: any
}

const Hero: React.FC<HeroProps> = (props) => {
  const data = [
    {
      banner: '/lotus-vila/lotus-hero-banner.jpg',
      alt: 'Lotus Serene Villas - Phase II Aerial View',
      logo: logo,
      logoPosition: 'bottom-center' as const,
      buttonText: 'EXPLORE THE VILLAS',
      buttonLink: '#luxurious-lifestyle',
      buttonBgColor: '#154848',
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