import { Card2 } from './sub-componenets/Card2'
import bgImage from "../../assets/img/AboutSection/teamImage.png"
import award1 from "../../assets/img/AboutSection/award1.png";
import award2 from "../../assets/img/AboutSection/award2.png";
import award3 from "../../assets/img/AboutSection/award3.png";
import award4 from "../../assets/img/AboutSection/award4.png";
import { useRef} from 'react';
import { gsap } from 'gsap/gsap-core';
import { CardButtons } from '../../sub-components/CardButtons';

export const SHSTeamSection = () => {

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
      position:'',
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
        x:`+=${screenWidth}`,
        ease:'power2.in'
       })
  }

  }
  const next = () =>{
    if(frame<maxFrame){
      frame++;
      const el = cardSectionRef.current;
      tl.to(el, {
        x:`-=${screenWidth}`,
        ease:'power2.in'
      })
  }
  }

  return (
    <div className='mb-14 xl:mb-14 '>

        <div className='
        md:justify-self-center
        md:text-center
        xl:mb-5 md:mb-3'>
            <p className='
            mb-1 xl:mb-4 md:mb-1
            font-semibold uppercase tracking-[0.2rem] [word-spacing:3px]
             text-[rgb(181,4,4)]
              text-xs'>SHS TEAM</p>
            <h2 className='
            mb-4 xl:mb-8 md:mb-4
            font-manrope font-semibold
            text-3xl xl:text-4xl md:text-xl'>Studio leaders</h2>
        </div>

        <div  className='
        overflow-hidden md:overflow-scroll
        w-full
        xl:mb-14'

        style={{
          scrollbarWidth:'none'
        }}
        >
          <div ref={cardSectionRef} className='flex gap-10'>
              {
                TeamCards.map((data, _)=>(
                  <Card2 Name={data.name} Position={data.position} bgImage={data.bgImage}/>
                ))
              }
          </div>

        </div>

        <CardButtons prev={prev} next={next}/>
              
    </div>
  )
}
