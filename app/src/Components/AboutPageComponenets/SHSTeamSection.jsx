import { Card2 } from './sub-componenets/Card2'
import bgImage from "../../assets/img/AboutSection/teamImage.png"
import award1 from "../../assets/img/AboutSection/award1.png";
import award2 from "../../assets/img/AboutSection/award2.png";
import award3 from "../../assets/img/AboutSection/award3.png";
import award4 from "../../assets/img/AboutSection/award4.png";
import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap/gsap-core';

export const SHSTeamSection = () => {

  // References the studio leaders section 
  const cardSectionRef = useRef(null);
  const screenWidth = window.outerWidth;

  const prev = () =>{
    const el = cardSectionRef.current;
    gsap.to(el, {
      x:`+=${screenWidth}`,
      ease:'power2.in'
    })

  }
  const next = () =>{
    const el = cardSectionRef.current;
    gsap.to(el, {
      x:`-=${screenWidth}`,
      ease:'power2.in'
    })

  }

  return (
    <div className='mb-14 xl:mb-14 '>

        <div className='
        md:justify-self-center
        md:text-center
        xl:mb-5 md:mb-3'>
            <p className='
            xl:mb-4 md:mb-1
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

              <Card2 bgImage={bgImage} Name={"Jeremy dupont"} Position={"Director"} />
              <Card2 bgImage={bgImage} Name={"Jeremy dupont"} Position={"Director"} />
              <Card2 bgImage={bgImage} Name={"Jeremy dupont"} Position={"Director"} />
              <Card2 bgImage={bgImage} Name={"Jeremy dupont"} Position={"Director"} />
              <Card2 bgImage={bgImage} Name={"Jeremy dupont"} Position={"Director"} />
          </div>

        </div>

        {/* Buttons for smaller screens */}
        <div className='
        flex justify-center items-center
        md:hidden
        gap-5
        mt-5'>
              <div className='
                flex items-center justify-center
                md:order-first
                flex-shrink-0
                bg-white
                p-2
                rounded-full'>
                    <div>
                        <button onClick={prev} className='flex items-center justify-center '>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g transform="translate(24,0) scale(-1,1)">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M1.5 12C1.5 11.8011 1.57902 11.6103 1.71967 11.4696C1.86032 11.329 2.05109 11.25 2.25 11.25H19.9395L15.219 6.53097C15.0782 6.39014 14.9991 6.19913 14.9991 5.99997C14.9991 5.80081 15.0782 5.6098 15.219 5.46897C15.3598 5.32814 15.5508 5.24902 15.75 5.24902C15.9492 5.24902 16.1402 5.32814 16.281 5.46897L22.281 11.469C22.3508 11.5386 22.4063 11.6214 22.4441 11.7125C22.4819 11.8036 22.5013 11.9013 22.5013 12C22.5013 12.0986 22.4819 12.1963 22.4441 12.2874C22.4063 12.3785 22.3508 12.4613 22.281 12.531L16.281 18.531C16.1402 18.6718 15.9492 18.7509 15.75 18.7509C15.5508 18.7509 15.3598 18.6718 15.219 18.531C15.0782 18.3901 14.9991 18.1991 14.9991 18C14.9991 17.8008 15.0782 17.6098 15.219 17.469L19.9395 12.75H2.25C2.05109 12.75 1.86032 12.671 1.71967 12.5303C1.57902 12.3896 1.5 12.1989 1.5 12Z"
                                    fill="#B50404"/>
                            </g>
                            </svg>
  
                        </button>
                    </div>
                        
                </div>

                <div className='
                flex items-center justify-center
                flex-shrink-0
                md:hidden
                bg-white
                p-2
                rounded-full'>
                    <div >
                        <button onClick={next} className='flex items-center justify-center '>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M1.5 12C1.5 11.8011 1.57902 11.6103 1.71967 11.4696C1.86032 11.329 2.05109 11.25 2.25 11.25H19.9395L15.219 6.53097C15.0782 6.39014 14.9991 6.19913 14.9991 5.99997C14.9991 5.80081 15.0782 5.6098 15.219 5.46897C15.3598 5.32814 15.5508 5.24902 15.75 5.24902C15.9492 5.24902 16.1402 5.32814 16.281 5.46897L22.281 11.469C22.3508 11.5386 22.4063 11.6214 22.4441 11.7125C22.4819 11.8036 22.5013 11.9013 22.5013 12C22.5013 12.0986 22.4819 12.1963 22.4441 12.2874C22.4063 12.3785 22.3508 12.4613 22.281 12.531L16.281 18.531C16.1402 18.6718 15.9492 18.7509 15.75 18.7509C15.5508 18.7509 15.3598 18.6718 15.219 18.531C15.0782 18.3901 14.9991 18.1991 14.9991 18C14.9991 17.8008 15.0782 17.6098 15.219 17.469L19.9395 12.75H2.25C2.05109 12.75 1.86032 12.671 1.71967 12.5303C1.57902 12.3896 1.5 12.1989 1.5 12Z"
                                fill="#B50404"/>
                           </svg>

                        </button>
                    </div>
                </div>
          </div>
              
    </div>
  )
}
