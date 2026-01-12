import { gsap } from "gsap/gsap-core"
import { ScrollTrigger } from 'gsap/all'
import { useRef, useEffect } from 'react'


export const GridCard2 = ({Image, mainText, subText}) => {

  gsap.registerPlugin(ScrollTrigger);

  const cardRef = useRef(null);

  useEffect(()=>{
    if(window.outerWidth>700){
      return
    }
    const el = cardRef.current;

    gsap.to(el,{
    x:"-=1000px",
    repeat:-1,
    duration:10,
    ease:'sine',
    scrollTrigger:{
      trigger:el,
      start:"top 30%"
    }
  })
  },)

  return (
    <div ref={cardRef} className='
    card
    relative
    w-full
    flex-shrink-0
    '>

        <img src={Image} className='
        w-full
        h-full md:h-[20rem] xl:h-[27rem]
        '></img>

        <div className='
        text-center 
        absolute md:relative
        bottom-0
        w-full
        flex-col md:flex-row justify-normal items-center
        pb-4
        xl:mt-4 xl:mb-8'>

            <h4 className='font-medium text-xl text-white md:text-black'>{mainText}</h4>
            
            <p className='font-normal text-[#737373] text-xl'>{subText}</p>

        </div>

    </div>
  ) 
}
