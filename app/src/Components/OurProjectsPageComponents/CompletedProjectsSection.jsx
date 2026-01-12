import { GridCard2 } from './sub-componenets/GridCard2'
import Image1 from "../../assets/img/OurProjectsPage/CompletedProjectsSection/Image1.jpg"
import Image2 from "../../assets/img/OurProjectsPage/CompletedProjectsSection/Image2.jpg"
import Image3 from "../../assets/img/OurProjectsPage/CompletedProjectsSection/Image3.jpg"
import Image4 from "../../assets/img/OurProjectsPage/CompletedProjectsSection/Image4.jpg"
import Image5 from "../../assets/img/OurProjectsPage/CompletedProjectsSection/Image5.jpg"
import Image6 from "../../assets/img/OurProjectsPage/CompletedProjectsSection/Image6.jpg"

export const CompletedProjectsSection = () => {
  return (
    <div className='
    mt-8
     xl:mb-28'>

        <h2 className='
        text-center
        mb-4 xl:mb-12
        font-semibold
        text-2xl md:text-4xl'>Completed Projects</h2>

        <div className='
        overflow-scroll
        flex flex-nowrap md:grid grid-cols-3 md:gap-4'
        style={{
          scrollbarWidth:'none'
        }}>

            <GridCard2 Image={Image1} mainText={'Pearl Abode'} subText={'Apartments'} />
            <GridCard2 Image={Image2} mainText={'Lotus Serene Villas'} subText={'Villa'} />
            <GridCard2 Image={Image3} mainText={'Garuda Gateway'} subText={'Commercial'} />
            <GridCard2 Image={Image4} mainText={'Garuda Gateway'} subText={'Residential'} />
            <GridCard2 Image={Image5} mainText={'MN Sri Padmavati Gardens'} subText={'Villa'} />
            <GridCard2 Image={Image6} mainText={'KBR Brindavanam'} subText={'Villa'} />

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
