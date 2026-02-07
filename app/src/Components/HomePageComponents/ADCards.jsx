import img1 from "../../assets/img/ArchitectureDesign/arielDay8k.jpg";
import img2 from "../../assets/img/ArchitectureDesign/ArchitectureImage2.png";
import img3 from "../../assets/img/ArchitectureDesign/ArchitectureImage3.jpg";
import img4 from "../../assets/img/ArchitectureDesign/ArchitectureImage4.png";
import ParallaxComponent from "../../utils/ParallaxComponent";
import { useSwipeable } from "react-swipeable";
import { useRef } from "react";
import gsap from "gsap";

const ADCards = () => {

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
      ]

      const cardRef = useRef(null);
      
      const swipeLeft = ()=>{
        console.log('Swiped Left');
        const card = cardRef.current;
        const cardWidth = card.getBoundingClientRect().width;
        gsap.to(card, {x:`-=${cardWidth}`});
      };

      const swipeRight = ()=>{
        console.log('Swiped Right');
        const card = cardRef.current;
        const cardWidth = card.getBoundingClientRect().width;
        gsap.to(card, {x:`+=${cardWidth}`});
      };

      const handler = useSwipeable({
        onSwipedLeft: ()=>swipeLeft(),
        onSwipedRight: ()=>swipeRight(),

      });

  return (
    <div 
        className='w-full'
        {...handler}
        >

        <div
        ref={cardRef}
        style={{
            scrollbarWidth:'none',
        }}
        className='
        w-full
        overflow-hidden md:overflow-auto
        flex
        gap-6 md:gap-4 xl:gap-8'
        >
            
            {
                ArchitectureCards.map((card, i)=>(
                    

                    <div  key={i} className='overflow-hidden
                    relative flex-shrink-0 carousel-card
                    w-full md:w-[30%] xl:w-auto
                    '>

                        <ParallaxComponent>
                            <img className='
                        aspect-[4/5]
                        w-full xl:w-[370px] 
                        
                        ' src={card.img}/>
                        </ParallaxComponent>  
                        
                        <p className='
                        absolute 
                        bottom-8 xl:bottom-11 
                        font-medium text-white text-center
                        justify-self-center
                        mx-auto
                        tracking-0
                        text-base xl:text-xl 
                        '>{card.text}</p>
                
                    </div>
                ))
            }
           
            
        </div>

        <div className="flex gap-1 md:hidden justify-center mt-5">
            {ArchitectureCards.map((data, index)=>(
                    <div key={index} className={`w-3 h-3 border rounded-full bg-gray-700`}></div>
            ))}
        </div>
    </div>
  )
}

export default ADCards;