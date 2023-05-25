import { GalleryProps } from './Gallery.types';
import Image from 'next/image';
import {
  GalleryContainer,
  GalleryItemContainer
} from './Gallery.styles';
import Link from 'next/link';
import { useViewport } from '@/hooks/useViewport';
import { CarouselProvider, Slide, Slider } from 'pure-react-carousel';

export const Gallery = (props: GalleryProps) => {
  const { items } = props;

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

          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={25}
            totalSlides={4}
            isIntrinsicHeight={true}
            visibleSlides={1.15}
          >
            <Slider style={{
              height: "fit-content",
              maxHeight: "800px"
            }}>

              <Slide 
                style={{ padding: "16px", margin: "0 16px"}} 
                index={1}
              >
                <Link
                  href={items[0].link}
                >
                    <Image
                    src={items[0].image || ""}
                    alt={items[0].altDescription || ''}
                    width={100}
                    height={100}
                    sizes='100vw'
                  />
                </Link>
              </Slide>

              <Slide 
                style={{ padding: "8px", margin: "0 16px"}} 
                index={2}
              >
                <Link
                  href={items[1].link}
                >
                    <Image
                    src={items[1].image || ""}
                    alt={items[1].altDescription || ''}
                    width={100}
                    height={100}
                    sizes='100vw'
                  />
                </Link>
              </Slide>

              <Slide 
                style={{ padding: "8px", margin: "0 16px"}} 
                index={3}
              >
                <Link
                  href={items[3].link}
                >
                    <Image
                    src={items[3].image || ""}
                    alt={items[3].altDescription || ''}
                    width={100}
                    height={100}
                    sizes='100vw'
                  />
                </Link>
              </Slide>

              <Slide 
                style={{ padding: "8px", margin: "0 16px"}} 
                index={4}
              >
                <Link
                  href={items[4].link}
                >
                    <Image
                    src={items[4].image || ""}
                    alt={items[4].altDescription || ''}
                    width={100}
                    height={100}
                    sizes='100vw'
                  />
                </Link>
              </Slide>

            </Slider>
          </CarouselProvider>

      )
      

      }


    </GalleryContainer>
  );
};
