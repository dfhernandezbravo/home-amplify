/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import {
  ItemsWrapper,
  CarouselNavButton,
  DotContainer,
  Dots,
  CustomSlider
} from './Categories.styles';
import { CategoriesStruct } from './Categories.types';
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Dot,
  Slide,
  Slider,
} from 'pure-react-carousel';
import { GrNext, GrPrevious } from 'react-icons/gr';
import useBreakpoints from '@/presentation/hooks/useBreakpoints';
import Container from '@/presentation/components/atoms/Container';
import IconsContainer from './IconsContainer';
import { Fragment } from 'react';

const Categories = (props: CategoriesStruct) => {
  const { items } = props;

  const iteraciones = Array(items.length / 2).fill(null);

  const { isLg, isMd, isSm } = useBreakpoints();

  const defaultValueVisible = 2;
  const firstValueBreackpoint = 4;
  
  const checkBreackpoints =()=>{
    if(isLg || isSm || isMd){
      return firstValueBreackpoint
    }
    return defaultValueVisible;
  }

  return (
    <Container>
      <ItemsWrapper>
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={100}
          totalSlides={iteraciones.length}
          visibleSlides={checkBreackpoints()}
          step={checkBreackpoints()}
          dragStep={checkBreackpoints()}
        >
          <CustomSlider>
            {iteraciones.map(( _ , index) =>(
              <Slide key={index} index={index}>
                <IconsContainer items={items} indexArray={index}/>
              </Slide>
            ))}
          </CustomSlider>

          {isLg && (
            <Fragment>
              <ButtonBack style={{ background: 'transparent', border: 'none' }}>
                <CarouselNavButton>
                  <GrPrevious size={'25px'} />
                </CarouselNavButton>
              </ButtonBack>
              <ButtonNext style={{ background: 'transparent', border: 'none' }}>
                <CarouselNavButton right>
                  <GrNext size={'25px'} />
                </CarouselNavButton>
              </ButtonNext>
            </Fragment>
          )}

          <DotContainer>
          {items.map((item, index) => (
            (index === 0 || index === iteraciones.length -1) 
            ?               
            <Dot slide={index} key={index}>
              <div>
                <Dots />
              </div>
            </Dot>
            : null

))}
        </DotContainer>

        </CarouselProvider>
      </ItemsWrapper>
    </Container>
  );
};

export default Categories;














// {items.map((item, index, array) => (
//   index %2 === 0 
//     ? 
// (
// <Fragment key={array[index].title}>
//       <CustomSlide key={array[index].title} index={index} style={{ height: '20px' }}>
//         <Link href={array[index].link || ''}>
//           <CarouselImageContainer>
//             <img
//               src={array[index].image}
//               width={100}
//               height={100}
//               sizes="100vw"
//               alt={array[index].title || 'Icon'}
//             />
//           </CarouselImageContainer>
//           <IconTitle>{array[index].title}</IconTitle>
//         </Link>

        
//       </CustomSlide>

//       <CustomSlide key={array[index +1].title} index={index+1} style={{ height: '20px' }}>
//         <Link href={array[index +1].link}>
//           <CarouselImageContainer>
//             <img
//               src={array[index +1].image}
//               width={100}
//               height={100}
//               sizes="100vw"
//               alt={array[index +1].title || 'Icon'}
//             />
//           </CarouselImageContainer>
//           <IconTitle>{array[index +1].title}</IconTitle>
//         </Link>
//       </CustomSlide>
// </Fragment> 
// )
//     : 
//     ''
// ))}