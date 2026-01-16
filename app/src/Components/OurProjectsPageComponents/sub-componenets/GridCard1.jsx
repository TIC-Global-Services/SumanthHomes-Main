


export const GridCard1 = ({number, mainText, subText, refName=null}) => {

  return (
    <div ref={refName}  className='
    flex items-center gap-2 md:block
    flex-shrink-0 flex-grow
    border-none
    w-full md:w-[40%] xl:w-[40%]
    relative  
    '
    >

        <h2 className='
        xl:w-[15rem]'
        >
          <svg width="200" height="140" viewBox="0 0 120 140">
            <text
            className="
            font-jakarta font-extrabold
            "
               x="10"
               y="110"
               font-size="96"
               fill="none"
               stroke="rgba(181,4,4,0.4)"
               stroke-width="3"
               stroke-linejoin="round"
               >
                {0+number}
            </text>
          </svg>
        </h2>

        <div className='
        top-22 left-20
        bottom-[-40px]
        absolute'>
            <h4 className='text-2xl xl:text-2xl'>{mainText}</h4>
             <p className='xl:w-[90%] mb-4 font-jakarta font-normal text-[#737373] md:text-sm'>{subText}</p>
        </div>
        
    </div>
  )
}
