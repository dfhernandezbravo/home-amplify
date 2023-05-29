import { GalleryItemProps, GalleryProps } from './Gallery.types';
import Image from 'next/image';
import {
  CarouselWrapper,
  CarouselDot,
  CarouselDotContainer,
  GalleryContainer,
  GalleryItemContainer
} from './Gallery.styles';
import Link from 'next/link';
import { useViewport } from '@/hooks/useViewport';
import { CarouselProvider, Dot, Slide, Slider, WithStore } from 'pure-react-carousel';
import { Fragment, useEffect, useState } from 'react';

export const Gallery = (props: GalleryProps) => {
  const { items } = props;
  const halfItems = Math.floor(items.length / 2);

  const [ firstHalf, setFirstHalf ] = useState<GalleryItemProps[]>();
  
  const [ secondtHalf, setSecondHalf ] = useState<GalleryItemProps[]>();
  
  
  
  useEffect(() => {
    setFirstHalf(items.slice(0,halfItems));
    setSecondHalf(items.slice(halfItems));  
  }, [])
  

  // Hooks
  const { width } = useViewport();

  return (
    <GalleryContainer>
      {width > 768 ?(
              items && items.map((item, index) =>(
                <GalleryItemContainer key={`gallery_item_${index}`}>
                    <Link
                        href={item.link}
                      >
                        <Image
                        src={width < 1024 && item.mobileImage ? item.mobileImage || "" : item.image || ""}
                        alt={item.altDescription || ''}
                        width={100}
                        height={100}
                        sizes='100vw'
                      />
                    </Link>
                </GalleryItemContainer>
              ))
      ):(
        <Fragment>
          <CarouselWrapper>
            <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={25}
              totalSlides={halfItems}
              isIntrinsicHeight={true}
              visibleSlides={1.15}
            >
              <Slider style={{
                height: "fit-content"
              }}>
                {firstHalf?.map((item, index)=>(
                    <Slide 
                    key={index}
                    style={{ padding: "16px", margin: "0 16px"}} 
                    index={index}
                  >
                    <Link
                      href={item.link}
                    >
                        <Image
                        src={item.image || ""}
                        alt={item.altDescription || ''}
                        width={100}
                        height={100}
                        sizes='100vw'
                      />
                    </Link>
                  </Slide>
                ))}


              </Slider>
        


            <CarouselDotContainer>
              {firstHalf?.map((item, index) =>(
                <Dot disabled={false} slide={index} key={index}>
                    <div><CarouselDot/></div>
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
              <Slider style={{
                height: "fit-content"
              }}>
                {secondtHalf?.map((item, index)=>(
                    <Slide 
                    key={index}
                    style={{ padding: "16px", margin: "0 16px"}} 
                    index={index}
                  >
                    <Link
                      href={item.link}
                    >
                        <Image
                        src={item.image || ""}
                        alt={item.altDescription || ''}
                        width={100}
                        height={100}
                        sizes='100vw'
                      />
                    </Link>
                  </Slide>
                ))}


              </Slider>
        


            <CarouselDotContainer>
              {secondtHalf?.map((item, index) =>(
                <Dot disabled={false} slide={index} key={index}>
                    <div><CarouselDot/></div>
                </Dot>
              ))}
            </CarouselDotContainer>



            </CarouselProvider>
          </CarouselWrapper>
        </Fragment>
      )
      

      }


    </GalleryContainer>
  );
};
