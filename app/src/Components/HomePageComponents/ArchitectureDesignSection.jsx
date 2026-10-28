
import { useRef, useEffect } from 'react';
import { CardButtons } from '../../sub-components/CardButtons';
import { motion } from "motion/react"
import { SlideUpAnimationBlur } from "../../utils/SlideUpAnimationBlur";
import BlurText from "../../utils/BlurText";
import { TitleStyleData } from '../../utils/TitleComponentStyle';

export const ArchitectureDesignSection = () => {

    let cardWidth = useRef(0);
    
    const CardRef = useRef(null);
    const slideUpAnimation = {
        initial: {opacity:0, y:100},
        whileInView: {opacity:1, y:0},
        transition:{duration:0.3},
        viewport:{once:true} 
    }




  

  return (
    <div className='md:py-5'>

        <div className='
        md:flex items-end justify-between '>

            <motion.div

            
            className='text-left md:w-[60%] lg:w-[45%]'>

                <BlurText
                text="ARCHITECTURE & DESIGN"
                delay={120}
                animateBy="words"
                direction="bottom"
                className={` ${TitleStyleData.miniTitle}`}
                />

                <BlurText
                text="Crafting Modern Buildings Where Style Meets Purpose."
                delay={120}
                animateBy="words"
                direction="bottom"
                className={`pb-[10px] md:pb-0 font-manrope font-bold md:font-semibold text-2xl leading-[1.1] md:text-[38px] tracking-[-0.5px] lg:leading-[48px] text-[#191919]`}
                />


            </motion.div>

            <motion.div
            initial={slideUpAnimation.initial}
            whileInView={slideUpAnimation.whileInView}
            transition={slideUpAnimation.transition}
            viewport={slideUpAnimation.viewport}

            className='md:w-[35%] lg:w-[45%] '>

                <p className={`mb-4 
            text-xs md:text-base lg:text-lg
            font-normal
            text-[#737373]
            leading-[1.2] lg:leading-[26px]
            tracking-0`}
                >Our buildings combine minimalism and elegance of lines and shapes. We want them to be an integral part of the surrounding landscape.</p>

            </motion.div>

        </div>


    </div>
  )
}
