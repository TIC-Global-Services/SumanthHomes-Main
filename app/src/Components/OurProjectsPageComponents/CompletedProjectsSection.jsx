import { GridCard2 } from './sub-componenets/GridCard2'
import Image1 from "../../assets/img/OurProjectsPage/CompletedProjectsSection/Image1.jpg"
import Image2 from "../../assets/img/OurProjectsPage/CompletedProjectsSection/Image2.jpg"
import Image3 from "../../assets/img/OurProjectsPage/CompletedProjectsSection/Image3.jpg"
import Image4 from "../../assets/img/OurProjectsPage/CompletedProjectsSection/Image4.jpg"
import Image5 from "../../assets/img/OurProjectsPage/CompletedProjectsSection/Image5.jpg"
import Image6 from "../../assets/img/OurProjectsPage/CompletedProjectsSection/Image6.jpg"
import { useEffect, useRef, useState } from 'react'
import { ScrollTrigger, gsap, TextPlugin } from 'gsap/all'
import { CardButtons } from '../../sub-components/CardButtons'
import '../../assets/styles/titleStyle.css';
import {motion, useScroll} from "motion/react"
import { SlideUpAnimationBlur } from '../../utils/SlideUpAnimationBlur'
import BlurText from '../../utils/BlurText'
import { useSwipeable } from 'react-swipeable'


gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);

export const CompletedProjectsSection = () => {

  const titleRef = useRef(null);
  const tl = useRef(null);
  const cardSectionRef = useRef(null);  
  const [frame, setFrame] = useState(1);
  
  useEffect(()=>{
    tl.current = gsap.timeline();
  },[]);

  

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
  
  const maxFrame = CompletedProjectsCards.length;

  const swipeLeft = ()=>{
    if(frame != maxFrame){
      if(tl.current.isActive()) return;

      setFrame(frame+1);
      tl.current.to(cardSectionRef.current, {x:`-=${window.innerWidth}`});
    }
  }

  const swipeRight = ()=>{
    if(frame != 1){
      if(tl.current.isActive()) return;

      setFrame(frame-1);
      tl.current.to(cardSectionRef.current, {x:`+=${window.innerWidth}`});
    }
  }

  const handler = useSwipeable({
    onSwipedLeft:()=>swipeLeft(),
    onSwipedRight:()=>swipeRight()
  })


  return (
    <div className='
    mt-[60px] md:mt-[120px]'>

      <BlurText
              text="Completed Projects"
              delay={120}
              animateBy="words"
              direction="bottom"
               ref={titleRef}
        className='
        flex justify-center items-center
        text-center
        font-semibold
        text-3xl md:text-4xl
        mb-[30px] md:mb-[50px]
        '
            />


        <div
        {...handler}
        className='overflow-hidden md:overflow-scroll w-full'

        style={{
          scrollbarWidth:'none'
        }}
        >

          <div ref={cardSectionRef}  className='
        flex flex-nowrap gap-10 md:grid grid-cols-3 md:gap-4'

        >

          {
            CompletedProjectsCards.map((data, id)=>(
              <GridCard2 key={id} mainText={data.mainText} subText={data.subText} Image={data.image} />
            ))
          }

          </div>

        </div>

        <div className='md:hidden w-full flex justify-center gap-2'>
          {
            CompletedProjectsCards.map((data, id)=>(
              <div className={`w-3 h-3 border-0 rounded-full ${(id+1) == frame ? 'bg-[#737373]' : 'bg-[#D9D9D9]'}`} key={id}></div>
            ))
          }
        </div>

    </div>
  )
}
