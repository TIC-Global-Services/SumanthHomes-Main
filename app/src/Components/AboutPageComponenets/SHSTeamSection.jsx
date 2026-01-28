import { Card2 } from './sub-componenets/Card2'
import bgImage from "../../assets/img/AboutSection/teamImage.png"
import award1 from "../../assets/img/AboutSection/award1.png";
import award2 from "../../assets/img/AboutSection/award2.png";
import award3 from "../../assets/img/AboutSection/award3.png";
import award4 from "../../assets/img/AboutSection/award4.png";
import { CardButtons } from '../../sub-components/CardButtons';
import { useRef, useEffect} from 'react';
import { gsap } from 'gsap/gsap-core';
import { TextPlugin, ScrollTrigger } from 'gsap/all';
import '../../assets/styles/titleStyle.css';
import { motion } from "motion/react"
import { SlideUpAnimationBlur } from '../../utils/SlideUpAnimationBlur';
import BlurText from '../../utils/BlurText';

gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);

export const SHSTeamSection = () => {

  const titleRef = useRef(null);
      

  const tl = gsap.timeline();

  // References the studio leaders section 
  const cardSectionRef = useRef(null);
  const screenWidth = window.outerWidth;

  const TeamCards = [
    {
      name:'Jeremy dupont',
      position:'Director',
      bgImage:bgImage,
    },
    {
      name:'Jeremy dupont',
      position:'Director',
      bgImage:bgImage,
    },
    {
      name:'Jeremy dupont',
      position:'Director',
      bgImage:bgImage,
    },
    {
      name:'Jeremy dupont',
      position:'Director',
      bgImage:bgImage,
    },
  ]

  let frame = 1;
  const maxFrame = TeamCards.length-1;


  const prev = () =>{
    if(frame>1){
      frame--;
      const el = cardSectionRef.current;
      tl.to(el, {
        x:`+=${cardSectionRef.current.outerWidth}`,
        ease:'power2.in'
       })
  }

  }
  const next = () =>{
    if(frame<maxFrame){
      frame++;
      const el = cardSectionRef.current;
      tl.to(el, {
        x:`-=${cardSectionRef.current.outerWidth}`,
        ease:'power2.in'
      })
  }
  }

  return (
    <div className='mb-14 xl:mb-14 overflow-hidden'>

        <motion.div

        className='
        md:justify-self-center
        md:text-center
        xl:mb-5 md:mb-3'>

            <BlurText
              text="SHS TEAM"
              delay={120}
              animateBy="words"
              direction="bottom"
              className='
                mb-1 xl:mb-4 md:mb-1
                font-semibold uppercase tracking-[3px]
              text-[rgb(181,4,4)]
                text-xs'
                      />


            <BlurText
             ref={titleRef}
              text="Studio leaders"
              delay={120}
              animateBy="words"
              direction="bottom"
              className='
            mb-4 xl:mb-8 md:mb-4
            font-manrope font-semibold tracking-[-0.5px]
            text-3xl xl:text-4xl md:text-xl'
                      />

        </motion.div>

        <div  className='
        w-full
        xl:mb-14'

        >
          <div ref={cardSectionRef} className='flex gap-4'>
              {
                TeamCards.map((data, id)=>(
                  <Card2 key={id} Name={data.name} Position={data.position} bgImage={data.bgImage}/>
                ))
              }
          </div>

        </div>

        <CardButtons prev={prev} next={next}/>
              
    </div>
  )
}
