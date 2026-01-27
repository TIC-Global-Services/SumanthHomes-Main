import { GridCard1 } from './sub-componenets/GridCard1'
import {gsap } from "gsap"
import { ScrollTrigger, TextPlugin } from 'gsap/all';
import { useRef, useEffect } from 'react';
import '../../assets/styles/titleStyle.css';
import { TextSlideInAnimation } from '../../utils/TextSlideInAnimation';

gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);

export const ArchitectureProcessSection = () => {

  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const containerRef = useRef(null);
      
      useEffect(()=>{
          TextSlideInAnimation(titleRef, contentRef, containerRef);
      },[])

  return (
    <div ref={containerRef} className='
    flex items-start justify-between flex-wrap 
    mt-8 xl:mt-20 md:mt-14
    mb-20 xl:mb-24'>

        <div className='
        w-full md:w-full xl:w-[40%]
        md:mb-4'>

            <div ref={titleRef}>
            <p className='mb-1 xl:mb-4 md:mb-1 font-semibold uppercase tracking-[3px]  text-[rgb(181,4,4)] text-xs'>Architecture process</p>
            <h2 
            
            className='
            mb-4 xl:mb-8 md:mb-4
            font-manrope font-semibold tracking-[-0.5px]
            text-3xl xl:text-4xl md:text-xl'>From Concept to Completion</h2>
            </div>

            <p ref={contentRef} className='xl:w-[90%] mb-4 font-normal leading-[26px] text-[#737373] '>
              At Sumanth Homes, we create buildings that reflect minimalism and timeless elegance, thoughtfully designed to harmonize with the environment and complement the beauty around them.
            </p>

        </div>

        <div className='
        card-container
        w-full md:w-full xl:w-[50%] 
          '
        
        style={{
          scrollbarWidth:'none',
        }}
        >

        <div className='flex items-start justify-between gap-10 md:gap-0 flex-wrap w-full md:mx-auto mb-10'>
          <GridCard1 number={'1'} mainText={'Design planing'} subText={"Our buildings combine design elegance of lines and shapes."} />
          <GridCard1 number={'2'} mainText={'Design concept'} subText={'Our buildings combine design elegance of lines and shapes.'}/>  
        </div>            
           
        <div className='flex items-start justify-between gap-10 md:gap-0 flex-wrap md:mx-auto w-full'>
          <GridCard1 number={'3'} mainText={'Design development'} subText={'Our buildings combine design elegance of lines and shapes.'}/>
          <GridCard1 number={'4'} mainText={'Finished project'} subText={'Our buildings combine design elegance of lines and shapes.'}/>
        </div>

        </div>

       

    </div>
  )
}
