import React from 'react'
import banner from '../../assets/img/OurProjectsSection/truely_deserve.jpg'
import BlurText from '../../utils/BlurText'

const Upgrade = () => {
    const data = [
        { name: "Site Area", value: "1.65 Acres" },
        { name: "No.Of Units", value: "170" },
        { name: "Floors", value: "08" },
        { name: "Type Of Flats", value: "2BHK & 3BHK" },
        { name: "Facings", value: "East, West & North" },
        { name: "Structure", value: "Cellar + Stilt + 8 Floors" },
    ]
    return (
        <section className="py-16 w-full flex flex-col items-center">
            {/* Top Text Section */}
            <div className="text-center sm:max-w-3xl lg:max-w-5xl px-4 mb-10">
                <BlurText 
                    text="An Upgrade in Life You Truly Deserve"
                    delay={30}
                    animateBy="words"
                    direction="bottom" 
                    className="text-3xl md:text-[38px] font-semibold mb-4 text-[#000000]" />
                <BlurText 
                    text="A premium residential community by Sumanth Homes, thoughtfully designed to blend contemporary architecture with timeless Indian values. Located in the heart of Tirupati, Urbanscapes offers spacious 2 & 3 BHK residences with exceptional connectivity, modern amenities, and 100% Vaastu-compliant planning."
                    delay={30}
                    animateBy="words"
                    direction="bottom" 
                    className="text-[#929292]" />
            </div>

            {/* Full Width Image with Bottom Bar */}
            <div className="relative w-[90vw] h-[50vh] md:h-[70vh] bg-gray-300">
                <img
                    src={banner}
                    alt="Building Upgrade"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>

                {/* Bottom Labels Bar */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[85%]">
                    <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                        {data.map((item, index) => (
                            <div
c                                key={index}
                                className="bg-[#FFFFFF4D] backdrop-blur-md border-r border-black/15 last:border-r-0 px-4 py-2 text-white rounded-lg"
                            >
                                <p className="text-xs lg:text-lg tracking-tight font-semibold">{item.name}</p>
                                <p className="text-xs lg:text-sm font-light mt-1 opacity-80">{item.value}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Upgrade