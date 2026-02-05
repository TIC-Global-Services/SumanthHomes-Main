import { DefaultHeroSection } from '../Components/DefaultHeroSection'
import { AboutSumanthHomesSection} from '../Components/AboutPageComponenets/AboutSumanthHomesSection'
import { CurrentStatsSection } from '../Components/AboutPageComponenets/CurrentStatsSection'
import { VisionSection } from "../Components/AboutPageComponenets/VisionSection"
import { MissionSection } from "../Components/AboutPageComponenets/MissionSection"
import heroImage from "../assets/img/AboutSection/aboutHeroImage.png"
import { NavBar } from '../Components/NavBar'
import { Footer } from '../Components/Footer'
import ContainerLayout from '../Layout/ContainerLayout'
import { ScrollToTop } from "../utils/ScrollToTop"
import { ParallaxProvider } from 'react-scroll-parallax';
import { lazy, Suspense } from 'react'
import { useState, useEffect } from 'react'


const SHSTeamSection = lazy(()=>import('../Components/AboutPageComponenets/SHSTeamSection'))
const SHValues = lazy(()=>import('../Components/AboutPageComponenets/SHValues'))
const ConsultationSection = lazy(()=>import('../Components/AboutPageComponenets/ConsultationSection'));

const AboutPage = () => {

  const [showLate, setShowLate] = useState(false);

  useEffect(()=>{
    setShowLate(true);
  },[])

  return (
    <div className='overflow-x-hidden'>
        <ParallaxProvider>
        <ScrollToTop/>
        <NavBar/>
        <DefaultHeroSection bgImage={heroImage} mainText={"About SHs"} subText={"LET'S SEE WHO WE ARE"}/>
        <ContainerLayout>
            <AboutSumanthHomesSection/>
            <CurrentStatsSection/>
            <VisionSection/>
            <MissionSection/>
            <Suspense fallback={<div>Loading...</div>}>
              {showLate && <SHSTeamSection/>}
            </Suspense>
        </ContainerLayout>
        <div className='pl-[20px] md:pl-[43px] lg:pl-[57px] xl:pl-[71px] 2xl:pl-[80px] '>
          <Suspense fallback={<div>Loading...</div>}>
            {showLate && <SHValues />}
          </Suspense>
        </div>
        <div className='w-full md:px-[43px] lg:px-[57px] xl:px-[71px] 2xl:px-[80px] md:py-10'>
          <Suspense fallback={<div>Loading...</div>}>
            {showLate && <ConsultationSection />}
          </Suspense>
        </div>
        <Footer/>
        </ParallaxProvider>
    </div>
  )
}

export default AboutPage;