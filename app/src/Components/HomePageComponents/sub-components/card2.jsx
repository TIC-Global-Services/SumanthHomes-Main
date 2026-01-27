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
          initial={{opacity:0, y:50}}
          whileInView={{opacity:1, y:0}}
          viewport={{once:false}}
          transition={{duration:0.5}}

          ref={containerRef}

         className='
         mb-4
         py-8 xl:py-10
         
         bg-white
         w-[100%] md:w-[85%] xl:w-[32%]
        flex-grow-0
         flex-shrink-0
         flex
         
    '>

        <div className="  
         mx-auto
         flex items-center gap-6
         
         text-center
         
         ">
            
            <div  className='
            flex-shrink-0
            flex-grow
            
        '>

            <h3

             className={`number
            text-right md:text-right
            font-manrope font-normal ${black ? 'text-black' : 'text-[#B50404]'}
            text-4xl xl:text-7xl md:text-7xl
            tracking-[-6px]>`}
            >{currentNumber}{plus ? "+" : null}
            </h3>

        </div>

        <div
        className='
        
        '> 

            <motion.h5
            initial={{opacity:0, y:40}}
            whileInView={{opacity:1, y:0}}
            viewport={{once:false}}
            transition={{duration:0.5}}
            
             className='

            w-full
            text-left
            font-medium text-black 
            tracking-[-0.54px]
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
            tracking-[-0.48px]
            '>{contentText}
            </motion.p>

        </div>
        
        </div>

         </motion.div>
                
        
    


)
}

