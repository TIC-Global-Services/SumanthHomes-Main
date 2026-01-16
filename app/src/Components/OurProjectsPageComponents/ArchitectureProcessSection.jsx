import { GridCard1 } from './sub-componenets/GridCard1'
import {gsap } from "gsap"
import { ScrollTrigger, TextPlugin } from 'gsap/all';
import { useRef, useEffect } from 'react';
import '../../assets/styles/titleStyle.css';

gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);

export const ArchitectureProcessSection = () => {

  const titleRef = useRef(null);
      
      useEffect(()=>{
          const el = titleRef.current;
          
          gsap.to(el, {
              duration:2,
              text:{
                  value:'From Concept to Completion',
                  oldClass:'start',
                  newClass:'end',
              },
              scrollTrigger:{
                  trigger:el,
                  start:"top center"
              }
          })
      },[])

  return (
    <div className='
    flex items-start justify-between flex-wrap 
    xl:mt-20
    mb-20 xl:mb-24'>

        <div className='
        w-full md:w-[40%] xl:w-[40%]
        md:mb-4'>

            <p className='mb-1 xl:mb-4 md:mb-1 font-jakarta font-semibold uppercase tracking-[0.2rem] [word-spacing:3px] text-[rgb(181,4,4)] text-xs'>Architecture process</p>
            <h2 
            ref={titleRef}
            className='
            mb-4 xl:mb-8 md:mb-4
            font-manrope font-semibold
            text-3xl xl:text-4xl md:text-xl'>From Concept to Completion</h2>
            <p className='xl:w-[90%] mb-4 font-jakarta font-normal text-[#737373] md:text-sm'>
              At Sumanth Homes, we create buildings that reflect minimalism and timeless elegance, thoughtfully designed to harmonize with the environment and complement the beauty around them.
            </p>

        </div>

        <div className='
        card-container
        w-full md:w-[50%] xl:w-[50%] 
        flex items-start flex-wrap gap-4 md:gap-4 '
        
        style={{
          scrollbarWidth:'none',
        }}
        >
                     
           <GridCard1 number={'1'} mainText={'Design planing'} subText={"Our buildings combine design elegance of lines and shapes."} />
           <GridCard1 number={'2'} mainText={'Design concept'} subText={'Our buildings combine design elegance of lines and shapes.'}/>
           <GridCard1 number={'3'} mainText={'Design development'} subText={'Our buildings combine design elegance of lines and shapes.'}/>
           <GridCard1 number={'4'} mainText={'Finished project'} subText={'Our buildings combine design elegance of lines and shapes.'}/>

        </div>

    </div>
  )
}
