import { CarouselProps } from './Carousel.types';
import Image from 'next/image';
import Link from 'next/link';
import { GrNext, GrPrevious } from 'react-icons/gr';

import 'pure-react-carousel/dist/react-carousel.es.css';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Dot,
} from 'pure-react-carousel';
import {
  CarouselDot,
  CarouselDotContainer,
  CarouselImageContainer,
  CarouselNavButton,
  CarouselWrapper,
} from './Carousel.styles';
import useBreakpoints from '@/hooks/useBreakpoints';

export const Carousel = (props: CarouselProps) => {
  const { items } = props;

  // hooks
  const { isLg } = useBreakpoints();

  return (
    <CarouselWrapper>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={25}
        totalSlides={items.length}
        isPlaying={true}
        infinite={true}
        interval={3500}
        isIntrinsicHeight={true}
      >
        <Slider>
          {items.map((item, index) => (
            <Slide key={item.title} index={index}>
              <Link href={item.link || ''}>
                <CarouselImageContainer>
                  {item.image && item.mobileImage && (
                    <Image
                      src={isLg ? item.image : item.mobileImage}
                      width={100}
                      height={100}
                      sizes='100vw'
                      priority={true}
                      alt={item.title || 'Carousel Image'}
                    />
                  )}
                </CarouselImageContainer>
              </Link>
            </Slide>
          ))}
        </Slider>

        <CarouselNavButton>
          <ButtonBack style={{ background: 'transparent', border: 'none' }}>
            <GrPrevious size={'25px'} />
          </ButtonBack>
        </CarouselNavButton>
        <CarouselNavButton right>
          <ButtonNext style={{ background: 'transparent', border: 'none' }}>
            <GrNext size={'25px'} />
          </ButtonNext>
        </CarouselNavButton>

        <CarouselDotContainer>
          {items.map((item, index) => (
            <Dot slide={index} key={index}>
              <div>
                <CarouselDot />
              </div>
            </Dot>
          ))}
        </CarouselDotContainer>
      </CarouselProvider>
    </CarouselWrapper>
  );
};
