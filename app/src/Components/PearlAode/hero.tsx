import React from 'react'
import ProjectHeroSection from '../reusable/ProjectHeroSection'
import banner from '../../assets/img/OurProjectsSection/project_hero_banner.png'
import logo from '../../assets/img/OurProjectsSection/pearl_aode.png'

const Hero = (props) => {
  // Configured via an array of objects passed as props
  const data = [
    {
      banner: banner,
      alt: 'pearl aode',
      logo: 'logo',
      logoPosition: 'center',
      buttonText: 'EXPLORE THE VILLAS',
      buttonLink: '#explore',
      buttonBgColor: '#D9B57D',
    },
  ]

  return (
    <ProjectHeroSection
      data={props.data || data}
      {...props}
    />
  )
}

export default Hero;