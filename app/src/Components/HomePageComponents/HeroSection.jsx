import bgimage from "../../assets/img/heroSection/heroSectionImage.jpg";
import { motion } from "motion/react";

export const HeroSection = () => {


  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:0.3}}
    viewport={{once:false}}
    className="
    relative
    w-full
    min-h-[100svh]
    hero-section" style={{
        backgroundImage:`url(${bgimage})`,
        backgroundSize:'cover',
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat',
        opacity:1,
    }}>


    <h2 className='
    absolute
    text-white font-manrope font-bold
    bottom-0 left-0
    w-[80%] md:w-[70%] lg:w-[70%] xl:w-[70%] 
    px-6 xl:px-[105px] lg:px-[50px] md:px-[20px]
    pb-9 xl:pb-20 md:pb-10 
    
    text-4xl md:text-5xl lg:text-6xl  xl:text-6xl 2xl:text-6xl
    
    '>
            Elevating Every Space <br /> with Purpose and Precision
    </h2>

    </motion.div>
  )
}
