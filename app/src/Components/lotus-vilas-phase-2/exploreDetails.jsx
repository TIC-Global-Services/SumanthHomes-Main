import React from 'react'
import {
  ExploreDetailsSection,
  CARD_SIZES,
} from '../reusable/ExploreDetailsSection'

// Default Assets for Urbanscapes
import explore1 from '../../assets/img/OurProjectsSection/explore-6.png'
import explore2 from '../../assets/img/OurProjectsSection/explore-7.png'
import explore3 from '../../assets/img/OurProjectsSection/explore-8.png'
import explore4 from '../../assets/img/OurProjectsSection/explore-9.jpg'
import explore5 from '../../assets/img/OurProjectsSection/explore-10.png'
import explore6 from '../../assets/img/OurProjectsSection/explore-11.jpg'

/**
 * Default Urbanscapes cards configured with 3 proportionate sizes:
 * - 'large': ~49% width on desktop (~16:9 landscape)
 * - 'medium': ~30% width on desktop (~1:1 square)
 * - 'small': ~19% width on desktop (~9:14 portrait)
 */
export const exploreItems = [
  {
    id: 1,
    title: 'State-of-the-art Fitness Center',
    image: explore1,
    alt: 'Gym and Fitness Studio at Urbanscapes',
    size: 'medium',
  },
  {
    id: 2,
    title: 'Modern Living Spaces & Balcony Views',
    image: explore2,
    alt: 'Modern Living Spaces and Balcony Views',
    size: 'medium',
  },
  {
    id: 3,
    title: "Children's Play Arena & Daycare",
    image: explore3,
    alt: 'Children Play Area and Daycare',
    size: 'medium',
  },
  {
    id: 4,
    title: 'Landscaped Gardens & Outdoor Amenities',
    image: explore4,
    alt: 'Landscaped Gardens and Outdoor Amenities',
    size: 'large',
  },
  {
    id: 5,
    title: 'Luxury Architecture & Infrastructure',
    image: explore5,
    alt: 'Luxury Architecture and Community Infrastructure',
    size: 'medium',
  },
  {
    id: 6,
    title: 'Luxury Architecture & Infrastructure',
    image: explore6,
    alt: 'Luxury Architecture and Community Infrastructure',
    size: 'large',
  },
]

/**
 * Project ExploreDetails Component for Urbanscapes
 *
 * Configures and passes all project-specific props (title, description, button,
 * 3-size proportional image cards) to the reusable ExploreDetailsSection.
 * All props can be overridden by passing them into <ExploreDetails {...customProps} />.
 */
const ExploreDetails = (props) => {
  const title = 'Explore Every Detail Before You Move In'
  const description =
    'Discover the thoughtfully designed spaces, premium amenities, floor plans, and specifications that make Urbanscapes a landmark address in Tirupati. Download our brochure to get a complete overview of the project and experience elevated living crafted for modern families.'
  const buttonText = 'DOWNLOAD BROCHURE'
  const buttonColor = '#5A3A2E'
  const buttonTextColor = '#ffffff'

  return (
    <ExploreDetailsSection
      title={title}
      description={description}
      buttonText={buttonText}
      buttonColor={buttonColor}
      buttonTextColor={buttonTextColor}
      items={props.items || props.exploreItems || exploreItems}
      {...props}
    />
  )
}

export { exploreItems as defaultExploreItems, CARD_SIZES, ExploreDetailsSection }
export default ExploreDetails