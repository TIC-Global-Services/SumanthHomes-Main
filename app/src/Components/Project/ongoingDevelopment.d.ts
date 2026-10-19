import React from 'react'

export interface DevelopmentItem {
  id?: string | number
  title?: string
  name?: string
  bgimage?: string
  image?: string
  logo?: string | null
  logotitle?: string
  link?: string
  href?: string
}

export interface OngoingDevelopmentProps {
  id?: string
  title?: string
  items?: DevelopmentItem[]
  developments?: DevelopmentItem[]
  className?: string
  showArrows?: boolean
  scrollStep?: number
  bgPattern?: boolean | string
}

export declare const defaultDevelopments: DevelopmentItem[]

declare const OngoingDevelopment: React.FC<OngoingDevelopmentProps>

export default OngoingDevelopment
