import React from 'react'
import { BuildForSection } from '../reusable/BuildForSection'

const BuildFor: React.FC = () => {
  return (
    <BuildForSection
      variant="banner"
      bgImage="/padmavathi-garden/build-for.jpg"
      bgImageAlt="MN Sri Padmavati Gardens - Designed for Living, Built for Business"
      subtitle="Designed for Living"
      title="Built for Business"
      titleColorClass="text-[#D49B5A]"
      description="MN Sri Padmavati Gardens is a thoughtfully planned residential community designed to offer peaceful living with modern comforts. Featuring well-crafted homes, landscaped surroundings, and essential amenities, it provides the perfect setting for families to grow and thrive."
    />
  )
}

export default BuildFor
