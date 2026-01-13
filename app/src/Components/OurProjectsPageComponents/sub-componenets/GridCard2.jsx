


export const GridCard2 = ({Image, mainText, subText}) => {

  return (
    <div className='
    card
    relative
    w-full
    flex-shrink-0
    '>

        <img src={Image} className='
        w-full
        h-full md:h-[20rem] xl:h-[27rem]
        '></img>

        <div className='
        text-center 
        absolute md:relative
        bottom-0
        w-full
        flex-col md:flex-row justify-normal items-center
        pb-4
        xl:mt-4 xl:mb-8'>

            <h4 className='font-medium text-xl text-white md:text-black'>{mainText}</h4>
            
            <p className='font-normal text-[#737373] text-xl'>{subText}</p>

        </div>

    </div>
  ) 
}
