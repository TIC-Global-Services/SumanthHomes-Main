import image1 from "../../assets/img/AboutSection/shvalueImage1.png"
import image2 from "../../assets/img/AboutSection/shvalueImage2.png"
import { useRef, useEffect } from "react";
import { gsap, TextPlugin, ScrollTrigger } from "gsap/all";
import '../../assets/styles/titleStyle.css'
import { TextSlideInAnimation } from "../../utils/TextSlideInAnimation";
import { motion } from "motion/react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

export const SHValues = () => {

  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const containerRef = useRef(null);

  const image1Ref = useRef(null);
  const image2Ref = useRef(null);

  return (
    <div ref={containerRef} className='flex gap-4
    mb-[28rem] 2xl:mb-[40rem]'>

        <div

          className=' xl:w-[40%]'>

            <motion.div 
              initial={{opacity:0, y:100}}
          whileInView={{opacity:1, y:0}}
          transition={{duration:0.2}}
          viewport={{once:false}}
            >
            <p className='
            mb-1 xl:mb-4 md:mb-1
            font-semibold uppercase tracking-[3px]
            text-[rgb(181,4,4)]
            text-xs'>SH VALUES</p>

            <h2 
            className='
            mb-4 xl:mb-8 md:mb-4
            font-manrope font-semibold tracking-[-0.5px]
            text-3xl xl:text-4xl md:text-xl'>What We Stand For</h2>
            </motion.div>

            <motion.p
             initial={{opacity:0, y:100}}
             whileInView={{opacity:1, y:0}}
             transition={{duration:0.2}}
             viewport={{once:false}}

             className='w-full mb-4 font-jakarta font-normal text-[#737373] md:text-sm text-base xl:text-base'>
              Our mission is to channel our passion, expertise, and resources into crafting premium infrastructure that meets the highest standards of quality and design. We believe in learning, evolving, and improving with every project — constantly questioning our processes to achieve perfection. By embracing challenges and refining our approach, we aim to grow stronger as a firm and continue creating homes that reflect integrity, comfort, and enduring value.
            </motion.p>

        </div>

        <div className='xl:w-[58%] flex gap-4 absolute right-0'>
        <motion.div
           initial={{opacity:0, y:100}}
           whileInView={{opacity:1, y:0}}
           transition={{duration:0.5}}
           viewport={{once:false}}

        className='hidden w-[55%] xl:block'>

            <img className='
            xl:w-[100%] 
            aspect-[3/4]
            ' src={image1} />

            <p className='text-xl font-medium xl:mt-1 md:mt-1'>Timeless Design</p>

        </motion.div>

        <motion.div
           initial={{opacity:0, y:100}}
           whileInView={{opacity:1, y:0}}
           transition={{duration:0.5}}
           viewport={{once:false}}
        className='hidden xl:block w-[45%]'>

            <img className='xl:w-[100%] aspect-square' src={image2} />

            <p className='text-xl font-medium xl:mt-1 md:mt-1'>Honest Craftmanship</p>

        </motion.div>
        </div>

    </div>
  )
}
