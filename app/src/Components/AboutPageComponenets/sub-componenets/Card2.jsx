import React from 'react'
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap/gsap-core';
import { ScrollTrigger } from 'gsap/all';

export const Card2 = ({bgImage, Name, Position}) => {

  const xButtonRef = useRef(null);
  

  return (
    <div className='
    relative
    flex 
    flex-shrink-0 md:flex-shrink
    flex-nowrap xl:flex-grow
    aspect-[3/4]
    w-full xl:w-[30%]
    
   
    
    ' style={{
        backgroundImage:`url(${bgImage})`,
        backgroundRepeat:'no-repeat',
        backgroundSize: 'cover',
        position:'center'
    }}

    onMouseEnter={()=>{xButtonRef.current.style.setProperty('--opacity', 1)}}
    onMouseLeave={()=>{xButtonRef.current.style.setProperty('--opacity', 0)}}
    >

      <div className='absolute w-full aspect-[3/4] bg-gradient-to-l from-black/20 from-1%  to-transparent to-60%'></div>

      <div className='absolute w-full aspect-[3/4] bg-gradient-to-r from-black/20 from-1% to-transparent to-60%'>
          <div className='
          relative
          w-full
          aspect-[3/4]
          
        
        
        '>
          <div className='
          w-full 
          ml-1
          absolute bottom-2 xl:bottom-10
          flex justify-evenly
          '>

            <div className='w-full xl:w-auto'>

              <h2 className='
            font-medium
            text-white
            xl:text-xl md:text-base 
          '>{Name}</h2>

            <h4 className='
            text-sm xl:text-base font-normal text-white/80 '>{Position}</h4>

            </div>
            

             <button ref={xButtonRef} className='
             mr-4 
            bg-white w-14 h-14  border rounded-full flex justify-center items-center' style={{
              opacity:'var(--opacity, 0)'
            }}>

                <svg width="20" height="20" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.325 0H13.5312L8.7125 5.50625L14.3813 13H9.94375L6.46562 8.45625L2.49062 13H0.28125L5.43437 7.10938L0 0H4.55L7.69062 4.15312L11.325 0ZM10.55 11.6812H11.7719L3.88438 1.25H2.57188L10.55 11.6812Z" fill="#191919"/>
              </svg>
              
            </button>

          </div>
            
     
        </div>    
      </div>

            
    </div>
  )
}
