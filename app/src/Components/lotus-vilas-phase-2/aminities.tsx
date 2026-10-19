import React from 'react'
import {
  AmenitiesTabsSection,
  AmenitiesTabsSectionProps,
  lotusSereneSpecifications,
} from '../reusable'

const Aminities: React.FC<Partial<AmenitiesTabsSectionProps>> = (props) => {
  return (
    <AmenitiesTabsSection
      id="amenities-section"
      tabs={['Amenities', 'Floor Plans', 'Specifications', 'Location']}
      activeTabColor="#164944"
      specificationsTextColor="#164944"
      specificationsTitleColor="#164944"
      specificationsDescColor="#164944"
      specifications={lotusSereneSpecifications}
      {...props}
    />
  )
}

export default Aminities