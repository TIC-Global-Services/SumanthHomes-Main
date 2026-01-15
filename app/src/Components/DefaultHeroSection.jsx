import {gsap, TextPlugin} from "gsap/all"
import { useEffect, useRef } from "react";


gsap.registerPlugin(TextPlugin);

export const DefaultHeroSection = ({bgImage, mainText, subText}) => {
  
  const textRef = useRef(null);

  useEffect(()=>{
    let el = textRef.current;
    gsap.to(el,{
      duration:2,
      color:"#B50404",
      text:{
        value:subText,
      }
    })
  },)
  

  return (

    <div className='
    flex items-center justify-center
    w-[100%]
    h-[14rem] xl:h-[24rem] md:h-[18rem]' style={{

        backgroundImage:`url(${bgImage})`,
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover'
    }}>

        <div className='text-center'>

            <h2 className='
            font-manrope font-normal
            text-3xl md:text-6xl xl:text-7xl xl:tracking-tighter md:tracking-tight
            xl:mb-6 md:mb-4'>{mainText}</h2>

            <p className='
            font-jakarta font-semibold
            tracking-widest uppercase [word-spacing:5px] text-black 
            text-[.8rem] md:text-xs xl:text-xs'
            
            ref={textRef}
            ></p>

        </div>

    </div>
  )
}
