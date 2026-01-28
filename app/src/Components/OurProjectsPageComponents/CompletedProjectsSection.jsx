import { GridCard2 } from './sub-componenets/GridCard2'
import Image1 from "../../assets/img/OurProjectsPage/CompletedProjectsSection/Image1.jpg"
import Image2 from "../../assets/img/OurProjectsPage/CompletedProjectsSection/Image2.jpg"
import Image3 from "../../assets/img/OurProjectsPage/CompletedProjectsSection/Image3.jpg"
import Image4 from "../../assets/img/OurProjectsPage/CompletedProjectsSection/Image4.jpg"
import Image5 from "../../assets/img/OurProjectsPage/CompletedProjectsSection/Image5.jpg"
import Image6 from "../../assets/img/OurProjectsPage/CompletedProjectsSection/Image6.jpg"
import { useEffect, useRef } from 'react'
import { ScrollTrigger, gsap, TextPlugin } from 'gsap/all'
import { CardButtons } from '../../sub-components/CardButtons'
import '../../assets/styles/titleStyle.css';
import {motion} from "motion/react"
import { SlideUpAnimationBlur } from '../../utils/SlideUpAnimationBlur'
import BlurText from '../../utils/BlurText'

gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);

export const CompletedProjectsSection = () => {

  const titleRef = useRef(null);

  let elWidth = 0;
  const tl = gsap.timeline();
  const cardSectionRef = useRef(null);  

  const CompletedProjectsCards=[
    {
      mainText :"Pearl Abode",
      subText :"Apartments",
      image :Image1,
    },
    {
      mainText :"Lotus Serene Villas",
      subText :"Villa",
      image :Image2,
    },
    {
      mainText :"Garuda Gateway",
      subText :"Commercial",
      image :Image3,
    },
    {
      mainText :"Garuda Gateway",
      subText :"Residential",
      image :Image4,
    },
    {
      mainText :"MN Sri Padmavati Gardens",
      subText :"Villa",
      image :Image5,
    },
    {
      mainText :"KBR Brindavanam",
      subText :"Villa",
      image :Image6,
    },
  ]

  let frame = 1;
  const maxFrame = CompletedProjectsCards.length-1;

  const prev = () =>{
    if(frame>1){
      frame--;
    tl.to(cardSectionRef.current, {
      x:`+=${elWidth}`,
      ease:'power3',
    })
  }
  }
  const next = () =>{
    if(frame<maxFrame){
      frame++;
    tl.to(cardSectionRef.current, {
      x:`-=${elWidth}`,
      ease:'power3'
    })
  }
  }

  useEffect(()=>{
    const el = cardSectionRef.current;
    elWidth = el.offsetWidth +20;
  },[])

  return (
    <div className='
    mt-28
     xl:mb-28'>

      <BlurText
              text="Completed Projects"
              delay={120}
              animateBy="words"
              direction="bottom"
               ref={titleRef}
        className='
        flex justify-center items-center
        text-center
        mb-4 xl:mb-12
        font-semibold
        text-3xl md:text-4xl'
            />


        <div

        className='overflow-hidden md:overflow-scroll w-full'

        style={{
          scrollbarWidth:'none'
        }}
        >

          <div ref={cardSectionRef}  className='
        flex flex-nowrap gap-5 md:grid grid-cols-3 md:gap-4'

        >

          {
            CompletedProjectsCards.map((data, id)=>(
              <GridCard2 key={id} mainText={data.mainText} subText={data.subText} Image={data.image} />
            ))
          }

          </div>

        </div>

        <CardButtons prev={prev} next={next} />

        <div className='
        flex justify-center items-center
        mt-4
        '>
            <motion.button
            initial={SlideUpAnimationBlur.initial}
            whileInView={SlideUpAnimationBlur.whileInView}
            transition={SlideUpAnimationBlur.transition}
            viewport={SlideUpAnimationBlur.viewport}
            
            className='text-[rgb(181,4,4)] font-medium'>-EXPLORE MORE-</motion.button>
        </div>

    </div>
  )
}
