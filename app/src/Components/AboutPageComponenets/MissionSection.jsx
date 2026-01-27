import {motion} from "motion/react"
import '../../assets/styles/titleStyle.css';
import missionImage from "../../assets/img/AboutSection/missionImage.png"
import { SlideUpAnimationBlur } from "../../utils/SlideUpAnimationBlur";


export const MissionSection = () => {


  return (
    <div   className='
    overflow-hidden
    flex flex-col md:flex-row justify-between items-center xl:items-start
    xl:gap-6 md:gap-3  xl:mt-10 md:mt-4
    mb-14 xl:mb-20 md:mb-14'>

        <motion.div 
          initial={{opacity:1, x:-100}}
          whileInView={{opacity:1, x:0}}
          transition={{duration:0.5}}
          viewport={{once:false}}

        className='order-2 md:order-1 md:w-[48%] xl:w-[45%] bg-black'>

            <img className='
            
            xl:w-full aspect-[2/1]' src={missionImage}></img>

        </motion.div>

        <div className=' md:w-[48%] xl:w-[50%] order-1 md:order-2'>

            <motion.div
              initial={SlideUpAnimationBlur.initial}
              whileInView={SlideUpAnimationBlur.whileInView}
              transition={SlideUpAnimationBlur.transition}
              viewport={SlideUpAnimationBlur.viewport}
            >
              <p className='
              mt-2
            mb-1 xl:mb-4 md:mb-1
            font-semibold uppercase tracking-[3px] 
            text-[rgb(181,4,4)]
            text-xs'>OUR MISSION</p>

              <h2
            
            className='
            mb-4 xl:mb-8 md:mb-4
            font-manrope font-semibold tracking-[-0.5px]
            text-3xl xl:text-4xl md:text-xl'>Designs that Inspire Living</h2>
            </ motion.div>

            <motion.p
             initial={{opacity:0, y:100}}
             whileInView={{opacity:1, y:0}}
             transition={{duration:0.2}}
             viewport={{once:false}}

            className='mb-4 font-jakarta font-normal text-[#737373] md:text-sm xl:text-base'>

                At Sumanth Homes, we channel all our resources, energy, and expertise toward delivering high-quality infrastructure built to the highest standards. We constantly evaluate our actions, learning from every experience to improve and evolve. This approach empowers us to take on greater challenges and drives our continuous growth as a firm.

            </motion.p>

        </div>



    </div>
  )
}
