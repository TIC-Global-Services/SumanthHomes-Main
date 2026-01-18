import React from 'react'
import { Card2 } from './sub-components/card2'
import { TextSlideInAnimation } from '../../utils/TextSlideInAnimation'
import { ScrollTrigger, gsap } from 'gsap/all'
import { useEffect, useRef, useLayoutEffect } from 'react'

gsap.registerPlugin(ScrollTrigger);

export const MiniStatsSections = () => {


  return (

    <div className='
    flex items-center justify-evenly flex-wrap
    gap-1
    my-16'>

      <Card2 Number='100' plus={true} titleText='Homes purchased' contentText='Trusted by hundreds of happy homeowners .' />
      <Card2 Number='20' titleText='Published properties' contentText='Sophisticated apartments with top amenities.' />
      <Card2 Number='13' titleText='Years of experience' contentText='Built on years of trust and timeless craftsmanship.' />

    </div>
  )
}
