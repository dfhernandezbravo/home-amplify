import { Fragment  } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CarouselProvider, Dot, Slide, Slider } from 'pure-react-carousel';
import { FeaturedCategoriesStruct, Items } from './FeaturedCategories.types';
import {
  CarouselWrapper,
  CarouselDot,
  CarouselDotContainer,
  Container,
  ItemContainer,
} from './FeaturedCategories.styles';
import useBreakpoints from '@/presentation/hooks/useBreakpoints';
import { IsMobile } from '@/presentation/hooks/utils';

const FeaturedCategories = (props: FeaturedCategoriesStruct) => {
  const { items } = props;
  const halfItems = Math.floor(items.length / 2);

  const firstHalf: FeaturedCategoriesStruct['items'] = items.slice(0, halfItems);
  const secondtHalf: FeaturedCategoriesStruct['items'] = items.slice(halfItems);

  // Hooks
  const { isSm, isXs } = useBreakpoints();

  return (
    <Container>
      { IsMobile() ? (
        <Fragment>
          <CarouselWrapper>
            <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={25}
              totalSlides={halfItems}
              isIntrinsicHeight={true}
              visibleSlides={1.15}
            >
              <Slider
                style={{
                  height: 'fit-content',
                }}
              >
                {firstHalf?.map((item: Items, index: number) => (
                  <Slide
                    key={index}
                    style={{ padding: '16px', margin: '0 16px' }}
                    index={index}
                  >
                    <Link href={item.link}>
                      <Image
                        src={item.mobileImage}
                        alt={item.title}
                        width={100}
                        height={100}
                        sizes="100vw"
                      />
                    </Link>
                  </Slide>
                ))}
              </Slider>

              <CarouselDotContainer>
                {firstHalf?.map((item, index) => (
                  <Dot  slide={index} key={index}>
                    <div>
                      <CarouselDot />
                    </div>
                  </Dot>
                ))}
              </CarouselDotContainer>
            </CarouselProvider>
          </CarouselWrapper>

          <CarouselWrapper>
            <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={25}
              totalSlides={halfItems}
              isIntrinsicHeight={true}
              visibleSlides={1.15}
            >
              <Slider
                style={{
                  height: 'fit-content',
                }}
              >
                {secondtHalf?.map((item: Items, index: number) => (
                  <Slide
                    key={index}
                    style={{ padding: '16px', margin: '0 16px' }}
                    index={index}
                  >
                    <Link href={item.link}>
                      <Image
                        src={item.mobileImage}
                        alt={item.title}
                        width={100}
                        height={100}
                        sizes="100vw"
                      />
                    </Link>
                  </Slide>
                ))}
              </Slider>

              <CarouselDotContainer>
                {secondtHalf?.map((item: Items, index: number) => (
                  <Dot  slide={index} key={index}>
                    <div>
                      <CarouselDot />
                    </div>
                  </Dot>
                ))}
              </CarouselDotContainer>
            </CarouselProvider>
          </CarouselWrapper>
        </Fragment>
      ) : (
        items &&
        items.map((item: Items, index: number) => (
          <ItemContainer key={`gallery_item_${index}`}>
            <Link href={item.link}>
              <Image
                src={item.image}
                alt={item.title}
                width={100}
                height={100}
                sizes="100vw"
              />
            </Link>
          </ItemContainer>
        ))
      )}
    </Container>
  );
};

export default FeaturedCategories;
