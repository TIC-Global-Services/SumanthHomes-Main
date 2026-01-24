import { motion } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { ScrollTrigger, gsap } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export const HistorySection = () => {

  const slideUpAnimation = {
    initial : {opacity:0, y:100,},
    whileInView : { opacity:1, y:0},
    transition : {duration:0.5},
    viewport : {once:false}
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
    xl:mt-20 md:mt-4
    xl:mb-40 md:mb-10
    py-14
    '>

        <div className='text-center'>


              <motion.p
              initial={slideUpAnimation.initial}
              whileInView={slideUpAnimation.whileInView}
              transition={slideUpAnimation.transition}
              viewport={slideUpAnimation.viewport}
              
              className='
              font-extrabold text-[#B50404]
              text-9xl xl:text-[15rem] md:text-9xl '>{currentNumber}</motion.p>

              <motion.div
              initial={slideUpAnimation.initial}
              whileInView={slideUpAnimation.whileInView}
              transition={slideUpAnimation.transition}
              viewport={slideUpAnimation.viewport}
              >
                <motion.h2
                initial={{filter:"blur(10px)", opacity:0}}
                whileInView={{filter:"blur(0px)", opacity:1}}
                transition={{duration:0.5}}
                viewport={{once:false}}
                className='
                text-[#1D1D1D]
                flex align-center justify-center
                font-urbanist font-medium 
                text-3xl xl:text-8xl md:text-5xl
                tracking-tight xl:tracking-[-2px] 
                mb-3'>
                  Years Of Excellence
                </motion.h2>

                <motion.div
                initial={{filter:"blur(10px)", opacity:0}}
                whileInView={{filter:"blur(0px)", opacity:1}}
                transition={{duration:0.5}}
                viewport={{once:false}}
                className='flex items-center justify-center'>

                  <p className='
                  font-medium text-[#737373]
                  leading-6
                  w-[100%] xl:w-[70%] md:w-[80%] '>We are dedicated to crafting architectural and design experiences that not only serve a clear functional purpose but also elevate the spaces they inhabit through thoughtful, visually inspiring aesthetics. Our approach blends practicality with creativity, ensuring every environment we shape is as efficient as it is expressive.</p>

                </motion.div>
              </motion.div>
              


        </div>

    </div>
  )
}