import React from 'react'
import { CommunitySection, CommunitySectionProps } from '../reusable/CommunitySection'

const Community: React.FC<Partial<CommunitySectionProps>> = (props) => {
  return (
    <CommunitySection
      subtitle="Thoughtfully Designed"
      title="For Every Family."
      highlightedText='Garuda Gateway'
      highlightTextColor='#CC1518'
      description="offers thoughtfully crafted homes that blend modern design, everyday comfort, and a peaceful living environment. Surrounded by lush landscapes and premium amenities within a secure gated community, it's a place where families can enjoy privacy, convenience, and a lifestyle built to last."
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