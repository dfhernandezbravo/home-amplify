import { CarouselProvider, Dot, Slider } from 'pure-react-carousel';
import { Dots, DotContainer, Wrapper } from './CarouselCategories.styles';
import { ItemStruct } from '../FeaturedCategories.types';
import useAnalytics from '@/presentation/hooks/useAnalytics';
import { useEffect, useState } from 'react';
import CarouselSlide from './CarouselSlide';
import {
  ItemImpression,
  Promotion,
} from '@/domain/entities/analytics/analytics';

const CarouselCategories = ({ items }: { items: ItemStruct[] }) => {
  const {
    methods: { sendPromotionImpressionEvent },
  } = useAnalytics();
  const [promotions, setPromotions] = useState<Promotion[]>([]);

  const handlePromotionsImpressions = (item: ItemImpression, index: number) => {
    const promotion = {
      id: 'Banner Principal',
      name: `${item.title}`,
      creative: `${item.image}`,
      position: `Banner Principal ${index + 1}`,
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
            <CarouselSlide
              key={index}
              item={item}
              index={index}
              handlePromotionsImpressions={handlePromotionsImpressions}
            />
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
