import { GridCard2 } from './sub-componenets/GridCard2'
import Image1 from "../../assets/img/OurProjectsPage/CompletedProjectsSection/Image1.jpg"
import Image2 from "../../assets/img/OurProjectsPage/CompletedProjectsSection/Image2.jpg"
import Image3 from "../../assets/img/OurProjectsPage/CompletedProjectsSection/Image3.jpg"
import Image4 from "../../assets/img/OurProjectsPage/CompletedProjectsSection/Image4.jpg"
import Image5 from "../../assets/img/OurProjectsPage/CompletedProjectsSection/Image5.jpg"
import Image6 from "../../assets/img/OurProjectsPage/CompletedProjectsSection/Image6.jpg"
import { useRef } from 'react'
import { gsap } from 'gsap/gsap-core'

export const CompletedProjectsSection = () => {

  const cardSectionRef = useRef(null);
  const screenWidth = window.outerWidth;

  const prev = () =>{
    gsap.to(cardSectionRef.current, {
      x:`+=${screenWidth}`,
      ease:'power3',
    })
  }
  const next = () =>{
    gsap.to(cardSectionRef.current, {
      x:`-=${screenWidth}`,
      ease:'power3'
    })
  }

  return (
    <div className='
    mt-8
     xl:mb-28'>

        <h2 className='
        text-center
        mb-4 xl:mb-12
        font-semibold
        text-2xl md:text-4xl'>Completed Projects</h2>

        <div

        className='overflow-hidden md:overflow-scroll w-full'

        style={{
          scrollbarWidth:'none'
        }}
        >

          <div ref={cardSectionRef}  className='
        flex flex-nowrap gap-4 md:grid grid-cols-3 md:gap-4'

        >

            <GridCard2 Image={Image1} mainText={'Pearl Abode'} subText={'Apartments'} />
            <GridCard2 Image={Image2} mainText={'Lotus Serene Villas'} subText={'Villa'} />
            <GridCard2 Image={Image3} mainText={'Garuda Gateway'} subText={'Commercial'} />
            <GridCard2 Image={Image4} mainText={'Garuda Gateway'} subText={'Residential'} />
            <GridCard2 Image={Image5} mainText={'MN Sri Padmavati Gardens'} subText={'Villa'} />
            <GridCard2 Image={Image6} mainText={'KBR Brindavanam'} subText={'Villa'} />

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

        <div className='
        flex justify-center items-center
        mt-4
        '>
            <button className='text-[rgb(181,4,4)] font-medium'>-EXPLORE MORE-</button>
        </div>

    </div>
  )
}
