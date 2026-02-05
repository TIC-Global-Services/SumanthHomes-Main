import imageLeft from "../../assets/img/AboutSection/image-left.png"
import imageMiddle from "../../assets/img/AboutSection/image-middle.png"
import imageRight from "../../assets/img/AboutSection/image-right.png"
import { useEffect, useRef } from "react"
import { gsap, ScrollTrigger, TextPlugin } from "gsap/all";
import { TextSlideInAnimation } from "../../utils/TextSlideInAnimation";
import '../../assets/styles/titleStyle.css';
import { motion } from "motion/react";
import { SlideUpAnimationBlur } from "../../utils/SlideUpAnimationBlur";
import BlurText from "../../utils/BlurText";
import ParallaxComponent from "../../utils/ParallaxComponent";


gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

export const AboutSumanthHomesSection = () => {

  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const containerRef = useRef(null);

  const imageRef = useRef(null);

  useEffect(()=>{
    
    gsap.fromTo(imageRef.current, {
          x:-100,
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
    w-full
    flex items-start flex-wrap xl:flex-nowrap
    gap-8 md:gap-12 xl:gap-32
    mt-8 xl:mt-20 md:mt-14
    mb-14 xl:mb-40 md:mb-12'>

        <div ref={imageRef} className='
        order-2 md:order-1
        w-full xl:w-[50%]
        flex items-center relative
        gap-4
        mb-4
        '>

          <div className="w-[45%] aspect-square overflow-hidden">
            <ParallaxComponent className={'w-full aspect-square'}>
            <img className='
            w-full
            aspect-[129.02/125.67] md:aspect-square
            scale-150
            ' src={imageLeft}
            
            />
          </ParallaxComponent>
          </div>

          <div className="overflow-hidden
            absolute
            top-[33%] xl:top-[30%] md:top-[30%]
            left-[30%] md:left-[35%] xl:left-[25%]
            w-[45%]
            aspect-[129.02/125.67] md:aspect-square
            z-10
            ">

              <ParallaxComponent className={'w-full'}>
                <img className='w-full scale-150' src={imageMiddle}/>
              </ParallaxComponent>
          </div>
            

            

             <div className="overflow-hidden w-[55%] aspect-[174.52/179.65] md:aspect-square">
              <ParallaxComponent className={'w-full'}>
                <img className='w-full aspect-square scale-150' src={imageRight}/>
              </ParallaxComponent>
             </div>
             

        </div>

        <div className='
        mt-6 md:mt-6 xl:mt-0
        w-[100%] md:w-full xl:w-[55%] 
        order-1 md:order-2
        '>

          <motion.div

          ref={titleRef}>

            <BlurText
              text="About Sumanth homes"
              delay={120}
              animateBy="words"
              direction="bottom"
              className="mb-1 xl:mb-4 md:mb-1
            font-semibold uppercase 
            tracking-0 md:tracking-[3px] 
            text-[#B50404]
            text-[10px] md:text-xs "
            />
            

            <BlurText
              text="Crafting Contemporary Buildings With Elegance."
              delay={120}
              animateBy="words"
              direction="bottom"
              className='
            mb-4 xl:mb-8 md:mb-4
            font-manrope font-bold 
            w-[80%] xl:w-[80%]
            text-2xl md:text-2xl xl:text-4xl
            leading-7 tracking-[-0.5px]
            text-[#191919]
            '
            />

          </motion.div>

            <motion.p

            initial={{opacity:0, y:100}}
            whileInView={{opacity:1, y:0}}
            transition={SlideUpAnimationBlur.transition}
            viewport={SlideUpAnimationBlur.viewport}

            ref={contentRef}
            className='w-full mb-4 
            font-normal
            text-xs md:text-base xl:text-xl 
            text-[#737373]
            leading-[14px] tracking-0

             '>
              
              Established in 2013, Sumanth Homes is a partnership firm specializing in high-quality residential and commercial projects. With over 30 years of experience, Managing Partner Manohar Katta brings deep industry expertise and traditional values, while the other partners contribute modern technologies and advanced quality control practices.

            </motion.p>

        </div>


    </div>
  )
}
