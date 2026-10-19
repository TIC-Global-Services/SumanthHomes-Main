import React from 'react'
import { CommunitySection, CommunitySectionProps } from '../reusable/CommunitySection'

const Community: React.FC<Partial<CommunitySectionProps>> = (props) => {
  return (
    <CommunitySection
      subtitle="Thoughtfully Designed"
      highlightTextColor='#CC1518'
      highlightedText='MN Sri Padmavati Gradens '
      title="A Community Designed Around Modern Living"
      description="Lotus Serene Villas – Phase I is an exclusive gated villa community offering elegantly designed homes, expansive living spaces, and world-class amenities. Surrounded by serene landscapes, it delivers a lifestyle that blends sophistication, comfort, and everyday convenience."
      media={[
        {
          title: 'Lotus Serene Villas - Modern Living Villa Elevation',
          src: '/loutus-phase-1/lotus-community-1.jpg',
        },
        {
          title: 'Lotus Serene Villas - Premium Gated Community Living',
          src: '/loutus-phase-1/lotus-community-2.jpg',
        },
        {
          title: 'Lotus Serene Villas - Gated Avenue and Villas',
          src: '/loutus-phase-1/lotus-community-3.jpg',
        },
      ]}
      {...props}
    />
  )
}

export default Community