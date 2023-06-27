import { CarouselProvider, Dot, Slide, Slider } from 'pure-react-carousel';
import { Dots, DotContainer, Wrapper } from './CarouselCategories.styles';
import Link from 'next/link';
import Image from 'next/image';
import {
  ItemStruct,
} from '../FeaturedCategories.types';

const CarouselCategories = ( {items} : { items: ItemStruct[]; }) => {
  return (
    <Wrapper>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={25}
        totalSlides={items.length}
        isIntrinsicHeight={true}
        visibleSlides={1.15}
      >
        <Slider
          style={{
            height: 'fit-content',
          }}
        >
          {items.map((item: ItemStruct, index: number) => (
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

        <DotContainer>
          {items.map((item, index) => (
            <Dot slide={index} key={index}>
              <div>
                <Dots />
              </div>
            </Dot>
          ))}
        </DotContainer>
      </CarouselProvider>
    </Wrapper>
  );
};

export default CarouselCategories;
