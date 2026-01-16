import { useRef, useEffect } from "react"
import { TextPlugin, gsap, ScrollTrigger } from "gsap/all"

gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);

export const Card1 = ({number, content, pageNo}) => {

  const numberRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(()=>{
    const el = numberRef.current;

    gsap.to(el, {
      duration:1,
      color:'#B40505',
      text:{
        value:number,
      },
      scrollTrigger:{
        trigger:el,
        start:"top 80%"
      }
    })

    gsap.fromTo(cardRef.current, {
          y:100,
          scrollTrigger:{
            trigger:cardRef.current,
            toggleActions:"play none none reset",
        }
        },
        {
          y:0,
          duration:.5,
          scrollTrigger:{
            trigger:cardRef.current,
            toggleActions:"play none none reset"
          }
        })

  },[])

  return (


    <div ref={cardRef} className='
    
    flex items-center justify-between
    md:gap-5 border-t-2
    border-[#3E3E3E]
    xl:pt-4 md:pt-4
    w-[100%] md:w-[20%] xl:w-[30%]'>

        <div className='md:w-[60%] xl:w-[60%] '>

            <p className='font-normal tracking-wide'> <span ref={numberRef} className='text-black'>{number}</span> {content}</p>

        </div>

        <p className=' font-medium'>{pageNo}</p>
    </div>

  )
}
