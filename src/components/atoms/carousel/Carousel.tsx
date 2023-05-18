import { CarouselProps } from "./Carousel.types";
import Image from "next/image";
import Link from "next/link";
import { GrNext, GrPrevious } from 'react-icons/gr';

import 'pure-react-carousel/dist/react-carousel.es.css';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup, Dot } from 'pure-react-carousel';
import { CarouselImageContainer, CarouselNavButton, CarouselWrapper } from "./carousel.styles";


const styleSlide = {
  postion: "relative"
}

export const Carousel = ( props : CarouselProps) => {
  const { items } = props;

  return (
    <CarouselProvider 
      naturalSlideWidth={100}
      naturalSlideHeight={25}
      totalSlides={items.length}
      isPlaying= {true}
      infinite = {true}
    >
        <Slider>
          {items.map ((item, index) =>(
            <Slide key={item.title} index={index}>
              <Link href={item.link || ""}>
                <CarouselImageContainer>
                <Image 
                  src={ item.image || "" }
                  width={100}
                  height={100}
                  sizes="100vw"
                  priority={true}
                  alt={item.title || "Carousel Image"}
                />
                </CarouselImageContainer>
              </Link>
            </Slide>
          ))}
        </Slider>


        <ButtonBack>          
            <CarouselNavButton>
              <GrPrevious size={'25px'} />
            </CarouselNavButton>
        </ButtonBack>
        <ButtonNext>
          <CarouselNavButton right>
            <GrNext size={'25px'} />
          </CarouselNavButton>
        </ButtonNext>
          

    </CarouselProvider>

  );
};





// import React, { useEffect, useRef, useState } from "react";
// import { CarouselContainer, CarouselDot, CarouselDotContainer, CarouselImageContainer, CarouselNavButton } from "./Carousel.styles";
// import { CarouselProps } from "./Carousel.types";
// import Image from "next/image";
// import Link from "next/link";
// import { GrNext, GrPrevious } from 'react-icons/gr';
// import { useViewport } from "@/hooks/useViewport";


// export const Carousel = ( props : CarouselProps) => {

//   const { items } = props;

//   const [ imageIndex, setImageIndex ] = useState(0);
//   let positionZero = 0;

//   const { width } = useViewport();

//   const imageContainerWidth = items.length;
//   const imagePercent = (imageContainerWidth / items.length) * 10;

//   const sliderRef = useRef<HTMLDivElement>(null);
//   const containerRef = useRef<HTMLDivElement>(null);

//   let direction = 1;
  
//   const handleDotClick = (index : number) =>{
//     setImageIndex(index);
//     const slider: HTMLElement | any = sliderRef.current;

//     console.log((index - imageIndex));
    
//     slider.style.transform = `translate(-${imagePercent * positionZero}%)`;
//     console.log(positionZero);
    
//   };

//   const HandleNext = () =>{
//     direction = 1;
    
//     positionZero === 0 ? positionZero = items.length -1 : positionZero -= 1;

//     setImageIndex(state => state += 1);
//     if(imageIndex === items.length - 1) setImageIndex(0);

//     console.log(positionZero);
//     console.log(imageIndex);
    
//     const container: HTMLElement | any = containerRef.current
//     container.style.justifyContent = 'flex-start';
//     const slider: HTMLElement | any = sliderRef.current;
//     slider.style.transform = `translate(-${imagePercent}%)`;
    
//   }

//   const HandlePrev = () =>{
//     direction = -1;
//     positionZero === items.length -1 ? positionZero = 0 : positionZero += 1;
//     setImageIndex(state => state -= 1);
//     if(imageIndex === 0) setImageIndex(items.length -1);
//     console.log(positionZero);

//     const container: HTMLElement | any = containerRef.current
//     container.style.justifyContent = 'flex-end';
//     const slider: HTMLElement | null = sliderRef.current || null;
//     if (slider)  slider.style.transform = `translate(${imagePercent}%)`;
//   };

//   const handleTransform = () =>{
//       const slider: HTMLElement | any = sliderRef.current;

//       if( direction === 1){
//         slider.appendChild(slider.firstElementChild);
//       }else{
//         slider.prepend(slider.lastElementChild);
//         direction = 1;
//       }

//       slider.style.transition = 'none';
//       slider.style.transform = 'translate(0)';
//       setTimeout(() =>{
//         slider.style.transition = 'all 0.5s';
//       })
//   }

//   useEffect(() =>{
//     const interval  = setInterval(() => {
//       HandleNext();
//       sliderRef.current?.addEventListener('transitionEnd', ()=>{
//         handleTransform();
//       })
//     }, 3500);

//     return ()=> {
//       clearInterval(interval);
//     };
//   }, [positionZero]);

//   return (
//     <CarouselContainer ref={containerRef}>
//         <CarouselImageContainer width={imageContainerWidth} onTransitionEnd={handleTransform} ref={sliderRef}>
//           {items.map ((item) =>(  
//             <Link href={item.link || ""} key={item.title}>
//               <Image 
//                 src={ width < 600 ? item.mobileImage || "" : item.image || ""}
//                 width={100}
//                 height={100}
//                 sizes="100vw"
//                 priority={true}
//                 alt={item.title || "Carousel Image"}
//               />
//           </Link>
//           ))}

//         </CarouselImageContainer>


//         <CarouselNavButton right onClick={HandleNext}>
//             <GrNext size={'25px'} />
//           </CarouselNavButton>
//           <CarouselNavButton onClick={HandlePrev}>
//             <GrPrevious size={'25px'} />
//         </CarouselNavButton>

//       <CarouselDotContainer>
//         {items.map ((dot, index) =>(
//           <CarouselDot 
//             key={dot.title} 
//             active={index === imageIndex}
//             onClick={() =>handleDotClick(index)}
//           >
//             <div></div>
//           </CarouselDot>
//         )) }
//       </CarouselDotContainer>

//     </CarouselContainer>
//   );
// };

