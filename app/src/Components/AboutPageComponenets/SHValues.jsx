import image1 from "../../assets/img/AboutSection/shvalueImage1.png"
import image2 from "../../assets/img/AboutSection/shvalueImage2.png"
import { useRef, useEffect } from "react";
import { gsap, TextPlugin, ScrollTrigger } from "gsap/all";
import '../../assets/styles/titleStyle.css'
import { TextSlideInAnimation } from "../../utils/TextSlideInAnimation";
import { motion } from "motion/react";
import { SlideUpAnimationBlur } from "../../utils/SlideUpAnimationBlur";
import BlurText from "../../utils/BlurText";
import ParallaxComponent from "../../utils/ParallaxComponent";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

const SHValues = () => {

  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const containerRef = useRef(null);

  const image1Ref = useRef(null);
  const image2Ref = useRef(null);

  return (
    <div ref={containerRef} className='flex justify-between gap-4 flex-wrap md:flex-nowrap
    mb-10 md:w-[90%] xl:w-full'>

        <div

          className=' xl:w-[40%] '>

            <div 
            >

             <BlurText
              text="SH VALUES"
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
              text="What We Stand For"
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
             transition={{duration:0.2}}
             viewport={{once:false}}

             className='w-full mb-4 font-jakarta font-normal text-[#737373] md:text-sm text-base xl:text-base'>
              Our mission is to channel our passion, expertise, and resources into crafting premium infrastructure that meets the highest standards of quality and design. We believe in learning, evolving, and improving with every project — constantly questioning our processes to achieve perfection. By embracing challenges and refining our approach, we aim to grow stronger as a firm and continue creating homes that reflect integrity, comfort, and enduring value.
            </motion.p>

        </div>

        <div className='w-full md:w-auto xl:w-[58%] flex gap-4 overflow-scroll md:overflow-hidden ' style={{scrollbarWidth:'none'}}>
        <div
        className='w-full md:w-[55%] xl:block overflow-hidden xl:pb-40 mb-10 flex-shrink-0'>

          <div className="w-full overflow-hidden">
          <ParallaxComponent>
              <img className='
            xl:w-[100%] 
            aspect-[3/4]
            ' src={image1} />

          </ParallaxComponent>
          </div>
          <p className='text-xl font-medium xl:mt-1 md:mt-1'>Timeless Design</p>

        </div>

        <motion.div
        className=' xl:block w-full md:w-[45%] overflow-hidden flex-shrink-0'>

          <div className="w-full overflow-hidden">
          <ParallaxComponent>
              <img className='w-full xl:w-[100%] aspect-square scale-110 mb-14 md:mb-6' src={image2} />
          </ParallaxComponent>
          </div>

          <p className='text-xl font-medium xl:mt-1 md:mt-1'>Honest Craftmanship</p>
          

        </motion.div>
        </div>

        <div className="md:hidden flex justify-center w-full">
          <div className="w-3 h-3 border rounded-full bg-gray-600"></div>
          <div className="w-3 h-3 border rounded-full bg-gray-600"></div>
        </div>

    </div>
  )
}

export default SHValues;