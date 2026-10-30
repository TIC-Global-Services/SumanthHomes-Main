import React from 'react'
import {
  AmenitiesTabsSection,
  AmenitiesTabsSectionProps,
  pearlaodeSpecifications,
} from '../reusable'

const pearlFloorPlans = [
  {
    id: 1,
    title: 'Ground Floor Plan',
    mainImage: '/pearlaode/pearl-floorplan-1.png',
    alt: 'Pearl aode Ground Floor Plan',
  },
  {
    id: 2,
    title: 'First Floor Plan',
    mainImage: '/pearlaode/pearl-floorplan-2.png',
    alt: 'Pearl aode First Floor Plan',
  },
]

const Aminities: React.FC<Partial<AmenitiesTabsSectionProps>> = (props) => {
  return (
    <AmenitiesTabsSection
      id="amenities-section"
      tabs={['Amenities', 'Floor Plans', 'Specifications', 'Location']}
      activeTabColor="#D9B67D"
      specificationsTextColor="#D9B67D"
      specificationsTitleColor="#D9B67D"
      specificationsDescColor="#D9B67D"
      amenitiesImage="/pearlaode/pearl-aode.png"
      floorPlans={pearlFloorPlans}
      specifications={pearlaodeSpecifications}
      {...props}
    />
  )
}

export default Aminities