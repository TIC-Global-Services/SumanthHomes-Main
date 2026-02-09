import { Card2 } from './sub-componenets/Card2'
import bgImage from "../../assets/img/AboutSection/teamImage.png"
import award1 from "../../assets/img/AboutSection/award1.png";
import award2 from "../../assets/img/AboutSection/award2.png";
import award3 from "../../assets/img/AboutSection/award3.png";
import award4 from "../../assets/img/AboutSection/award4.png";
import { CardButtons } from '../../sub-components/CardButtons';
import { useRef, useEffect, useState} from 'react';
import { gsap } from 'gsap/gsap-core';
import { TextPlugin, ScrollTrigger } from 'gsap/all';
import '../../assets/styles/titleStyle.css';
import { motion } from "motion/react"
import { SlideUpAnimationBlur } from '../../utils/SlideUpAnimationBlur';
import BlurText from '../../utils/BlurText';
import { TitleStyleData } from '../../utils/TitleComponentStyle';
import { useSwipeable } from 'react-swipeable';

gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);

const SHSTeamSection = () => {

  const titleRef = useRef(null);
  const tl = useRef(null);

  const [frame, setFrame] = useState(1);

  useEffect(()=>{
    tl.current = gsap.timeline();
  }, [])

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

  let tempFrame = 1;
  const maxFrame = TeamCards.length;

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
      setFrame(frame-1)
      tl.current.to(cardSectionRef.current, {x:`+=${window.innerWidth}`});
    }
  }

  const handler = useSwipeable({
    onSwipedLeft:()=>swipeLeft(),
    onSwipedRight:()=>swipeRight()
  })

  return (
    <div className='mt-[60px] md:mt-[120px] overflow-hidden'>

        <motion.div

        className='
        md:justify-self-center
        md:text-center
        mb-[30px] xl:mb-5 md:mb-3'>

            <BlurText
              text="SHS TEAM"
              delay={120}
              animateBy="words"
              direction="bottom"
              className={`
                mb-1 xl:mb-4 md:mb-1
                flex justify-center
                ${TitleStyleData.miniTitle}
                `}
                
  
                      />


            <BlurText
             ref={titleRef}
              text="Studio leaders"
              delay={120}
              animateBy="words"
              direction="bottom"
              className={`
                mb-4 xl:mb-8 md:mb-4
                flex justify-center
                ${TitleStyleData.mainTitle}
                `}
                      />

        </motion.div>

        <div {...handler} style={{scrollbarWidth:'none'}} className='
        w-full
        overflow-hidden md:overflow-hidden
        xl:mb-14'

        >
          <div ref={cardSectionRef} className='flex gap-10 md:gap-4'>
              {
                TeamCards.map((data, id)=>(
                  <Card2 key={id} Name={data.name} Position={data.position} bgImage={data.bgImage}/>
                ))
              }
          </div>

        </div>

        <div className='md:hidden w-full flex justify-center gap-1 mt-4'>
          {
            TeamCards.map((data, index)=>(
              <div key={index} className={`w-3 h-3 border rounded-full ${ (index+1) === frame ? 'bg-[#737373]' : 'bg-[#D9D9D9]'}`} ></div>
            ))
          }

        </div>
              
    </div>
  )
}

export default SHSTeamSection;