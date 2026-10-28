import Prj1BgImage from "../../assets/img/OurProjectsSection/arialDayView.jpg"
import Prj2BgImage from "../../assets/img/OurProjectsPage/elevation8k.jpg"
import Logo1 from "../../assets/img/OurProjectsSection/lotus_serene_villas.png"
import Logo2Brown from "../../assets/img/OurProjectsSection/urbanscapes_brown_logo.png"
import { OngoingProjectCard } from "./sub-componenets/OngoingProjectCard"
import '../../assets/styles/titleStyle.css';
import { motion } from "motion/react"
import BlurText from "../../utils/BlurText"
import { exploreItems as lotusExploreItems } from "../lotus-vilas-phase-2/exploreDetails"
import { exploreItems as urbanscapesExploreItems } from "../Project/exploreDetails"

// Respective image lists for each project card (Hero image + Explore detail images)
const lotusImages = [
  Prj1BgImage,
  ...lotusExploreItems.map((item) => item.image).filter(Boolean),
];

const urbanscapesImages = [
  Prj2BgImage,
  ...urbanscapesExploreItems.map((item) => item.image).filter(Boolean),
];

const ongoingProjects = [
  {
    id: 'villa1',
    badge: 'RECENT PROJECTS',
    theme: 'black', // 'black' | 'dark' | 'white' | 'light'
    bgImage: Prj1BgImage,
    images: lotusImages,
    miniHeader: 'Premium Living Spaces',
    mainHeader: 'LOTUS SERENE VILLAS',
    description: 'Expanding our legacy, Lotus Serene Phase 2 offers 31 contemporary villas with a clubhouse, green spaces, and lifestyle comforts in Tirupati.',
    logoImage: '/lotus-serena-phase-2-logo.png',
    link: '/lotus-villas-phase-2',
    buttonText: 'KNOW MORE',
  },
  {
    id: 'villa2',
    badge: 'RECENT PROJECTS',
    theme: 'white', // 'black' | 'dark' | 'white' | 'light'
    bgImage: Prj2BgImage,
    images: urbanscapesImages,
    miniHeader: 'A work in motion',
    mainHeader: 'URBANSCAPES',
    description: 'Urbanscapes is a contemporary Hi - Rise Building in Tirupati. We aim to building a beautiful 2 & 3 BHK gated community with fully loaded amenities.',
    logoImage: Logo2Brown,
    link: '/urbanscapes',
    buttonText: 'KNOW MORE',
  },
];

export const OurProjectsSection = () => {
  return (
    <div className="w-full mt-[120px] md:mt-[120px]">
      <motion.div className="mb-[30px] md:mb-[60px]">
        <BlurText
          text="DREAMS IN CONCRETE"
          delay={120}
          animateBy="words"
          direction="bottom"
          className="text-center mb-2 text-[#B50404] flex justify-center items-center font-semibold text-[10px] md:text-xs tracking-tight md:tracking-wider"
        />

        <BlurText
          text=" Ongoing Projects"
          delay={120}
          animateBy="words"
          direction="bottom"
          className="flex justify-center items-center text-center text-2xl md:text-[38px] font-manrope font-bold"
        />
      </motion.div>

      <div className="flex flex-col gap-10 md:gap-16 w-full">
        {ongoingProjects.map((project) => (
          <OngoingProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  )
}
