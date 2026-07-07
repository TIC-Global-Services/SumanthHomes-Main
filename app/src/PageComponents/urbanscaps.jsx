import React from 'react'
import Hero from '../Components/Project/Hero'
import Crafting from '../Components/Project/crafting'
import OngoingDevelopment from '../Components/Project/ongoingDevelopment'
import Upgrade from '../Components/Project/upgrade'
import ExploreDetails from '../Components/Project/exploreDetails'
import Amenities from '../Components/Project/amenities'
import Video from '../Components/Project/video'
import { ScrollToTop } from "../utils/ScrollToTop"
import { ParallaxProvider } from 'react-scroll-parallax'
import Urbanscapes from '../Components/Project/urbenscaps'

const urbanscaps = () => {
    return (
        <div>
            <ParallaxProvider>
                <ScrollToTop />
                <Hero />
                <Crafting />
                <Upgrade />
                <ExploreDetails />
                <Amenities />
                <Video />
                <OngoingDevelopment />
                <Urbanscapes />
            </ParallaxProvider>
        </div>
    )
}

export default urbanscaps