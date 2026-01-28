import visionImage from "../../assets/img/AboutSection/visionImage.png"
import missionImage from "../../assets/img/AboutSection/missionImage.png"
import { useEffect, useRef } from "react";
import { gsap, TextPlugin, ScrollTrigger } from "gsap/all";
import '../../assets/styles/titleStyle.css'
import { TextSlideInAnimation } from "../../utils/TextSlideInAnimation";
import { motion } from "motion/react"
import { SlideUpAnimationBlur } from "../../utils/SlideUpAnimationBlur";
import BlurText from "../../utils/BlurText";

gsap.registerPlugin(ScrollTrigger);

export const VisionSection = () => {

    const titleRef = useRef(null);
    const subtitleRef = useRef(null)
    const contentRef = useRef(null);
    const containerRef = useRef(null);
    const imageRef = useRef(null);
    
    useEffect(()=>{
        

        gsap.fromTo(imageRef.current, {
          x:100,
          scrollTrigger:{
            trigger:containerRef.current,
            toggleActions:"play none none reset",
        }
        },
        {
          x:0,
          duration:.5,
          scrollTrigger:{
            trigger:containerRef.current,
            toggleActions:"play none none reset"
          }
        })
    },[])



  return (
    <div ref={containerRef} className='
    overflow-hidden
    flex justify-between items-center flex-wrap
    xl:gap-6 md:gap-1
    mb-14 xl:mb-10 md:mb-10'>

        <div className='
        md:w-[45%] xl:w-[50%]'>

            <div>

            <BlurText
            ref={titleRef}
              text="OUR VISION"
              delay={120}
              animateBy="words"
              direction="bottom"
              className='
            mb-1 xl:mb-4 md:mb-1
            font-semibold uppercase tracking-[3px]
            text-[rgb(181,4,4)]
            text-xs'
            />

            <BlurText
            ref={subtitleRef}
              text="The Art of Modern Building"
              delay={120}
              animateBy="words"
              direction="bottom"
              className='
            mb-4 xl:mb-8 md:mb-4
            font-manrope font-semibold tracking-[-0.5px]
            text-3xl xl:text-4xl md:text-xl'
            />

            </div>

            <motion.p
            initial={{opacity:0, y:100}}
            whileInView={{opacity:1, y:0}}
            transition={SlideUpAnimationBlur.transition}
            viewport={SlideUpAnimationBlur.viewport}
            
            ref={contentRef} className='mb-4 font-jakarta font-normal text-[#737373] md:text-sm xl:text-base'>

                Our vision is to build high-quality homes that reflect trust and lasting value. We understand that a home is a one-time investment for many, and we are committed to delivering spaces that offer comfort, reliability, and complete satisfaction. With this vision, we strive to give our best in every project we undertake.

            </motion.p>

        </div>

        <div className=' md:w-[50%] xl:w-[47%] '>

            <img ref={imageRef} className=' md:h-[18%] md:w-full  xl:w-full aspect-[2/1]' src={visionImage}></img>

        </div>

    </div>
  )
}
