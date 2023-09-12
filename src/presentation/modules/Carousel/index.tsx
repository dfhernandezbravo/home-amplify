import {
  ItemImpression,
  Promotion,
} from '@/domain/entities/analytics/analytics';
import { ContentBody } from '@/domain/entities/content/content.types';
import useAnalytics from '@/presentation/hooks/useAnalytics';
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Dot,
  Slider,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { useEffect, useState } from 'react';
import { GrNext, GrPrevious } from 'react-icons/gr';
import {
  CarouselDot,
  CarouselDotContainer,
  CarouselNavButton,
  CarouselWrapper,
} from './Carousel.styles';
import CarouselSlide from './CarouselSlide';

const Carousel = ({ items }: ContentBody) => {
  const {
    methods: { sendPromotionImpressionEvent },
  } = useAnalytics();
  const [promotions, setPromotions] = useState<Promotion[]>([]);

  const handlePromotionsImpressions = (item: ItemImpression, index: number) => {
    const promotion = {
      id: 'Banner Full',
      name: `${item.alt}`,
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

      setPromotions([]);
    }
  }, [promotions, sendPromotionImpressionEvent]);

  return (
    <CarouselWrapper>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={25}
        totalSlides={items.length}
        isPlaying={true}
        infinite={false}
        interval={4000}
        isIntrinsicHeight={true}
      >
        <Slider>
          {items.map((item, index) => (
            <CarouselSlide
              key={index}
              index={index}
              item={item}
              handlePromotionsImpressions={() =>
                handlePromotionsImpressions(item as ItemImpression, index)
              }
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
            <Dot slide={index} key={item.link}>
              <CarouselDot />
            </Dot>
          ))}
        </CarouselDotContainer>
      </CarouselProvider>
    </CarouselWrapper>
  );
};

export default Carousel;
