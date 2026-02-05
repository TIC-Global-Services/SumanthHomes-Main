import { gsap, ScrollTrigger } from "gsap/all"
import { useEffect, useState, useRef } from "react"
import { motion } from "motion/react"

gsap.registerPlugin(ScrollTrigger);

export const Card2 = ({Number, black=false, titleText, contentText, plus=false}) => {

    const [currentNumber, setCurrentNumber] = useState(0);
    const containerRef = useRef(null);
    let timer = Number>50 ? 20 : 60; 


    const updateNumber = ()=>{
        setCurrentNumber(currentNumber+1);
    }

    useEffect(()=>{
            if(currentNumber != Number && currentNumber != 0){
                setTimeout(updateNumber, timer);
            }
        }, [currentNumber])
    
  return (

        <motion.div
        initial={{opacity:1}}
        whileInView={{opacity:1}}
        viewport={{once:true}}
        onAnimationComplete={()=>{setCurrentNumber(1)}}
         

         className='
         mb-3 md:mb-4
         py-0 xl:py-10
         px-4 xl:px-1
         bg-white
         w-[100%] md:w-[85%] xl:w-[33%]
         aspect-[335/100] md:aspect-[414/160] lg:aspect-[4/1] xl:aspect-[414/160]
         flex-grow-0
         flex-shrink-0
         flex justify-between
         md:mx-auto xl:mx-0
         
    '>

        <div   className={`  
         mx-auto
         flex justify-center items-center ${Number==100 ? 'gap-6' : 'gap-4'}
         w-full
         text-center
         
         `}>
            
            <div   className={`relative ${Number==100 ? 'min-w-[20%] max-w-[30%] flex lg:w-auto xl:min-w-[20%] xl:max-w-[30%] ' :''}`}>

            <h3

             className={`
            number
            opacity-0
            text-right md:text-right
            font-manrope font-normal ${black ? 'text-black' : 'text-[#B50404]'}
            text-[40px] xl:text-[60px] md:text-7xl
            tracking-[-5px] md:tracking-[-6px]>`}
            >{Number}<span className="text-[#B50404]">{plus ? "+" : null}</span>
            </h3>

            <h3
            ref={containerRef}
             className={`
            opacity-1
            absolute top-0 left-0
            number
            text-right md:text-right
            font-manrope font-normal ${black ? 'text-black' : 'text-[#B50404]'}
            text-[40px] xl:text-[60px] md:text-7xl
            tracking-[-5px] md:tracking-[-6px]>`}
            >{currentNumber}<span className="text-[#B50404]">{plus ? "+" : null}</span>
            </h3>

            </div>

            <div
            className= "w-auto xl:w-[60%] ">
                <motion.h2
                className="text-left font-medium text-[#14161C] tracking-[-0.54px] leading-[18px] text-base md:text-xl lg:text-2xl xl:text-xl">
                   {titleText}
                </motion.h2>
                
                <motion.p
                className="
                text-left
                text-[#464851]
                text-[10px] md:text-sm leading-4
                font-normal
                tracking-[-0.48px]
                "
               >
                {contentText}
                </motion.p>
            </div>

        
            </div>

         </motion.div>
                
        
    


)
}

