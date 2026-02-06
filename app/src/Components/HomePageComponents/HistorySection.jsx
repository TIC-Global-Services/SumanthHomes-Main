import { motion } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { ScrollTrigger, gsap } from "gsap/all";
import { SlideUpAnimationBlur } from "../../utils/SlideUpAnimationBlur";
import BlurText from "../../utils/BlurText"

gsap.registerPlugin(ScrollTrigger);

export const HistorySection = () => {

  const slideUpAnimation = {
    initial : {opacity:0, y:100,},
    whileInView : { opacity:1, y:0},
    transition : {duration:0.5},
    viewport : {once:true}
  }

  let Number = 13;
  const [currentNumber, setCurrentNumber] = useState(0);
      const containerRef = useRef(null);
      let timer = Number>50 ? 20 : 50; 
      
  
  
      const updateNumber = ()=>{
          setCurrentNumber(currentNumber+1);
      }
  
      useEffect(()=>{
          gsap.to(containerRef.current, {
              scrollTrigger:{
                  trigger:containerRef.current,
                  once:true,
              },
              onComplete:()=>{setCurrentNumber(1)}
          })
      },[])
  
       useEffect(()=>{
              if(currentNumber != Number && currentNumber != 0){
                  setTimeout(updateNumber, timer);
              }
          }, [currentNumber])
      

  return (
    
    <div 
  ref={containerRef}
    className='
    relative
    flex justify-center items-center
    mt-14 md:mt-[120px]
    mb-[116px] md:mb-[237px]
    
    '>
        <div className='text-center '>


              <motion.h2
              initial={slideUpAnimation.initial}
              whileInView={slideUpAnimation.whileInView}
              transition={slideUpAnimation.transition}
              viewport={slideUpAnimation.viewport}
              
              className='
              font-manrope font-extrabold text-[#B50404]
              text-[140px]  md:text-9xl  xl:text-[300px]
              tracking-[-4%]
              leading-none
              '>{currentNumber}</motion.h2>

              <motion.div
              initial={slideUpAnimation.initial}
              whileInView={slideUpAnimation.whileInView}
              transition={slideUpAnimation.transition}
              viewport={slideUpAnimation.viewport}
              >

                <BlurText
                text="Years Of Excellence"
                delay={120}
                animateBy="words"
                direction="bottom"
                className='
                text-[#1D1D1D]
                flex align-center justify-center
                font-urbanist font-medium 
                text-[34px] md:text-5xl xl:text-[100px]
                tracking-[-1px] md:tracking-tight xl:tracking-[-2px] 
                leading-9
                mb-2'/>

                <motion.div
                initial={SlideUpAnimationBlur.initial}
                whileInView={SlideUpAnimationBlur.whileInView}
                transition={SlideUpAnimationBlur.transition}
                viewport={SlideUpAnimationBlur.viewport}
                className='flex items-center justify-center'>

                  <p className='
                  font-normal text-[#737373]
                  text-xs md:text-base
                  tracking-0
                  leading-[14px] md:leading-6
                  w-[90%] xl:w-[70%] md:w-[80%] '>We are dedicated to crafting architectural and design experiences that not only serve a clear functional purpose but also elevate the spaces they inhabit through thoughtful, visually inspiring aesthetics. Our approach blends practicality with creativity, ensuring every environment we shape is as efficient as it is expressive.</p>

                </motion.div>
              </motion.div>
              


        </div>

    </div>
  )
}