


export const GridCard1 = ({number, mainText, subText, refName=null}) => {

  return (
    <div ref={refName}  className='
    flex items-start gap-2 md:block
    flex-shrink-0 
    border-none
    w-full md:w-[40%] xl:w-[40%]
    relative  
    '
    >

        <h2 className='
        xl:w-[15rem]'
        >
          <svg width="200" height="140" viewBox="0 0 200 140">
            <text
            className="
            font-jakarta font-extrabold
            "
               x="0"
               y="0"
               textAnchor="start"
               dominantBaseline="hanging"
               font-size="110"
               fill="none"
               stroke="rgba(181,4,4,0.68)"
               stroke-width="1"
               stroke-linejoin="round"
               >
                {0+number}
            </text>
          </svg>
        </h2>

        <div className='
        top-[50%] left-8
        bottom-[-40px] md:bottom-[-30px]
        absolute'>
            <h4 className='font-medium leading-[30px] text-xl'>{mainText}</h4>
             <p className='xl:w-full mb-4 font-normal leading-[30px] text-[#737373] text-[16px]'>{subText}</p>
        </div>
        
    </div>
  )
}
