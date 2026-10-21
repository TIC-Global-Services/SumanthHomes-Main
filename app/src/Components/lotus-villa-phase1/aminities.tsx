import React from 'react'
import {
  AmenitiesTabsSection,
  AmenitiesTabsSectionProps,
  lotusSereneSpecifications,
  lotusSereneLocationData,
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
      amenitiesImage="/lotus-serena-amenities.png"
      specifications={lotusSereneSpecifications}
      locationItems={lotusSereneLocationData}
      mapEmbedUrl="https://www.openstreetmap.org/export/embed.html?bbox=79.4300%2C13.6100%2C79.4700%2C13.6450&layer=mapnik&marker=13.6264%2C79.4538"
      mapUrl="https://www.openstreetmap.org/?mlat=13.6264&mlon=79.4538#map=15/13.6264/79.4538"
      {...props}
    />
  )
}

export default Aminities