import React from 'react'
import {
  OngoingDevelopmentsSection,
  OngoingDevelopmentItem
} from '../reusable/OngoingDevelopmentsSection'

const ongoingItems: OngoingDevelopmentItem[] = [
  {
    id: 1,
    title: 'Urban Scapes',
    tag: 'Apartments',
    image: '/pearlaode/urban-scapes.jpg',
    alt: 'Urban Scapes - Premium Apartments by Sumanth Homes',
    link: '/urbanscapes'
  },
  {
    id: 2,
    title: 'Lotus Serene Villas',
    tag: 'Villa',
    image: '/pearlaode/lotus-serena.jpg',
    alt: 'Lotus Serene Villas - Phase II Luxury Gated Villa Layout',
    link: '/lotus-serene-villas'
  }
]

const Ongoing: React.FC = () => {
  return <OngoingDevelopmentsSection items={ongoingItems} />
}

export default Ongoing