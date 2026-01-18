import { useRef, useEffect } from "react"
import { TextPlugin, gsap, ScrollTrigger } from "gsap/all"
import { motion } from "motion/react";

gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);

export const Card1 = ({number, content, pageNo}) => {

  const numberRef = useRef(null);
  const cardRef = useRef(null);

  return (


    <motion.div
     initial={{opacity:0, y:40}}
     whileInView={{opacity:1, y:0}}
     viewport={{once:false}}

     ref={cardRef} className='
    
    flex items-center justify-between
    md:gap-5 border-t-2
    border-[#3E3E3E]
    xl:pt-4 md:pt-4
    w-[100%] md:w-[20%] xl:w-[30%]'>

        <div className='md:w-[60%] xl:w-[60%] '>

            <p className='font-normal tracking-wide'> <span ref={numberRef} className='text-[#B40505]'>{number}</span> {content}</p>

        </div>

        <p className=' font-medium'>{pageNo}</p>
    </motion.div>

  )
}
