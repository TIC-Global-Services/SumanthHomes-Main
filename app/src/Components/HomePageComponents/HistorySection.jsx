import { motion } from "motion/react";

export const HistorySection = () => {

  const slideUpAnimation = {
    initial : {opacity:0, y:100},
    whileInView : {opacity:1, y:0},
    transition : {duration:0.5},
    viewport : {once:false}
  }

  return (
    <div 
  
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
              text-9xl xl:text-[14rem] md:text-9xl '>13</motion.p>

              <motion.div
              initial={slideUpAnimation.initial}
              whileInView={slideUpAnimation.whileInView}
              transition={slideUpAnimation.transition}
              viewport={slideUpAnimation.viewport}
              >
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
                  font-medium text-[#737373]
                  leading-5
                  w-[100%] xl:w-[70%] md:w-[80%] '>We are dedicated to crafting architectural and design experiences that not only serve a clear functional purpose but also elevate the spaces they inhabit through thoughtful, visually inspiring aesthetics. Our approach blends practicality with creativity, ensuring every environment we shape is as efficient as it is expressive.</p>

                </div>
              </motion.div>
              


        </div>

    </div>
  )
}