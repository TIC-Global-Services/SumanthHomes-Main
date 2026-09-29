import React from 'react'
import { ShowreelSection } from '../reusable/ShowreelSection'

const Showreel: React.FC = () => {
  return (
    <ShowreelSection
      thumbnailSrc="/lotus-vila/show-real-thum.png"
      thumbnailAlt="KBR Brindavanam Heritage Showreel"
      title="KBR Brindavanam Showreel"
      buttonText="Watch Showreel"
      accentColor="#B50404"
    />
  )
}

export default Showreel