import React from 'react'
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap/gsap-core';
import { ScrollTrigger } from 'gsap/all';

export const Card2 = ({bgImage, Name, Position}) => {

  

  return (
    <div className='
    relative
    flex 
    flex-shrink
    flex-grow
    aspect-[3/4]
    w-[25%]
    
   
    
    ' style={{
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
            text-white
            xl:text-xl md:text-xl 
          '>{Name}</h2>

            <h4 className='font-normal text-white md:text-sm'>{Position}</h4>
     
        </div>        
    </div>
  )
}
