import { motion } from "motion/react"
import '../../assets/styles/titleStyle.css';
import missionImage from "../../assets/img/AboutSection/missionImage.png"
import { SlideUpAnimationBlur } from "../../utils/SlideUpAnimationBlur";
import BlurText from "../../utils/BlurText";
import ParallaxComponent from "../../utils/ParallaxComponent";
import { TitleStyleData } from "../../utils/TitleComponentStyle";

export const MissionSection = () => {


  return (
    <div className='
    overflow-hidden
    flex flex-col md:flex-row justify-between items-center xl:items-start
    xl:gap-6 md:gap-3
    mt-[70px] md:mt-20
    '>

      <div className="w-full flex md:hidden justify-center mb-[21px]">
        <h2 className="font-manrope font-semibold text-xl tracking-0 text-[#B50404]">OUR MISSION</h2>
      </div>

      <div className='order-1 md:w-[48%] xl:w-[45%] overflow-hidden'>
        <ParallaxComponent className='w-full'>

          <img className='
            h-full
            xl:w-full aspect-[335/285] md:aspect-[3/3] lg:aspect-[2/1] scale-150' src={missionImage}></img>

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

          <div className="w-auto hidden md:block">
            <BlurText
              text="OUR MISSION"
              delay={120}
              animateBy="words"
              direction="bottom"
              className={`
              mt-2
              mb-1 xl:mb-2 md:mb-1
              ${TitleStyleData.miniTitle}
            `}
            />
          </div>

          <BlurText
            text="Designs that Inspire Living"
            delay={120}
            animateBy="words"
            direction="bottom"
            className={`
                 mb-4 xl:mb-8 md:mb-4
                font-manrope font-bold md:font-semibold text-xl leading-[1.2] md:text-2xl lg:text-[38px] tracking-[-0.5px] lg:leading-[48px] text-black
                `}

          />

        </div>

        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          viewport={{ once: true }}

          className={
            `mb-4 
            text-xs md:text-base lg:text-lg
            font-normal
            text-[#737373]
            leading-[1.2] lg:leading-[26px]
            tracking-0`
          }>

          At Sumanth Homes, we channel all our resources, energy, and expertise toward delivering high-quality infrastructure built to the highest standards. We constantly evaluate our actions, learning from every experience to improve and evolve. This approach empowers us to take on greater challenges and drives our continuous growth as a firm.

        </motion.p>

      </div>



    </div>
  )
}
