import { gsap, ScrollTrigger } from "gsap/all"
import { useEffect, useRef } from "react"

gsap.registerPlugin(ScrollTrigger);

export const Card2 = ({Number, titleText, contentText, plus=false}) => {
    
    const numberRef = useRef(null);

    useEffect(()=>{
        const obj = {value:0};

        gsap.to(obj,{

            value:Number,
            duration:2,
            ease:"power1.out",
            onUpdate:()=>{
                numberRef.current.textContent = Math.floor(obj.value);
            },
            scrollTrigger:{
                trigger:numberRef.current,
                start:"top 80%",
                once:true,
            }
        }

        )
    },[Number])
    
  return (

    <div className='
    flex items-center justify-evenly 
    text-center
    w-[100%] md:w-[30%]
    bg-white 
    
    gap-14 md:gap-20 xl:gap-16
    py-8 xl:py-10
    px-5 md:px-2
    mb-4
    '>
        
        <div className='
        text-right
        w-[10%] md:w-[10%]
         bg-white'>

            <h3 ref={numberRef} className='
            number
            font-manrope font-bold text-[#B50404]
            text-4xl xl:text-7xl md:text-5xl
            tracking-tighter'>{Number}</h3>

        </div>

        <div className='
        text-left
        w-[90%] md:w-[90%] xl:w-[60%]'> 

            <h5 className='
            font-medium text-black 
            md:text-sm xl:text-sm
            md:text-left xl:text-left
            md:tracking-tighter xl:tracking-tight 
            '>{titleText}</h5>
            <p className='
            text-[#464851] 
            text-xs md:text-xs 
            md:text-left xl:text-left 
            xl:text-xs
            font-normal 
            xl:tracking-tighter
             xl:leading-5'>{contentText}</p>

        </div>

    </div>


)
}

