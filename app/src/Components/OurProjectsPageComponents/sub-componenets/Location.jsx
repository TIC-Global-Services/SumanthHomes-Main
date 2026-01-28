import { Logo1 } from "./miniLogos/Logo1";
import { Logo2 } from "./miniLogos/Logo2";
import { Logo3 } from "./miniLogos/Logo3";
import { Logo4 } from "./miniLogos/Logo4";
import {motion} from "motion/react"
import { SlideUpAnimationBlur } from "../../../utils/SlideUpAnimationBlur";
import BlurText from "../../../utils/BlurText";

export const Location = () => {
    const specification ={
        flex:'flex  gap-0 w-full border-b-2 mb-6 pb-4',
        secondFlex:'flex w-[50%] gap-2',
        title:'text-base font-normal pr-4',
        content:'w-[60%] font-normal text-[#717580]',
    } 
  return (
    <div className='w-full mb-1'>

            <BlurText
              text='Location'
              delay={120}
              animateBy="words"
              direction="bottom"
              className='text-2xl font-manrope font-semibold mb-10'
            />

        <div className='flex items-center justify-between flex-wrap xl:flex-nowrap gap-32 w-full'>

            <div className='w-full xl:w-[70%] pointer-events-none'>
                <iframe className='w-full aspect-[4/2] border rounded-md' src="https://www.openstreetmap.org/export/embed.html?bbox=79.01573181152344%2C13.418341060030002%2C79.65843200683595%2C13.84541369663886&amp;layer=hot" ></iframe><br/>
            </div>

            <div className='w-full xl:w-[30%]'>

                <motion.h2
                initial={SlideUpAnimationBlur.initial}
                whileInView={SlideUpAnimationBlur.whileInView}
                transition={SlideUpAnimationBlur.transition}
                viewport={SlideUpAnimationBlur.viewport}
                
                className='font-manrope font-semibold text-2xl mb-8'>Specification</motion.h2>

                <div className={specification.flex}>
                    <div className={specification.secondFlex}>
                        <Logo1/>
                        <h3 className={specification.title}>Property ID:</h3>
                    </div>
                    <p className={specification.content}>GE-G612</p>
                </div>

                <div className={specification.flex}>
                    <div className={specification.secondFlex}>
                        <Logo2/>
                    <h3 className={specification.title}>Property type:</h3>
                    </div>
                    <p className={specification.content}>Single Family</p>
                </div>

                <div className={specification.flex}>
                    <div className={specification.secondFlex}>
                        <Logo3/>
                    <h3 className={specification.title}>Property size:</h3>
                    </div>
                    
                    <p className={specification.content}>1400 Sq Ft</p>
                </div>
                
                <div className={specification.flex}>
                    <div className={specification.secondFlex}>
                        <Logo4/>
                    <h3 className={specification.title}>Cooling:</h3>
                    </div>
                    <p className={specification.content}>Yes</p>
                </div>

            </div>

        </div>
    </div>
  )
}
