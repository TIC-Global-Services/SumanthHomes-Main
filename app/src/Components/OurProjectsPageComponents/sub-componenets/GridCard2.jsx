


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
        absolute 
        flex-col md:flex-row justify-normal items-center
        text-center 
        w-full
        bottom-0 
        bg-gradient-to-t from-white/70 to-white/30
        ">

            <div className='
            relative
            pb-4
            '>

            <h4 className='font-medium text-xl text-black'>{mainText}</h4>
            
            <p className='font-normal text-[#000000b9] text-xl'>{subText}</p>

            </div>
        </div>

    </div>
  ) 
}
