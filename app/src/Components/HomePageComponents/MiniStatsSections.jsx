import { Card2 } from './sub-components/card2'

export const MiniStatsSections = () => {

  const data = [
    {
      number : "100",
      plus : true,
      title : "Homes purchased",
      content : "Trusted by hundreds of happy homeowners ."
    },
    {
      number : "20",
      plus : false,
      title : "Published properties",
      content : "Sophisticated apartments with top amenities."
    },
    {
      number : "13",
      plus : false,
      title : "Years of experience",
      content : "Built on years of trust and timeless craftsmanship."
    },
  ]

  return (

    <div className='
    flex items-center justify-between flex-wrap
    gap-1
    my-16'>

      {
        data.map((data, id)=>(
          <Card2 key={id} Number={data.number} plus={data.plus} titleText={data.title} contentText={data.content} />
        ))
      }

    </div>
  )
}
