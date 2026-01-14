import { GridCard1 } from './sub-componenets/GridCard1'
import {gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from 'react';


export const ArchitectureProcessSection = () => {

  const card1 = useRef(null);
  const card2 = useRef(null);
  const card3 = useRef(null);
  const card4 = useRef(null);

  useEffect(()=>{

    if(window.outerWidth>700){
      return
    }
    const tl = gsap.timeline();
    const el1 = card1.current;
    const el2 = card2.current;
    const el3 = card3.current;
    const el4 = card4.current;

    
    tl.to(el2,
      {
        xPercent:-100,
        ease:'sine',
        duration:4,
        
      }
    )

    tl.to(el3,
      {
        xPercent:-200,
        ease:'sine',
        duration:4,
      }
    )

    tl.to(el4,
      {
        xPercent:-300,
        ease:'sine',
        duration:4,
        
      }
    )

    // ScrollTrigger.create({
    //   animation:tl,
    //   trigger:".card-container",
    //   start:"top top",
    //   end:"bottom top",
    //   markers:true,
    //   scrub:true,
    //   pin:true,
    //   pinSpacing:false,
    //   anticipatePin:1,
    // })
  }
  )
  
  return (
    <div className='
    flex items-start justify-between flex-wrap 
    xl:mt-20
    mb-14 xl:mb-24'>

        <div className='
        w-full md:w-[40%] xl:w-[40%]
        mb-4'>

            <p className='mb-1 xl:mb-4 md:mb-1 font-jakarta font-semibold uppercase tracking-[0.2rem] [word-spacing:3px] text-[rgb(181,4,4)] text-xs'>Architecture process</p>
            <h2 className='
            mb-4 xl:mb-8 md:mb-4
            font-manrope font-semibold
            text-3xl xl:text-4xl md:text-xl'>From Concept to Completion</h2>
            <p className='xl:w-[90%] mb-4 font-jakarta font-normal text-[#737373] md:text-sm'>
              At Sumanth Homes, we create buildings that reflect minimalism and timeless elegance, thoughtfully designed to harmonize with the environment and complement the beauty around them.
            </p>

        </div>

        <div className='
        card-container
        overflow-scroll md:overflow-hidden
        w-full md:w-[50%] xl:w-[50%] 
        flex flex-nowrap md:gap-4 md:flex-wrap'
        
        style={{
          scrollbarWidth:'none',
        }}
        >
                     
           <GridCard1 refName={card1} number={'1'} mainText={'Design planing'} subText={"Our buildings combine design elegance of lines and shapes."} />
           <GridCard1 refName={card2}  number={'2'} mainText={'Design concept'} subText={'Our buildings combine design elegance of lines and shapes.'}/>
           <GridCard1 refName={card3} number={'3'} mainText={'Design development'} subText={'Our buildings combine design elegance of lines and shapes.'}/>
           <GridCard1 refName={card4} number={'4'} mainText={'Finished project'} subText={'Our buildings combine design elegance of lines and shapes.'}/>

        </div>

    </div>
  )
}
