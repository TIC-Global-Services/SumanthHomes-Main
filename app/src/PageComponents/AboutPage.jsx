import { DefaultHeroSection } from '../Components/DefaultHeroSection'
import { AboutSumanthHomesSection} from '../Components/AboutPageComponenets/AboutSumanthHomesSection'
import { CurrentStatsSection } from '../Components/AboutPageComponenets/CurrentStatsSection'
import { VisionSection } from "../Components/AboutPageComponenets/VisionSection"
import { MissionSection } from "../Components/AboutPageComponenets/MissionSection"
import { SHSTeamSection } from "../Components/AboutPageComponenets/SHSTeamSection"
import { SHValues } from "../Components/AboutPageComponenets/SHValues"
import { ConsultationSection } from "../Components/AboutPageComponenets/ConsultationSection"
import heroImage from "../assets/img/AboutSection/aboutHeroImage.png"
import { NavBar } from '../Components/NavBar'
import { Footer } from '../Components/Footer'
import ContainerLayout from '../Layout/ContainerLayout'
import { ScrollToTop } from "../utils/ScrollToTop"

export const AboutPage = () => {


  return (
    <div className='overflow-x-hidden'>
        <ScrollToTop/>
        <NavBar/>
        <DefaultHeroSection bgImage={heroImage} mainText={"About SHs"} subText={"LET'S SEE WHO WE ARE"}/>
        <ContainerLayout>
            <AboutSumanthHomesSection/>
            <CurrentStatsSection/>
            <VisionSection/>
            <MissionSection/>
            <SHSTeamSection/>
            <SHValues />
            <ConsultationSection />
        </ContainerLayout>
        <Footer/>
    </div>
  )
}
