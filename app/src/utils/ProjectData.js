import Prj1BgImage from "../assets/img/OurProjectsSection/arialDayView.jpg"
import Prj2BgImage from "../assets/img/OurProjectsPage/elevation8k.jpg"

export const ProjectData = () => {

    const data = {
        proj1:{
            bgImage:Prj1BgImage,
            miniHeader:'Premium Living Spaces',
            mainHeader:'LOTUS SERENE VILLAS',
            description:'Expanding our legacy, Lotus Serene Phase 2 offers 31 contemporary villas with a clubhouse, green spaces, and lifestyle comforts in Tirupati.'
        },
        proj2:{
            bgImage:Prj2BgImage,
            miniHeader:'A work in motion',
            mainHeader:'URBANSCAPES',
            description:'Urbanscapes is a contemporary Hi- Rise Building in Tirupati. We aim to building a beautiful 2 & 3 BHK gated community with fully loaded amenities.'
        },
    }

    return data;
}
