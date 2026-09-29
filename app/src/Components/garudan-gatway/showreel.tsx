import React from 'react'
import { ShowreelSection } from '../reusable/ShowreelSection'

const Showreel: React.FC = () => {
  return (
    <ShowreelSection
      thumbnailSrc="/lotus-vila/show-real-thum.png"
      thumbnailAlt="Garuda Gateway Showreel"
      title="Garuda Gateway Showreel"
      buttonText="Watch Showreel"
      accentColor="#CCA062"
    />
  )
}

export default Showreel