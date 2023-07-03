/* eslint-disable @next/next/no-img-element */
import {
  ItemsWrapper,
  CarouselNavButton,
  DotContainer,
  Dots,
  CustomSlider
} from './Categories.styles';
import { CategoriesStruct } from '../Categories.types';
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Dot,
  Slide,
} from 'pure-react-carousel';
import { GrNext, GrPrevious } from 'react-icons/gr';
import useBreakpoints from '@/presentation/hooks/useBreakpoints';
import Container from '@/presentation/components/atoms/Container';
import IconsContainer from './IconsContainer';

const CategoriesSquare = ({ items }: CategoriesStruct) => {

  const emptyArray = Array(items.length / 2).fill(null);

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
          totalSlides={emptyArray.length}
          visibleSlides={checkBreackpoints()}
          step={checkBreackpoints()}
          dragStep={checkBreackpoints()}
        >
          <CustomSlider>
            {emptyArray.map(( _ , index) =>(
              <Slide key={index} index={index}>
                <IconsContainer items={items} indexArray={index}/>
              </Slide>
            ))}
          </CustomSlider>


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


          <DotContainer>
          {items.map((item, index) => (
            (index === 0 || index === emptyArray.length -1) 
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

export default CategoriesSquare;