import React from 'react'
import UpgradeSection from '../reusable/UpgradeSection'

const Upgrade = (props) => {
    const title = "An Upgrade in Life You Truly Deserve"
    const description = "A premium residential community by Sumanth Homes, thoughtfully designed to blend contemporary architecture with timeless Indian values. Located in the heart of Tirupati, Urbanscapes offers spacious 2 & 3 BHK residences with exceptional connectivity, modern amenities, and 100% Vaastu-compliant planning."

    const data = [
        { title: "Site Area", description: "1.65 Acres" },
        { title: "No.Of Units", description: "170" },
        { title: "Floors", description: "08" },
        { title: "Type Of Flats", description: "2BHK & 3BHK" },
        { title: "Facings", description: "East, West & North" },
        { title: "Structure", description: "Cellar + Stilt + 8 Floors" },
    ]

    return (
        <UpgradeSection
            title={title}
            description={description}
            data={data}
            {...props}
        />
    )
}

export default Upgrade