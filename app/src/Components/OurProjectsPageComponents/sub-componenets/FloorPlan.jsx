import {motion} from "motion/react"
import { SlideUpAnimationBlur } from "../../../utils/SlideUpAnimationBlur"
import BlurText from "../../../utils/BlurText"

export const FloorPlan = ({title, img1, img2}) => {
  return (
    <div className='w-full mb-16'>
        
        <motion.div
        className='w-full flex'>

           <BlurText
              text={title}
              delay={120}
              animateBy="words"
              direction="bottom"
              className='text-2xl font-manrope font-semibold mb-4 mx-auto'
            />

        </motion.div>

        <div className='flex gap-4 flex-wrap xl:flex-nowrap w-full'>
            <img className='w-full xl:w-[50%] border rounded-sm' src={img1.image} alt={img1.alt} />
            <img className='w-full xl:w-[50%] border rounded-sm' src={img2.image} alt={img2.alt} />
        </div>
    </div>
  )
}
