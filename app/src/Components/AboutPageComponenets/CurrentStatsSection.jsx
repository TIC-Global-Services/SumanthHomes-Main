import { Card1 } from './sub-componenets/Card1'

export const CurrentStatsSection = () => {
  
  const data = [
    {
      number:'96%',
      content:'Client Satisfaction & Repeat Partnerships',
    },
    {
      number:'05',
      content:'Active Sites Currently Under Execution',
    },
    {
      number:'280+',
      content:'Residential & Commercial Projects Delivered',
    },
  ]
  return (

    <div className='
    flex justify-evenly flex-wrap
    gap-10 md:gap-10
    md:mt-4 xl:mt-4 
    mb-14 md:mb-20 xl:mb-20 '>

      {data.map((data, id)=>(
        <Card1 key={id} number={data.number} content={data.content} pageNo={`0${id+1}`}/>
      ))}

    </div>
  )
}
