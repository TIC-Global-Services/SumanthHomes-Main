import {motion} from "motion/react"
import '../../assets/styles/titleStyle.css';
import missionImage from "../../assets/img/AboutSection/missionImage.png"
import { SlideUpAnimationBlur } from "../../utils/SlideUpAnimationBlur";
import BlurText from "../../utils/BlurText";
import ParallaxComponent from "../../utils/ParallaxComponent";


export const MissionSection = () => {


  return (
    <div   className='
    overflow-hidden
    flex flex-col md:flex-row justify-between items-center xl:items-start
    xl:gap-6 md:gap-3  xl:mt-10 md:mt-4
    mb-14 xl:mb-20 md:mb-14'>

      <div className="w-full flex md:hidden justify-center mb-4"> 
        <h2 className="font-manrope font-semibold text-xl tracking-0 text-[#B50404]">OUR MISSION</h2>
      </div>

      <div className='order-1 md:w-[48%] xl:w-[45%] overflow-hidden'>
        <ParallaxComponent className='w-full'>

            <img className='
            
            xl:w-full aspect-[335/285] md:aspect-[2/1] scale-150' src={missionImage}></img>

        </ParallaxComponent>
      </div>
        

        <div className='
        md:w-[48%] xl:w-[50%] order-2
        bg-white md:bg-transparent
        px-4 md:px-0
        py-6 md:py-0
        '>

            <div
            >

            <BlurText
              text="OUR MISSION"
              delay={120}
              animateBy="words"
              direction="bottom"
              className='
              mt-2
            mb-1 xl:mb-4 md:mb-1
            font-semibold uppercase tracking-[3px] 
            text-[rgb(181,4,4)]
            text-xs'
            />

            <BlurText
              text="Designs that Inspire Living"
              delay={120}
              animateBy="words"
              direction="bottom"
              className='
            mb-4 xl:mb-8 md:mb-4
            font-manrope font-semibold tracking-[-1.5px] md:tracking-[-0.5px]
            text-2xl xl:text-4xl 
            text-[#191919]
            '
            />

            </div>

            <motion.p
             initial={{opacity:0, y:100}}
             whileInView={{opacity:1, y:0}}
             transition={{duration:0.2}}
             viewport={{once:false}}

            className='
            mb-4 
            font-normal text-[#737373]
            text-[10px] md:text-sm xl:text-base
            leading-3 tracking-0
            '>

                At Sumanth Homes, we channel all our resources, energy, and expertise toward delivering high-quality infrastructure built to the highest standards. We constantly evaluate our actions, learning from every experience to improve and evolve. This approach empowers us to take on greater challenges and drives our continuous growth as a firm.

            </motion.p>

        </div>



    </div>
  )
}
