import React from 'react'
import { ProjectHeroSection, ProjectHeroSectionProps } from '../reusable/ProjectHeroSection'

const Hero: React.FC<ProjectHeroSectionProps> = (props) => {
  const data = [
    {
      banner: '/brindavan/kbr_hero.jpg',
      alt: 'KBR Brindavanam - Luxury Villa Community View',
      title: 'KBR Brindavanam',
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