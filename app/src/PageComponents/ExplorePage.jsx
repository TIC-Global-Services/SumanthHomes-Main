import { NavBar } from '../Components/NavBar'
import { Footer } from '../Components/Footer'
import ContainerLayout from '../Layout/ContainerLayout'
import { ScrollToTop } from "../utils/ScrollToTop"
import { DefaultHeroSection } from "../Components/DefaultHeroSection"
import { DefaultOurProjects } from '../Components/DefaultOurProjectsSection'
import { CompletedProjectsSection } from "../Components/OurProjectsPageComponents/CompletedProjectsSection"
import { ExploreMoreSection } from "../Components/OurProjectsPageComponents/ExploreMoreSection"
import { ProjectDescription } from '../Components/OurProjectsPageComponents/sub-componenets/ProjectDescription'
import { FloorPlan } from '../Components/OurProjectsPageComponents/sub-componenets/FloorPlan'
import { Amenities } from '../Components/OurProjectsPageComponents/sub-componenets/Amenities'
import { Location } from '../Components/OurProjectsPageComponents/sub-componenets/Location'
import image1 from "../assets/img/OurProjectsSection/FloorPlan/groundFloorImage.png"
import image2 from "../assets/img/OurProjectsSection/FloorPlan/firstFloorImage.png"
import bgImage from "../assets/img/OurProjectsPage/ourProjectsBgImage.png"
import Prj1BgImage from "../assets/img/OurProjectsSection/arialDayView.jpg"
import { useParams } from 'react-router-dom'
import { ProjectData } from '../utils/ProjectData'
import { BackToBtn } from '../Components/OurProjectsPageComponents/sub-componenets/backToBtn'

export const ExplorePage = () => {
    
    const {id} = useParams();

    const data = ProjectData()[`proj${id}`];

    const groundData = {
            img1 :{
                image:image1,
                alt:'ground-image-left'
            },
            img2 :{
                image:image1,
                alt:'ground-image-right'
            },
        }
    
        const firstData = {
            img1 :{
                image:image2,
                alt:'first-image-left'
            },
            img2 :{
                image:image2,
                alt:'first-image-right'
            },
        }

  return (
    <div>
        
        <ScrollToTop/>
        <NavBar/>
        <DefaultHeroSection bgImage={bgImage} mainText={data.mainHeader} subText={data.miniHeader} />
        <ContainerLayout>
            <DefaultOurProjects bgImage={data.bgImage} miniHeader={data.miniHeader} mainHeader={data.mainHeader} description={data.description} />
            <ProjectDescription/>
            <FloorPlan title={'Ground floor plan'} img1={groundData.img1} img2={groundData.img2} />
            <FloorPlan title={'First floor plan'} img1={firstData.img1} img2={firstData.img2} />
            <Amenities/>
            <Location/>
            <BackToBtn/>
            <CompletedProjectsSection/>
            <ExploreMoreSection/>
        </ContainerLayout>
        <Footer/>

    </div>
  )
}
