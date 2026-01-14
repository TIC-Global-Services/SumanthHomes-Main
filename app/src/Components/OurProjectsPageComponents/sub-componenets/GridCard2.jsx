


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

        <div className="
        absolute md:relative
        flex-col md:flex-row justify-normal items-center
        text-center 
        w-full
        bottom-0
        bg-gradient-to-t from-black/60 to-black/40
        xl:mt-4 xl:mb-8">

            <div className='
            relative
            pb-4
            '>

            <h4 className='font-medium text-xl text-white md:text-black'>{mainText}</h4>
            
            <p className='font-normal text-[#b0afaf] text-xl'>{subText}</p>

            </div>
        </div>

    </div>
  ) 
}
