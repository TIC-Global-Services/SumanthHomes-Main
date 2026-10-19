import React from 'react'
import ProjectHeroSection from '../reusable/ProjectHeroSection'
import banner from '../../assets/img/OurProjectsSection/project_hero_banner.png'
import logo from '../../assets/img/OurProjectsSection/urbanscapes_logo.png'

const Hero = (props) => {
  // Configured via an array of objects passed as props
  const data = [
    {
      banner: banner,
      alt: 'Urbanscapes Building',
      logo: logo,
      logoPosition: 'center',
      buttonText: 'EXPLORE THE APARTMENTS',
      buttonLink: '#explore',
      buttonBgColor: '#623725',
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