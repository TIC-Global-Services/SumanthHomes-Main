import React from 'react'
import bannerImg from '../../assets/img/OurProjectsSection/truely_deserve.jpg'
import BlurText from '../../utils/BlurText'

const Upgrade = ({
    className = '',
    image = '',
    imageAlt = 'Urbanscapes residential community',
}) => {
    const title = 'An Upgrade in Life You \nTruly Deserve'

    const description =
        'A premium residential community by Sumanth Homes, thoughtfully designed to blend contemporary architecture with timeless Indian values. Located in the heart of Tirupati, Urbanscapes offers spacious 2 & 3 BHK residences with exceptional connectivity, modern amenities, and 100% Vaastu-compliant planning.'

    const data = [
        { title: 'Site Area', description: '1.65 Acres' },
        { title: 'No. Of Units', description: '170' },
        { title: 'Floors', description: '08' },
        { title: 'Type Of Flats', description: '2BHK & 3BHK' },
        { title: 'Facings', description: 'East, West & North' },
        { title: 'Structure', description: 'Cellar + Stilt + 8 Floors' },
    ]

    return (
        <section
            className={`py-16 w-full flex flex-col items-center ${className}`}
        >
            <div className="w-full sm:max-w-3xl lg:max-w-5xl px-4 mb-10 text-left md:text-center">
                {title && (
                    <BlurText
                        text={title}
                        delay={30}
                        animateBy="words"
                        direction="bottom"
                        className="text-2xl md:text-[38px] flex justify-start md:justify-center font-semibold mb-4 text-black"
                    />
                )}

                {description && (
                    <BlurText
                        text={description}
                        delay={30}
                        animateBy="words"
                        direction="bottom"
                        className="text-[#929292] flex justify-start md:justify-center text-sm md:text-lg"
                    />
                )}
            </div>

            <div className="relative w-[90vw] h-[50vh] md:h-[70vh] bg-gray-300 overflow-hidden shadow-md">
                <img
                    src={bannerImg}
                    alt={imageAlt}
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/20" />

                <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 w-[92%] sm:w-[85%]">
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">
                        {data.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white/30 backdrop-blur-md border-r border-black/15 last:border-r-0 px-3 sm:px-4 py-2 sm:py-2.5 text-white rounded-lg shadow-sm"
                            >
                                <p className="text-xs sm:text-sm lg:text-lg tracking-tight font-semibold truncate">
                                    {item.title}
                                </p>

                                <p className="text-[11px] sm:text-xs lg:text-sm font-light mt-1 opacity-90 truncate">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Upgrade