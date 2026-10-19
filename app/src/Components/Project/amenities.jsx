import React from 'react'
import { AmenitiesTabsSection } from '../reusable/AmenitiesTabsSection'
import aminitiesImg from '../../assets/img/OurProjectsSection/amenities.png'

const Amenities = (props) => {
  return (
    <AmenitiesTabsSection
      amenitiesImage={props.amenitiesImage || props.amenitiesImg || aminitiesImg}
      {...props}
    />
  )
}

export default Amenities