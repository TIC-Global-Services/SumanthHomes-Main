import {useRef, useEffect} from "react";
import { ScrollTrigger, gsap } from "gsap/all";
import { TextSlideInAnimation } from "../../utils/TextSlideInAnimation";

gsap.registerPlugin(ScrollTrigger);

export const HistorySection = () => {

  const tl = gsap.timeline();

  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(()=>{
    TextSlideInAnimation(titleRef, contentRef, containerRef);
  })
  

  return (
    <div 
    ref={containerRef}
    className='
    relative
    flex justify-center items-center
    xl:mt-20 md:mt-14
    xl:mb-40 md:mb-28
    py-14
    '>

        <div className='text-center'>


              <p ref={titleRef} className='
              font-extrabold text-[#B50404]
              text-9xl xl:text-[14rem] md:text-9xl '>13</p>

              <div ref={contentRef}>
                <h2  className='
                flex align-center justify-center
                font-urbanist font-medium 
                text-3xl xl:text-8xl md:text-5xl
                tracking-tight xl:tracking-[-2px] 
                mb-3'>
                  Years Of Excellence
                </h2>

                <div className='flex items-center justify-center'>

                  <p className='
                  font-jakarta font-medium text-[#737373]
                   xl:text-xs
                  leading-4
                  w-[100%] xl:w-[50%] md:w-[80%] '>We are dedicated to crafting architectural and design experiences that not only serve a clear functional purpose but also elevate the spaces they inhabit through thoughtful, visually inspiring aesthetics. Our approach blends practicality with creativity, ensuring every environment we shape is as efficient as it is expressive.</p>

                </div>
              </div>
              


        </div>

    </div>
  )
}