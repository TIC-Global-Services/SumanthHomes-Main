import React from 'react'
import { ProjectHeroSection, ProjectHeroSectionProps } from '../reusable/ProjectHeroSection'

const Hero: React.FC<ProjectHeroSectionProps> = (props) => {
  const data = [
    {
      banner: '/padmavathi-garden/padhmavathi-hero.jpg',
      alt: 'MN Sri Padmavati Gradens - Luxury Residential Community',
      title: 'MN Sri Padmavati Gradens',
      logoPosition: 'bottom-left' as const,
      buttonText: 'EXPLORE THE RESIDENTIAL HOMES',
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