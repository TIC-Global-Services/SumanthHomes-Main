import { gsap, ScrollTrigger } from "gsap/all"
import { useEffect, useState, useRef } from "react"
import { motion } from "motion/react"

gsap.registerPlugin(ScrollTrigger);

export const Card2 = ({Number, titleText, contentText, plus=false}) => {

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
          initial={{opacity:0, y:50}}
          whileInView={{opacity:1, y:0}}
          viewport={{once:false}}
          transition={{duration:0.5}}

          ref={containerRef}

         className='
         w-[100%] md:w-[85%] xl:w-[30%]
         flex items-center gap-14 md:gap-20 xl:gap-24
         bg-white
         text-center
         md:mx-auto
         mb-4
         py-8 xl:py-10
         px-5 md:px-auto
         
    '>
        
        <div  className='
        w-[10%] md:w-[35%] xl:w-[20%]
        '>

            <h3

             className='
            ml-auto
            number
            text-right md:text-center
            font-manrope font-bold text-[#B50404]
            text-4xl xl:text-7xl md:text-7xl
            tracking-tighter'>{currentNumber}{plus ? "+" : null}
            </h3>

        </div>

        <div
        className='
        
        w-[90%] md:w-[65%] xl:w-[70%] xl:ml-auto'> 

            <motion.h5
            initial={{opacity:0, y:40}}
            whileInView={{opacity:1, y:0}}
            viewport={{once:false}}
            transition={{duration:0.5}}
            
             className='
            w-full
            text-left
            font-medium text-black 
            text-xl  md:text-3xl xl:text-xl
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
             
            text-left xl:text-left 
            text-xl xl:text-xs
            font-normal 
            '>{contentText}
            </motion.p>

        </div>

    </motion.div>
    


)
}

