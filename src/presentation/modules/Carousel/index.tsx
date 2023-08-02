import { CarouselStruct, ItemStruct } from './Carousel.types';
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
import useBreakpoints from '@/presentation/hooks/useBreakpoints';
import useAnalytics from '@/presentation/hooks/useAnalytics';

const Carousel = (props: CarouselStruct) => {
  const { items } = props;

  // hooks
  const { isLg, isSm } = useBreakpoints();
  const {
    methods: { sendPromotionClickEvent },
  } = useAnalytics();

  const handleSlideClick = (item: ItemStruct, index: number) => {
    const promotions = [
      {
        id: 'Banner Full',
        name: `${item.title}`,
        creative: `${isLg || isSm ? item.image : item.mobileImage}`,
        position: `Banner Full ${index + 1}`,
      },
    ];

    sendPromotionClickEvent({
      event: 'promotionClick',
      ecommerce: {
        promoClick: {
          promotions,
        },
      },
    });
  };

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
              <Link
                href={item.link}
                onClick={(e) => {
                  e.stopPropagation();
                  handleSlideClick(item, index);
                }}
              >
                <CarouselImageContainer>
                  {item.image && item.mobileImage && (
                    <img
                      src={isLg || isSm ? item.image : item.mobileImage}
                      alt={item.title}
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

export default Carousel;
