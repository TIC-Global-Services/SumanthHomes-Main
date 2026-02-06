import visionImage from "../../assets/img/AboutSection/visionImage.png"
import missionImage from "../../assets/img/AboutSection/missionImage.png"
import { useEffect, useRef } from "react";
import { gsap, TextPlugin, ScrollTrigger } from "gsap/all";
import '../../assets/styles/titleStyle.css'
import { TextSlideInAnimation } from "../../utils/TextSlideInAnimation";
import { motion } from "motion/react"
import { SlideUpAnimationBlur } from "../../utils/SlideUpAnimationBlur";
import BlurText from "../../utils/BlurText";
import { Parallax } from "react-scroll-parallax";
import ParallaxComponent from "../../utils/ParallaxComponent";
import { TitleStyleData } from "../../utils/TitleComponentStyle";

gsap.registerPlugin(ScrollTrigger);

export const VisionSection = () => {

    const titleRef = useRef(null);
    const subtitleRef = useRef(null)
    const contentRef = useRef(null);
    const containerRef = useRef(null);
    const imageRef = useRef(null);



  return (
    <div ref={containerRef} className='
    overflow-hidden
    flex justify-between items-center flex-wrap
    xl:gap-6 md:gap-1
    mb-14 xl:mb-10 md:mb-10'>

        <div className="
        w-full
        flex justify-center md:hidden
        mb-4
        ">
          <h2 className="font-manrope font-semibold text-xl tracking-0 text-[#B50404]">OUR VISION</h2>
        </div>

        <div className='
        bg-white md:bg-transparent
        px-6 md:px-0
        py-10 md:py-auto
        md:w-[45%] xl:w-[50%]
        order-2 md:order-1
        '>

            <div>

              <div className="w-auto hidden md:block">
                <BlurText
                ref={titleRef}
              text="OUR VISION"
              delay={120}
              animateBy="words"
              direction="bottom"
              className={
                `w-full ${TitleStyleData.miniTitle}`
              }
            />
              </div>
            

            <BlurText
            ref={subtitleRef}
              text="The Art of Modern Building"
              delay={120}
              animateBy="words"
              direction="bottom"
              className={`
            mb-4 xl:mb-8 md:mb-4
            ${TitleStyleData.mainTitle}
            `}
            />

            </div>

            <motion.p
            initial={{opacity:0, y:100}}
            whileInView={{opacity:1, y:0}}
            transition={SlideUpAnimationBlur.transition}
            viewport={SlideUpAnimationBlur.viewport}
            
            ref={contentRef} className={`${TitleStyleData.content}`}>

                Our vision is to build high-quality homes that reflect trust and lasting value. We understand that a home is a one-time investment for many, and we are committed to delivering spaces that offer comfort, reliability, and complete satisfaction. With this vision, we strive to give our best in every project we undertake.

            </motion.p>

        </div>

        <div className=' md:w-[50%] xl:w-[47%] overflow-hidden order-1 md:order-2'>
          <ParallaxComponent className='w-full'>
           <img className=' md:h-[18%] md:w-full  xl:w-full aspect-[335/245] md:aspect-[2/1] scale-150' src={visionImage}></img>
          </ParallaxComponent>
        </div>

    </div>
  )
}
