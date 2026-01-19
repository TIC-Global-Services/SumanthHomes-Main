import { useRef, useEffect } from "react"
import { ScrollTrigger, gsap } from "gsap/all"
import { TextSlideInAnimation } from "../utils/TextSlideInAnimation";

gsap.registerPlugin(ScrollTrigger);

export const DefaultOurProjects = ({bgImage, miniHeader , mainHeader, description }) => {

    const titleRef = useRef(null);
    const contentRef = useRef(null);
    const containerRef = useRef(null);

    const windowTitleRef = useRef(null);
    const windowContentRef = useRef(null);
    const windowContainerRef = useRef(null);

    // useEffect(()=>{
    //     if(window.outerWidth>600){
    //         const ctx = gsap.context(()=>{
    //             TextSlideInAnimation(windowTitleRef, windowContentRef, windowContainerRef)
    //         })

    //         return(()=>ctx.revert())
    //     }
        
    //     const ctx = gsap.context(()=>{
    //         TextSlideInAnimation(titleRef, contentRef, containerRef);
    //     })

    //     return(()=>ctx.revert())
        
    // },[])

  return (
    <div className='mb-4 xl:mb-10'>

        

        <div className='
        md:flex 
        relative
        aspect-[3/4] md:aspect-[9/16] xl:aspect-[3/4]
        md:h-[390px] xl:h-[600px]
        w-full 
        
       
        ' style={{
            backgroundImage:`url(${bgImage})`,
            backgroundSize:'cover',
            backgroundRepeat:'no-repeat'
        }}>
            
            <div className='
            absolute
            flex justify-center items-center
            bg-[#B50404]
            w-10 md:w-10 xl:w-10
            h-48 md:h-32 xl:h-52
            
           
            '>

                <h4 className='
                flex-shrink-0
                text-white
                font-manrope font-bold
                rotate-[270deg]
                md:text-xs xl:text-xs
                 
               '>RECENT PROJECTS</h4>

            </div>

            

            <div className='
            hidden md:absolute bottom-0 right-0
            md:flex gap-0 items-end
            w-full md:w-[50%] xl:w-full
            md:left-[20rem] xl:left-[52rem] 
            md:ml-auto
            '>
                
                <div className='ml-auto'>

                <button className='
                hidden md:flex justify-center items-center
                bg-[#191919] box-border
                w-7 md:w-10 xl:w-16
                h-7 md:h-10 xl:h-16
                mb-1 
                
                '><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.0008 0.625C15.0008 0.45924 14.9349 0.300269 14.8177 0.183058C14.7005 0.0658481 14.5415 0 14.3758 0H6.87579C6.71003 0 6.55106 0.0658481 6.43385 0.183058C6.31664 0.300269 6.25079 0.45924 6.25079 0.625C6.25079 0.79076 6.31664 0.949731 6.43385 1.06694C6.55106 1.18415 6.71003 1.25 6.87579 1.25H12.867L0.183289 13.9325C0.125179 13.9906 0.0790843 14.0596 0.0476354 14.1355C0.0161866 14.2114 0 14.2928 0 14.375C0 14.4572 0.0161866 14.5386 0.0476354 14.6145C0.0790843 14.6904 0.125179 14.7594 0.183289 14.8175C0.241399 14.8756 0.310386 14.9217 0.38631 14.9532C0.462234 14.9846 0.54361 15.0008 0.625789 15.0008C0.707969 15.0008 0.789344 14.9846 0.865269 14.9532C0.941193 14.9217 1.01018 14.8756 1.06829 14.8175L13.7508 2.13375V8.125C13.7508 8.29076 13.8166 8.44973 13.9338 8.56694C14.0511 8.68415 14.21 8.75 14.3758 8.75C14.5415 8.75 14.7005 8.68415 14.8177 8.56694C14.9349 8.44973 15.0008 8.29076 15.0008 8.125V0.625Z" fill="white"/></svg>
                </button>

                <button className='
                hidden md:flex justify-center items-center
                bg-[#191919] box-border
                w-7 md:w-10 xl:w-16
                h-7 md:h-10 xl:h-16  

                '><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 16.8748C2.5 17.0406 2.56585 17.1995 2.68306 17.3168C2.80027 17.434 2.95924 17.4998 3.125 17.4998H10.625C10.7908 17.4998 10.9497 17.434 11.0669 17.3168C11.1842 17.1995 11.25 17.0406 11.25 16.8748C11.25 16.7091 11.1842 16.5501 11.0669 16.4329C10.9497 16.3157 10.7908 16.2498 10.625 16.2498H4.63375L17.3175 3.56731C17.4349 3.44995 17.5008 3.29078 17.5008 3.12481C17.5008 2.95884 17.4349 2.79967 17.3175 2.68231C17.2001 2.56495 17.041 2.49902 16.875 2.49902C16.709 2.49902 16.5499 2.56495 16.4325 2.68231L3.75 15.3661V9.37481C3.75 9.20905 3.68415 9.05008 3.56694 8.93287C3.44973 8.81566 3.29076 8.74981 3.125 8.74981C2.95924 8.74981 2.80027 8.81566 2.68306 8.93287C2.56585 9.05008 2.5 9.20905 2.5 9.37481V16.8748Z" fill="white"/></svg></button>

                </div>
 
                <div ref={windowContainerRef} className="
                bg-white
                pl-4
                pr-2
                xl:px-9 
                py-6 md:py-6 xl:py-12 
                xl:w-[50%]
                ">

                    <div ref={windowTitleRef}> 

                        <h4 className='
                        font-semibold
                        text-sm md:text-xs xl:text-sm 
                        py-2'>
                            {miniHeader}</h4>

                        <h2 className='
                        font-manrope font-semibold
                        xl:pb-4
                        text-2xl md:text-2xl xl:text-4xl '>{mainHeader}</h2>

                    </div>

                    <div ref={windowContentRef}>

                        <p className='
                        mb-2
                      text-[#737373] 
                        font-normal
                        md:w-[100%] xl:w-[60%]
                        py-4 md:py-2
                        md:text-xs'>{description}</p>


                       <div className='
                        flex items-center
                        gap-2'>
                        
                            <h4 className='
                            font-bold
                            md:text-xs xl:text-sm 
                            '>EXPLORE PROJECT</h4>

                            <button>

                                <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.7386 5.74553C12.0732 5.41098 12.0732 4.86768 11.7386 4.53313L7.45641 0.250911C7.12187 -0.0836371 6.57856 -0.0836371 6.24401 0.250911C5.90946 0.58546 5.90946 1.12877 6.24401 1.46331L9.0676 4.28423H0.856444C0.382723 4.28423 0 4.66695 0 5.14067C0 5.61439 0.382723 5.99711 0.856444 5.99711H9.06492L6.24669 8.81802C5.91214 9.15257 5.91214 9.69588 6.24669 10.0304C6.58123 10.365 7.12454 10.365 7.45909 10.0304L11.7413 5.74821L11.7386 5.74553Z" fill="#191919"/></svg>

                            </button>
                        

                        </div>

                    </div>
                </div>

            </div>

            

        </div>

        <div className='
            md:hidden
            bg-white
            pl-4
            pr-2
            md:px-6 xl:px-9 
            py-6 md:py-6 xl:py-12 
            md:bottom-0
            md:right-0
            w-full xl:w-[40%]
            md:left-[20rem] xl:left-[52rem] 
            '>

                <div ref={titleRef}> 

                    <h4 className='
                    font-semibold
                    text-sm md:text-xs xl:text-sm 
                    py-2'>
                        {miniHeader}</h4>

                    <h2 className='
                    font-manrope font-semibold
                    xl:pb-4
                    text-2xl md:text-2xl xl:text-4xl '>{mainHeader}</h2>

                </div>

                <div ref={contentRef}>

                    <p className='
                    mb-2
                    text-[#737373] 
                    font-normal
                    py-4
                     md:text-xs'>{description}</p>


                    <div className='
                    flex items-center
                    gap-2'>
                        
                        <h4 className='
                        font-bold
                         md:text-xs xl:text-sm 
                        '>EXPLORE PROJECT</h4>

                        <button>

                            <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.7386 5.74553C12.0732 5.41098 12.0732 4.86768 11.7386 4.53313L7.45641 0.250911C7.12187 -0.0836371 6.57856 -0.0836371 6.24401 0.250911C5.90946 0.58546 5.90946 1.12877 6.24401 1.46331L9.0676 4.28423H0.856444C0.382723 4.28423 0 4.66695 0 5.14067C0 5.61439 0.382723 5.99711 0.856444 5.99711H9.06492L6.24669 8.81802C5.91214 9.15257 5.91214 9.69588 6.24669 10.0304C6.58123 10.365 7.12454 10.365 7.45909 10.0304L11.7413 5.74821L11.7386 5.74553Z" fill="#191919"/></svg>

                        </button>
                        

                    </div>

                </div>

            </div>

    </div>
  )
}
