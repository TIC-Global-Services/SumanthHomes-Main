


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
        aspect-[416/461]
        '></img>

        <div className='
            flex items-center gap-6
            justify-center
            relative
            pb-4
            mt-6
            mb-6            '>

          <h4 className='font-medium  text-black'>{mainText}</h4>
          <div className="border border-t-1 border-[#3E3E3E] w-[10%]"></div>
          <p className='font-normal text-[#737373] '>{subText}</p>

        </div>

    </div>
  ) 
}
