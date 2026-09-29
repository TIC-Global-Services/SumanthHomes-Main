import React from 'react'
import { FindYourDreamHomeSection } from '../reusable/FindYourDreamHomeSection'

const FindYour: React.FC = () => {
  return (
    <FindYourDreamHomeSection
      title="Find Your Dream Home"
      subtitlePrefix="at "
      subtitleHighlight="Urbanscapes"
      description="Experience elevated living where thoughtful design meets exceptional comfort. Discover a lifestyle built around convenience, community, and timeless quality."
      buttonText="Book a Site Visit Today"
      phoneNumbers={['+91 7680 999 899', '+91 8220 637 727']}
      image="/brindavan/dream-home.jpg"
      imageAlt="Find Your Dream Home at Urbanscapes"
      accentColor="#CCA062"
    />
  )
}

export default FindYour