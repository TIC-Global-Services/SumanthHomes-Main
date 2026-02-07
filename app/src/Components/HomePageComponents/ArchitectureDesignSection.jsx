
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
        viewport:{once:false} 
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
                className={`pb-[10px] md:pb-0 ${TitleStyleData.mainTitle}`}
                />


            </motion.div>

            <motion.div
            initial={slideUpAnimation.initial}
            whileInView={slideUpAnimation.whileInView}
            transition={slideUpAnimation.transition}
            viewport={slideUpAnimation.viewport}

            className='md:w-[35%] lg:w-[45%] '>

                <p className={` ${TitleStyleData.content}`}
                >Our buildings combine minimalism and elegance of lines and shapes. We want them to be an integral part of the surrounding landscape.</p>

            </motion.div>

        </div>


    </div>
  )
}
