import { useRef, useState, useEffect } from "react"

export const Footer = () => {

    const textMaskRef = useRef(null);
    const containerRef = useRef(null);
    const textSpanRef = useRef(null);
    const [fontSize, setFontSize] = useState(null);

    useEffect(() => {
        const fitText = () => {
            if (!containerRef.current || !textSpanRef.current) return;
            // On mobile screens (< 768px), keep standard responsive styles
            if (window.innerWidth < 768) {
                setFontSize(null);
                return;
            }
            const containerWidth = containerRef.current.clientWidth;
            if (containerWidth <= 0) return;

            // Measure the exact text width at a normalized 100px test size
            const el = textSpanRef.current;
            const prevSize = el.style.fontSize;
            el.style.fontSize = '100px';
            const measuredWidth = el.getBoundingClientRect().width;
            el.style.fontSize = prevSize;

            if (measuredWidth > 0) {
                // Calculate mathematically exact font size to match containerWidth precisely
                const targetSize = (containerWidth / measuredWidth) * 100;
                setFontSize(targetSize);
            }
        };

        fitText();

        if (document.fonts && document.fonts.ready) {
            document.fonts.ready.then(fitText);
        }

        window.addEventListener("resize", fitText);
        return () => window.removeEventListener("resize", fitText);
    }, []);

    const handleMouseEnter = (e) => {

        const el = textMaskRef.current;
        const rect = el.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        el.style.setProperty('--x', `${x}px`);
        el.style.setProperty('--y', `${y}px`);
        el.style.setProperty('--opacity', 1);
    }

    const handleMouseLeave = () => {

        const el = textMaskRef.current;

        el.style.setProperty('--opacity', 0);
    }


    return (
        <div>
            <div className='
    flex items-center justify-center md:block lg:min-h-[50dvh] bg-[#E1E1E1]
    px-[20px] md:px-[43px] lg:px-[57px] xl:px-[71px] 2xl:px-[80px] '>

                <div className='
        flex flex-col 
        pt-4 md:pt-10 
        pb-7 md:pb-7
        '>

                    <div 
                        ref={containerRef}
                        className='
            w-full 
            flex 
            relative 
            items-center
            justify-center
            text-center
            pb-8 
             '>
                        <h2
                            ref={textMaskRef}
                            onMouseMove={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            style={{
                                WebkitMaskImage: 'radial-gradient(circle at var(--x) var(--y), rgba(0,0,0, .9) 1%, transparent 10%)',
                                maskImage: 'radial-gradient(circle at var(--x) var(--y), rgba(0,0,0, 0.9) 1%, transparent 10%)',
                                opacity: 'var(--opacity, 0)',
                                fontSize: fontSize ? `${fontSize}px` : undefined,
                                lineHeight: fontSize ? 0.95 : undefined,
                            }}
                            className='
                    absolute
                    hover:cursor-default
                    top-0 left-0 w-full
                    flex-grow
                    bg-gradient-to-tr from-[#B40505] to-[#da4949]
                    bg-clip-text
                    text-center
                    font-extrabold text-transparent 
                    text-6xl
                    md:whitespace-nowrap
                    mt-4 md:mt-auto
                    '><span className="inline-block whitespace-nowrap">SUMANTH HOMES</span></h2>

                        <h2 
                            style={{
                                fontSize: fontSize ? `${fontSize}px` : undefined,
                                lineHeight: fontSize ? 0.95 : undefined,
                            }}
                            className='
                    w-full
                    text-center
                    font-extrabold text-[#A7A7A7] 
                    text-6xl
                    md:whitespace-nowrap
                    hover:cursor-default
                    mt-4 md:mt-0
                    '><span ref={textSpanRef} className="inline-block whitespace-nowrap">SUMANTH HOMES</span></h2>


                    </div>

                    <div className='
            w-full
            md:pt-14
            md:flex justify-between items-end
            md:order-first'>
                        <div className=' 
                    text-center
                    mb-6 
                    md:order-first'>

                            <h2 className='
                font-semibold text-[#B50404] 
                md:text-left
                text-sm md:text-sm xl:text-xl
                tracking-[2px] md:tracking-widest
                pb-2
                
                '>SUMANTH HOMES - INDIA</h2>
                            <p className='
                font-normal
                md:text-left
                text-sm md:text-base xl:text-lg'>Villa No.3, Lotus Serene Villas, <br />Near Autonagar, Renigunta Road, Tirupati</p>

                        </div>

                        <div className='text-right mb-6'>

                            <a href="tel:+91 8220 637727">
                                <p className='
                    hover:scale-110
                font-medium
                text-sm xl:text-lg md:text-base'>+91 8220 637727</p>
                            </a>

                            <a href="https:info@sumanthhomes.com" target="_blank">
                                <p className='
                    hover:scale-110
                font-medium 
                text-sm xl:text-lg md:text-base'>info@sumanthhomes.com</p>
                            </a>


                        </div>
                    </div>

                    <div className='
            md:flex items-center justify-between
            text-center
            
            pb-4
            '>

                        <div className='
                md:text-left
                pb-1'>

                            <a href="https://www.theinternetcompany.one/" target="_blank">
                                <p className='
                        
                        font-normal
                        text-xs md:text-lg'>Designed & Developed by TIC Global Services</p>
                            </a>


                        </div>

                        <div className='
                md:text-right
                '>

                            <p className='
                        font-normal 
                        text-xs md:text-lg'>@2025 Sumanth Homes. All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
