import { useState, useRef } from "react"
import gsap from "gsap";
import avatar1 from "../../assets/img/testimonials/avatar1.jpg";
import avatar2 from "../../assets/img/testimonials/avatar2.jpg";
import avatar3 from "../../assets/img/testimonials/avatar3.jpg";

const Testimonial = () => {

    const data = [
        { 
            text: "Absolutely amazing theme, flexible and awesome design with possibilities. It's so very easy to use and to customize. Simply the great designs and best theme", 
            author: "Jonson donner",
            avatar: avatar1 
        },
        { 
            text: "Working with Sumanth Homes was an incredible experience. Their attention to detail, quality of construction, and seamless execution exceeded our expectations.", 
            author: "Sarah Jenkins",
            avatar: avatar2 
        },
        { 
            text: "Exceptional architecture and sustainable modern design. Every space is crafted with elegance, comfort, and uncompromising luxury in mind.", 
            author: "David Miller",
            avatar: avatar3 
        }
    ];

    const [index, setIndex] = useState(0);
    const cardRef = useRef(null);
    const isAnimating = useRef(false);
    const maxIndex = data.length;

    const next = () => {
        if (isAnimating.current) return;
        isAnimating.current = true;
        const card = cardRef.current;

        gsap.to(card, {
            opacity: 0,
            y: -10,
            duration: 0.3,
            ease: "power2.inOut",
            onComplete: () => {
                setIndex(prev => (prev + 1) % data.length);
                gsap.fromTo(
                    card,
                    { opacity: 0, y: 10 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.35,
                        ease: "power2.out",
                        onComplete: () => {
                            isAnimating.current = false;
                        }
                    }
                );
            }
        });
    };

    const prev = () => {
        if (isAnimating.current) return;
        isAnimating.current = true;
        const card = cardRef.current;

        gsap.to(card, {
            opacity: 0,
            y: 10,
            duration: 0.3,
            ease: "power2.inOut",
            onComplete: () => {
                setIndex(prev => (prev - 1 + data.length) % data.length);
                gsap.fromTo(
                    card,
                    { opacity: 0, y: -10 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.35,
                        ease: "power2.out",
                        onComplete: () => {
                            isAnimating.current = false;
                        }
                    }
                );
            }
        });
    };

    return (
        <div className='w-full xl:w-[95%] mx-auto mt-6 xl:mt-32 md:mt-16 select-none'>

            {/* Testimonial Content & Side Arrows */}
            <div className='flex items-center justify-between gap-3 sm:gap-6 md:gap-10 xl:gap-14'>

                {/* Left Arrow Button */}
                <button 
                    onClick={prev} 
                    aria-label="Previous testimonial"
                    className='flex-shrink-0 p-2 sm:p-3 rounded-full hover:bg-neutral-100 hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer group'
                >
                    <svg className='w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-transform group-hover:-translate-x-0.5' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g transform="translate(24,0) scale(-1,1)">
                            <path 
                                fillRule="evenodd" 
                                clipRule="evenodd"
                                d="M1.5 12C1.5 11.8011 1.57902 11.6103 1.71967 11.4696C1.86032 11.329 2.05109 11.25 2.25 11.25H19.9395L15.219 6.53097C15.0782 6.39014 14.9991 6.19913 14.9991 5.99997C14.9991 5.80081 15.0782 5.6098 15.219 5.46897C15.3598 5.32814 15.5508 5.24902 15.75 5.24902C15.9492 5.24902 16.1402 5.32814 16.281 5.46897L22.281 11.469C22.3508 11.5386 22.4063 11.6214 22.4441 11.7125C22.4819 11.8036 22.5013 11.9013 22.5013 12C22.5013 12.0986 22.4819 12.1963 22.4441 12.2874C22.4063 12.3785 22.3508 12.4613 22.281 12.531L16.281 18.531C16.1402 18.6718 15.9492 18.7509 15.75 18.7509C15.5508 18.7509 15.3598 18.6718 15.219 18.531C15.0782 18.3901 14.9991 18.1991 14.9991 18C14.9991 17.8008 15.0782 17.6098 15.219 17.469L19.9395 12.75H2.25C2.05109 12.75 1.86032 12.671 1.71967 12.5303C1.57902 12.3896 1.5 12.1989 1.5 12Z"
                                fill="#B50404" 
                            />
                        </g>
                    </svg>
                </button>

                {/* Central Quote & Author Info */}
                <div ref={cardRef} className='flex-1 flex flex-col items-center justify-center text-center px-1 sm:px-4 md:px-8 max-w-4xl mx-auto'>
                    
                    {/* Testimonial Quote */}
                    <p className='
                        font-manrope font-extralight
                        tracking-[-0.3px] md:tracking-[-0.5px]
                        leading-relaxed sm:leading-relaxed md:leading-[1.5]
                        text-[#737373]
                        text-sm sm:text-lg md:text-2xl xl:text-[26px]
                    '>
                        {data[index].text}
                    </p>

                    {/* Founder / Author info with avatar like icon */}
                    <div className='flex items-center justify-center gap-2 sm:gap-2.5 mt-4 sm:mt-6 md:mt-7'>
                        <div className='w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full overflow-hidden flex-shrink-0 ring-1 ring-black/10 shadow-sm bg-neutral-100 flex items-center justify-center'>
                            {data[index].avatar ? (
                                <img 
                                    src={data[index].avatar} 
                                    alt={data[index].author} 
                                    className='w-full h-full object-cover rounded-full'
                                />
                            ) : (
                                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-neutral-400" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                                </svg>
                            )}
                        </div>
                        <span className='font-manrope font-normal text-xs sm:text-sm md:text-base text-[#191919] tracking-tight'>
                            {data[index].author}
                        </span>
                    </div>

                </div>

                {/* Right Arrow Button */}
                <button 
                    onClick={next} 
                    aria-label="Next testimonial"
                    className='flex-shrink-0 p-2 sm:p-3 rounded-full hover:bg-neutral-100 hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer group'
                >
                    <svg className='w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-transform group-hover:translate-x-0.5' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path 
                            fillRule="evenodd" 
                            clipRule="evenodd"
                            d="M1.5 12C1.5 11.8011 1.57902 11.6103 1.71967 11.4696C1.86032 11.329 2.05109 11.25 2.25 11.25H19.9395L15.219 6.53097C15.0782 6.39014 14.9991 6.19913 14.9991 5.99997C14.9991 5.80081 15.0782 5.6098 15.219 5.46897C15.3598 5.32814 15.5508 5.24902 15.75 5.24902C15.9492 5.24902 16.1402 5.32814 16.281 5.46897L22.281 11.469C22.3508 11.5386 22.4063 11.6214 22.4441 11.7125C22.4819 11.8036 22.5013 11.9013 22.5013 12C22.5013 12.0986 22.4819 12.1963 22.4441 12.2874C22.4063 12.3785 22.3508 12.4613 22.281 12.531L16.281 18.531C16.1402 18.6718 15.9492 18.7509 15.75 18.7509C15.5508 18.7509 15.3598 18.6718 15.219 18.531C15.0782 18.3901 14.9991 18.1991 14.9991 18C14.9991 17.8008 15.0782 17.6098 15.219 17.469L19.9395 12.75H2.25C2.05109 12.75 1.86032 12.671 1.71967 12.5303C1.57902 12.3896 1.5 12.1989 1.5 12Z"
                            fill="#B50404" 
                        />
                    </svg>
                </button>

            </div>

            {/* Pagination Progress Indicator */}
            <div className='flex items-center justify-center gap-2.5 sm:gap-3 mt-6 sm:mt-8 md:mt-10'>
                <p className='font-manrope text-xs sm:text-sm font-semibold text-[#737373] min-w-[20px] text-right'>
                    0{index + 1}
                </p>

                <div className='w-36 sm:w-48 md:w-56 h-[1.5px] bg-[#E5E5E5] relative overflow-hidden rounded-full'>
                    <div 
                        className='h-full bg-[#B50404] transition-all duration-300 ease-out'
                        style={{ width: `${((index + 1) / maxIndex) * 100}%` }}
                    />
                </div>

                <p className='font-manrope text-xs sm:text-sm font-semibold text-[#737373] min-w-[20px]'>
                    0{maxIndex}
                </p>
            </div>

        </div>
    )
}

export default Testimonial