import { gsap, ScrollTrigger } from "gsap/all"
import { useEffect, useState, useRef } from "react"
import { TextSlideInAnimation } from "../../../utils/TextSlideInAnimation";
import { motion } from "motion/react"

gsap.registerPlugin(ScrollTrigger);

export const Card2 = ({Number, titleText, contentText, plus=false}) => {

    const [currentNumber, setCurrentNumber] = useState(0);
    const containerRef = useRef(null);


    const updateNumber = ()=>{
        setCurrentNumber(currentNumber+1);
    }

    useEffect(()=>{
        gsap.to(containerRef.current, {
            scrollTrigger:{
                trigger:containerRef.current,
                once:true,
            },
            onComplete:()=>{setCurrentNumber(1)}
        })
    },[])

     useEffect(()=>{
            if(currentNumber != Number && currentNumber != 0){
                setTimeout(updateNumber, 40);
            }
        }, [currentNumber])
    
  return (

        <motion.div
          initial={{opacity:0, y:50}}
          whileInView={{opacity:1, y:0}}
          viewport={{once:false}}
          transition={{duration:0.5}}

          ref={containerRef}

         className='
    bg-white
    flex items-center 
    text-center
    w-[100%] md:w-[30%] xl:w-[30%]
    
    gap-14 md:gap-20 xl:gap-20
    py-8 xl:py-10
    px-5 md:px-2 
    mb-4
    '>
        
        <div  className='
        w-[10%] md:w-[10%] xl:w-[40%]
        text-right
        '>

            <h3

             className='
            ml-auto
            number
            font-manrope font-bold text-[#B50404]
            text-4xl xl:text-7xl md:text-5xl
            tracking-tighter'>{currentNumber}
            </h3>

        </div>

        <div
        className='
        text-left
        w-[90%] md:w-[90%] xl:w-[60%]'> 

            <motion.h5
            initial={{opacity:0, y:40}}
            whileInView={{opacity:1, y:0}}
            viewport={{once:false}}
            transition={{duration:0.5}}
            
             className='
            w-full
            font-medium text-black 
            text-xl md:text-sm xl:text-sm
            md:text-left xl:text-left
            '>{titleText}
            </motion.h5>

            <motion.p
             initial={{opacity:0, y:40}}
             whileInView={{opacity:1, y:0}}
             viewport={{once:false}}
             transition={{duration:0.5}}

             className='
            text-[#464851] 
             md:text-xs 
            md:text-left xl:text-left 
            xl:text-xs
            font-normal 
            '>{contentText}
            </motion.p>

        </div>

    </motion.div>
    


)
}

