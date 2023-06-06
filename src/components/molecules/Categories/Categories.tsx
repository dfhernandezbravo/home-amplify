import Link from 'next/link';
import {
  ItemsWrapper,
  CarouselImageContainer,
  IconTitle,
  CarouselNavButton,
} from './Categories.styles';
import { CategoriesProps } from './Categories.types';
import Image from 'next/image';
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Slide,
  Slider,
} from 'pure-react-carousel';
import { GrNext, GrPrevious } from 'react-icons/gr';
import useBreakpoints from '@/hooks/useBreakpoints';

export const Categories = (props: CategoriesProps) => {
  const { items } = props;

  // hooks
  const { isLg, isMd, isSm, isXs } = useBreakpoints();

  return (
    <ItemsWrapper>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={100}
        totalSlides={items.length}
        visibleSlides={isLg || isSm ? 9 : isMd ? 6 : 5}
        step={isLg || isSm ? 9 : isMd ? 6 : 5}
      >
        <Slider style={{ margin: '0 auto', width: '90%', minHeight: '170px' }}>
          {items.map((item, index) => (
            <Slide key={item.title} index={index} style={{ height: '20px' }}>
              <Link href={item.link || ''}>
                <CarouselImageContainer>
                  <Image
                    src={item.image || ''}
                    width={100}
                    height={100}
                    sizes='100vw'
                    priority={true}
                    alt={item.title || 'Item icon'}
                  />
                </CarouselImageContainer>
                <IconTitle>{item.title}</IconTitle>
              </Link>
            </Slide>
          ))}
        </Slider>

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
  );
};
