import img1 from "../../assets/img/ArchitectureDesign/arielDay8k.jpg";
import img2 from "../../assets/img/ArchitectureDesign/ArchitectureImage2.png";
import img3 from "../../assets/img/ArchitectureDesign/ArchitectureImage3.jpg";
import img4 from "../../assets/img/ArchitectureDesign/ArchitectureImage4.png";

export const ADCards = () => {

      const ArchitectureCards = [
          {
              img: img1,
              text:'Residential Apartment'
          },
          {
              img: img2,
              text:'Commercial Space'
          },
          {
              img: img3,
              text:'Individual Villas'
          },
          {
              img: img4,
              text:'Random'
          },
          {
              img: img1,
              text:'Residential Apartment'
          },
          {
              img: img2,
              text:'Commercial Space'
          }
      ]



  return (
    <div 
        className='w-full '
        style={{
            scrollbarWidth:'none',
        }}
        >
        <div  className='
        flex
        mt-8 xl:mt-12 
        gap-4 xl:gap-8'
        >

            {
                ArchitectureCards.map((card, i)=>(

                    <div key={i} className='
                    relative flex-shrink-0 carousel-card
                    w-full md:w-[30%] xl:w-auto
                    '>
                        
                        <img className='
                        aspect-[4/5]
                        w-full xl:w-[370px] 
                        
                        ' src={card.img}></img>
                        <p className='
                        absolute 
                        bottom-8 xl:bottom-11 
                        font-medium text-white text-center
                        justify-self-center
                        mx-auto
                        text-base xl:text-xl 
                        '>{card.text}</p>
                
                    </div>
                ))
            }
                
            
            </div>
        </div>
  )
}
