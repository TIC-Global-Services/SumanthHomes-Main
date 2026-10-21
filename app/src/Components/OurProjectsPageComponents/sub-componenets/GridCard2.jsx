import ParallaxComponent from "../../../utils/ParallaxComponent"
import { useNavigate } from "react-router-dom"

export const GridCard2 = ({Image, mainText, subText, link}) => {
  const navigate = useNavigate()

  return (
    <div 
      onClick={() => link && navigate(link)}
      className={`
      overflow-hidden
      card
      relative
      w-full
      flex-shrink-0
      ${link ? 'cursor-pointer group' : ''}
    `}>
      <div className="w-full aspect-[416/461] overflow-hidden">
        <ParallaxComponent className={'w-full'}>
          <img src={Image} className='w-full aspect-[416/461] scale-125 transition-transform duration-500 group-hover:scale-130'/>
        </ParallaxComponent>
      </div>

      <div className='
          flex items-center gap-[2px] xl:gap-6
          justify-center
          relative
          pb-4
          mt-6
          mb-6'>
        <h4 className='font-medium text-black text-sm xl:text-base group-hover:text-[#164944] transition-colors'>{mainText}</h4>
        <div className="border border-t-1 border-[#3E3E3E] w-[10%] "></div>
        <p className='font-normal text-[#737373] text-sm xl:text-base'>{subText}</p>
      </div>
    </div>
  ) 
}
