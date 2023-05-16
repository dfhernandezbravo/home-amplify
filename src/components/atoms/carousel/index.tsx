import { useState } from "react";
import { CarouselContainer, CarouselDot, CarouselDotContainer, CarouselImageContainer, CarouselNavButton } from "./carousel.styles";
import { CarouselProps } from "./carousel.types";
import Image from "next/image";


const Carousel = ( props : CarouselProps) => {

  const { items, itemsPerRow = 1, styles } = props;

  const [ imageIndex, setImageIndex ] = useState(0);

  const HandleNext = () =>{
    setImageIndex(state => state += 1);
    if(imageIndex === items.length -1) setImageIndex(0);
  }

  const HandlePrev = () =>{
    setImageIndex(state => state -= 1);
    if(imageIndex === 0) setImageIndex(items.length -1);
  }

  return (
    <CarouselContainer>
      <CarouselImageContainer>
        <Image 
          src={items[imageIndex].image}
          width={100}
          height={100}
          sizes="100vw"
          alt="img"
        />
      </CarouselImageContainer>

      <CarouselNavButton right onClick={HandleNext}>
        <div> go </div>
      </CarouselNavButton>
      <CarouselNavButton onClick={HandlePrev}>
        <div> back </div>
      </CarouselNavButton>

      <CarouselDotContainer>
        {items.map ((dot, index) =>(
          <CarouselDot key={dot.title} active={index === imageIndex}/>
        )) }
      </CarouselDotContainer>

    </CarouselContainer>
  );
};

export default Carousel;



// import React from 'react';
// import { CarouselProps } from './carousel.types';
// import Image from 'next/image';
// import { isMobile } from 'react-device-detect';
// import { CarouselContainer } from './carousel.styles';
// import { Carousel as CarouselComponent } from 'react-responsive-carousel'; //TODO: ver
// import 'react-responsive-carousel/lib/styles/carousel.min.css'; //TODO: requires a loader

// const Carousel = (props: CarouselProps) => {
//   const { items, itemsPerRow = 1, styles } = props;

//   const getCenterSlidePercentage = (total: number, countElements: number) => {
//     if (countElements === 1) {
//       return 100;
//     } else return 100 / countElements;
//   };

//   return (
//     <React.Fragment>
//       <CarouselContainer style={styles}>
//         <CarouselComponent
//           showArrows
//           showThumbs={false}
//           centerMode={items.length !== 1}
//           showIndicators={false}
//           showStatus={items.length === 1}
//           centerSlidePercentage={getCenterSlidePercentage(
//             items.length,
//             itemsPerRow
//           )}
//           selectedItem={0}
//         >
//           {items.map((itemCarousel, index) => {
//             const {
//               image = '',
//               mobileImage,
//               altDescription,
//               link,
//             } = itemCarousel;
//             return (
//               <div className='px-1' key={`carousel_item_${index}`}>
//                 <Image
//                   priority={true}
//                   src={isMobile && mobileImage ? mobileImage : image}
//                   alt={altDescription || ''}
//                   width={925}
//                   height={271}
//                   style={{ width: '100%', height: 'auto' }}
//                 />
//               </div>
//             );
//           })}
//         </CarouselComponent>
//       </CarouselContainer>
//     </React.Fragment>
//   );
// };
// export default Carousel;
