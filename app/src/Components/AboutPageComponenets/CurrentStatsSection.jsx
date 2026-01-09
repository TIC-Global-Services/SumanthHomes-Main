import React from 'react'
import { Card1 } from './sub-componenets/card1'

export const CurrentStatsSection = () => {
  return (

    <div className='
    flex justify-evenly flex-wrap
    gap-10 md:gap-10 
    md:mt-4 xl:mt-4 
    mb-14 md:mb-20 xl:mb-20 '>

        <Card1 number={'96%'} content={'Client Satisfaction & Repeat Partnerships'} pageNo={'01'} />
        <Card1 number={'05'} content={'Active Sites Currently Under Execution'} pageNo={'02'} />
        <Card1 number={'280+'} content={'Residential & Commercial Projects Delivered'} pageNo={'03'} />

    </div>
  )
}
