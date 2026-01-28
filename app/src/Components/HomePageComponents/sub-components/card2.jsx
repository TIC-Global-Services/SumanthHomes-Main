import { gsap, ScrollTrigger } from "gsap/all"
import { useEffect, useState, useRef } from "react"
import { motion } from "motion/react"

gsap.registerPlugin(ScrollTrigger);

export const Card2 = ({Number, black=false, titleText, contentText, plus=false}) => {

    const [currentNumber, setCurrentNumber] = useState(0);
    const containerRef = useRef(null);
    let timer = Number>50 ? 20 : 40; 


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
                setTimeout(updateNumber, timer);
            }
        }, [currentNumber])
    
  return (

        <motion.div
          

          ref={containerRef}

         className='
         mb-4
         py-8 xl:py-10
         px-4 xl:px-1
         bg-white
         w-[100%] md:w-[85%] xl:w-[33%]
         aspect-[414/160]
        flex-grow-0
         flex-shrink-0
         flex 
         md:mx-auto xl:mx-0
         
    '>

        <div className="  
         mx-auto
         flex items-center gap-6
         
         text-center
         
         ">
            
            <div  className='
            
            
        '>

            <h3

             className={`number
            text-right md:text-right
            font-manrope font-normal ${black ? 'text-black' : 'text-[#B50404]'}
            text-5xl xl:text-[70px] md:text-7xl
            tracking-[-6px]>`}
            >{currentNumber}<span className="text-[#B50404]">{plus ? "+" : null}</span>
            </h3>

            </div>

        <div
        className= "">
            <motion.h5
            className="text-left font-medium text-black tracking-[-0.54px] text-base md:text-xl">
                {titleText}
                </motion.h5>
                
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

