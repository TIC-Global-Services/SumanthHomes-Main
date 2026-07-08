import { DefaultHeroSection } from "../Components/DefaultHeroSection"
import ContainerLayout from "../Layout/ContainerLayout"
import bgImage from "../assets/img/ContactPage/contactBgImage.png"
import { KnowUsSection } from "../Components/ContactPageComponents/KnowUsSection"
import { NavBar } from '../Components/NavBar'
import { Footer } from '../Components/Footer'
import { MapSection } from "../Components/ContactPageComponents/MapSection"
import { ScrollToTop } from "../utils/ScrollToTop"
import { ParallaxProvider } from "react-scroll-parallax"
import { Hero } from "../Components/ContactPageComponents/Hero"


const ContactPage = () => {


  return (
    <div className="overflow-hidden">
      <ParallaxProvider>
        <ScrollToTop/>
        <Hero bgImage={bgImage} mainText={'Contact us'} subText={"LET'S WORK TOGETHER"} white={true} />
        {/* <DefaultHeroSection bgImage={bgImage} mainText={'Contact us'} subText={"LET'S WORK TOGETHER"} white={true} /> */}
        <ContainerLayout>
            <KnowUsSection />
            <MapSection />
        </ContainerLayout>
        </ParallaxProvider>
    </div>
  )
}

export default ContactPage;