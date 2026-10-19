import React from 'react'
import { ProjectHeroSection, ProjectHeroSectionProps } from '../reusable/ProjectHeroSection'

const Hero: React.FC<ProjectHeroSectionProps> = (props) => {
  const data = [
    {
      banner: '/garuda-gateway/garuda-gateway-hero.jpg',
      alt: 'Garuda Gateway Commercial & Residential View',
      title: 'Garuda Gateway',
      logoPosition: 'bottom-left' as const,
      buttonText: 'Explore the COMMERCIAL Spaces & Residential Homes',
      buttonLink: '#discover',
      buttonBgColor: '#CC1518',
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