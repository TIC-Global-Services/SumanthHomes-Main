import { GridCard2 } from './sub-componenets/GridCard2'
import Image1 from "../../assets/img/OurProjectsPage/CompletedProjectsSection/Image1.jpg"
import Image2 from "../../assets/img/OurProjectsPage/CompletedProjectsSection/Image2.jpg"
import Image3 from "../../assets/img/OurProjectsPage/CompletedProjectsSection/Image3.jpg"
import Image4 from "../../assets/img/OurProjectsPage/CompletedProjectsSection/Image4.jpg"
import Image5 from "../../assets/img/OurProjectsPage/CompletedProjectsSection/Image5.jpg"
import Image6 from "../../assets/img/OurProjectsPage/CompletedProjectsSection/Image6.jpg"
import { useRef } from 'react'
import { gsap } from 'gsap/gsap-core'
import { CardButtons } from '../../sub-components/CardButtons'

export const CompletedProjectsSection = () => {

  const cardSectionRef = useRef(null);
  

  const prev = () =>{
    const el = cardSectionRef.current;
    const elWidth = el.offsetWidth +20;
    gsap.to(cardSectionRef.current, {
      x:`+=${elWidth}`,
      ease:'power3',
    })
  }
  const next = () =>{
    const el = cardSectionRef.current;
    const elWidth = el.offsetWidth +20;
    gsap.to(cardSectionRef.current, {
      x:`-=${elWidth}`,
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
        text-3xl md:text-4xl'>Completed Projects</h2>

        <div

        className='overflow-hidden md:overflow-scroll w-full'

        style={{
          scrollbarWidth:'none'
        }}
        >

          <div ref={cardSectionRef}  className='
        flex flex-nowrap gap-5 md:grid grid-cols-3 md:gap-4'

        >

            <GridCard2 Image={Image1} mainText={'Pearl Abode'} subText={'Apartments'} />
            <GridCard2 Image={Image2} mainText={'Lotus Serene Villas'} subText={'Villa'} />
            <GridCard2 Image={Image3} mainText={'Garuda Gateway'} subText={'Commercial'} />
            <GridCard2 Image={Image4} mainText={'Garuda Gateway'} subText={'Residential'} />
            <GridCard2 Image={Image5} mainText={'MN Sri Padmavati Gardens'} subText={'Villa'} />
            <GridCard2 Image={Image6} mainText={'KBR Brindavanam'} subText={'Villa'} />

          </div>

        </div>

        <CardButtons prev={prev} next={next} />

        <div className='
        flex justify-center items-center
        mt-4
        '>
            <button className='text-[rgb(181,4,4)] font-medium'>-EXPLORE MORE-</button>
        </div>

    </div>
  )
}
