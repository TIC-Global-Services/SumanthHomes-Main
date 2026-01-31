
import { useRef, useEffect } from 'react';
import { CardButtons } from '../../sub-components/CardButtons';
import { motion } from "motion/react"
import { SlideUpAnimationBlur } from "../../utils/SlideUpAnimationBlur";
import BlurText from "../../utils/BlurText";

export const ArchitectureDesignSection = () => {

    let cardWidth = useRef(0);
    
    const CardRef = useRef(null);
    const slideUpAnimation = {
        initial: {opacity:0, y:100},
        whileInView: {opacity:1, y:0},
        transition:{duration:0.3},
        viewport:{once:false} 
    }




  

  return (
    <div className=''>

        <div className='
        md:flex items-end justify-between '>

            <motion.div

            
            className='text-left md:w-[60%] lg:w-[45%]'>

                <BlurText
                text="ARCHITECTURE & DESIGN"
                delay={120}
                animateBy="words"
                direction="bottom"
                className='
                text-[#B50404] font-semibold
                text-[10px] md:text-xs 
                mb-1 xl:mb-4 md:mb-1
                uppercase leading-8 tracking-0 md:tracking-[3px]'
                />

                <BlurText
                text="Crafting Modern Buildings Where Style Meets Purpose."
                delay={120}
                animateBy="words"
                direction="bottom"
                className='
                text-black
                font-manrope font-bold
                text-2xl xl:text-4xl md:text-2xl
                mb-4
                leading-7 xl:leading-10
                tracking-[-0.5px]'
                />


            </motion.div>

            <motion.div
            initial={slideUpAnimation.initial}
            whileInView={slideUpAnimation.whileInView}
            transition={slideUpAnimation.transition}
            viewport={slideUpAnimation.viewport}

            className='md:w-[35%] lg:w-[45%]  md:pt-2'>

                <p className='
                font-normal 
                leading-4 md:leading-7
                text-[14px] xl:text-[18px]
                text-[#737373]
                '>Our buildings combine minimalism and elegance of lines and shapes. We want them to be an integral part of the surrounding landscape.</p>

            </motion.div>

        </div>


    </div>
  )
}
