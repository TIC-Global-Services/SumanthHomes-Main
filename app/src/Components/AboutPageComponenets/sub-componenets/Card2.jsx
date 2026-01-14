import React from 'react'
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap/gsap-core';
import { ScrollTrigger } from 'gsap/all';

export const Card2 = ({bgImage, Name, Position}) => {

  

  return (
    <div className='
    flex 
    flex-shrink-0
    w-full
    aspect-[3/4]
    md:aspect-auto
    md:w-[20rem] xl:w-[20rem]
    md:h-[28rem] xl:h-[20rem] 
   
    
    relative' style={{
        backgroundImage:`url(${bgImage})`,
        backgroundRepeat:'no-repeat',
        backgroundSize: 'cover',
        position:'center'
    }}>

        <div className='
        mt-auto mb-8 ml-10
        '>

            <h2 className='
            font-medium
            xl:text-xl md:text-xl 
          '>{Name}</h2>

            <h4 className='font-normal  md:text-sm'>{Position}</h4>
     
        </div>        
    </div>
  )
}
