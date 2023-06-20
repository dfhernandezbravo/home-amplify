import { GalleryItemProps, GalleryProps } from './Gallery.types';
import Image from 'next/image';
import {
  CarouselWrapper,
  CarouselDot,
  CarouselDotContainer,
  GalleryContainer,
  GalleryItemContainer,
} from './Gallery.styles';
import Link from 'next/link';
import { CarouselProvider, Dot, Slide, Slider } from 'pure-react-carousel';
import { Fragment, useState } from 'react';
import useBreakpoints from '@/presentation/hooks/useBreakpoints';

const Gallery = (props: GalleryProps) => {
  const { items } = props;
  const halfItems = Math.floor(items.length / 2);

  const [firstHalf, setFirstHalf] = useState<GalleryItemProps[]>(
    items.slice(0, halfItems),
  );

  const [secondtHalf, setSecondHalf] = useState<GalleryItemProps[]>(
    items.slice(halfItems),
  );

  // Hooks
  const { isSm, isXs } = useBreakpoints();

  return (
    <GalleryContainer>
      {isSm || isXs ? (
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
                {firstHalf?.map((item, index) => (
                  <Slide
                    key={index}
                    style={{ padding: '16px', margin: '0 16px' }}
                    index={index}
                  >
                    <Link href={item.link}>
                      <Image
                        src={item.image || ''}
                        alt={item.altDescription || ''}
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
                  <Dot disabled={false} slide={index} key={index}>
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
                {secondtHalf?.map((item, index) => (
                  <Slide
                    key={index}
                    style={{ padding: '16px', margin: '0 16px' }}
                    index={index}
                  >
                    <Link href={item.link}>
                      <Image
                        src={item.image || ''}
                        alt={item.altDescription || ''}
                        width={100}
                        height={100}
                        sizes="100vw"
                      />
                    </Link>
                  </Slide>
                ))}
              </Slider>

              <CarouselDotContainer>
                {secondtHalf?.map((item, index) => (
                  <Dot disabled={false} slide={index} key={index}>
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
        items.map((item, index) => (
          <GalleryItemContainer key={`gallery_item_${index}`}>
            <Link href={item.link}>
              <Image
                src={item.image || ''}
                alt={item.altDescription || ''}
                width={100}
                height={100}
                sizes="100vw"
              />
            </Link>
          </GalleryItemContainer>
        ))
      )}
    </GalleryContainer>
  );
};

export default Gallery;
