/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import {
  ItemsWrapper,
  CarouselImageContainer,
  IconTitle,
  CarouselNavButton,
  CustomSlider,
  CustomSlide,
} from './Categories.styles';
import { CategoriesStruct } from './Categories.types';
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider
} from 'pure-react-carousel';
import { GrNext, GrPrevious } from 'react-icons/gr';
import useBreakpoints from '@/presentation/hooks/useBreakpoints';
import Container from '@/presentation/components/atoms/Container';

const Categories = (props: CategoriesStruct) => {
  const { items } = props;

  const { isLg, isMd, isSm } = useBreakpoints();

  const slidesVisible =  isLg || isSm ? 9 : isMd ? 6 : 5;

  return (
    <Container>
      <ItemsWrapper>
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={100}
          totalSlides={items.length}
          visibleSlides={slidesVisible}
          step={slidesVisible}
        >
          <CustomSlider>
            {items.map((item, index) => (
              item.image && (
                <CustomSlide key={item.title} index={index}>
                  <Link href={item.link || ''}>
                    <CarouselImageContainer>
                        <img
                          src={item.image}
                          width={100}
                          height={100}
                          sizes="100vw"
                          alt={item.title || 'Item icon'}
                        />
                    </CarouselImageContainer>
                    <IconTitle>{item.title}</IconTitle>
                  </Link>
                </CustomSlide>
              )
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
        </CarouselProvider>
      </ItemsWrapper>
    </Container>
  );
};

export default Categories;
