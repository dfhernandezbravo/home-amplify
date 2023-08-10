import { CarouselStruct } from './Carousel.types';
import { GrNext, GrPrevious } from 'react-icons/gr';

import 'pure-react-carousel/dist/react-carousel.es.css';
import {
  CarouselProvider,
  Slider,
  ButtonBack,
  ButtonNext,
  Dot,
} from 'pure-react-carousel';
import {
  CarouselDot,
  CarouselDotContainer,
  CarouselNavButton,
  CarouselWrapper,
} from './Carousel.styles';
import useAnalytics from '@/presentation/hooks/useAnalytics';
import CarouselSlide from './CarouselSlide';
import { useEffect, useState } from 'react';
import {
  ItemImpression,
  Promotion,
} from '@/domain/entities/analytics/analytics';

const Carousel = (props: CarouselStruct) => {
  const { items } = props;

  // hooks
  const {
    methods: { sendPromotionImpressionEvent },
  } = useAnalytics();
  const [promotions, setPromotions] = useState<Promotion[]>([]);

  const handlePromotionsImpressions = (item: ItemImpression, index: number) => {
    const promotion = {
      id: 'Banner Full',
      name: `${item.title}`,
      creative: `${item.image}`,
      position: `Banner Full ${index + 1}`,
    };

    setPromotions((prev) => [...prev, promotion]);
  };

  useEffect(() => {
    if (promotions.length) {
      sendPromotionImpressionEvent({
        event: 'promotionsViews',
        ecommerce: {
          promoView: {
            promotions,
          },
        },
      });

      // Remove previous promotions to avoid duplication
      setPromotions([]);
    }
  }, [promotions]);

  return (
    <CarouselWrapper>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={25}
        totalSlides={items.length}
        isPlaying={false}
        infinite={false}
        interval={3500}
        isIntrinsicHeight={true}
      >
        <Slider>
          {items.map((item, index) => (
            <CarouselSlide
              key={index}
              index={index}
              item={item}
              handlePromotionsImpressions={handlePromotionsImpressions}
            />
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
              <CarouselDot />
            </Dot>
          ))}
        </CarouselDotContainer>
      </CarouselProvider>
    </CarouselWrapper>
  );
};

export default Carousel;
