import {
  ItemImpression,
  Promotion,
} from '@/domain/entities/analytics/analytics';
import { ItemContent } from '@/domain/entities/content/content.types';
import useAnalytics from '@/presentation/hooks/useAnalytics';
import { CarouselProvider, Dot, Slider } from 'pure-react-carousel';
import { useEffect, useState } from 'react';
import { DotContainer, Dots, Wrapper } from './CarouselCategories.styles';
import CarouselSlide from './CarouselSlide';

interface Props {
  items: ItemContent[];
}

const CarouselCategories = ({ items }: Props) => {
  const {
    methods: { sendPromotionImpressionEvent },
  } = useAnalytics();
  const [promotions, setPromotions] = useState<Promotion[]>([]);

  const handlePromotionsImpressions = (item: ItemImpression, index: number) => {
    const promotion = {
      id: 'Banner Principal',
      name: `${item.alt}`,
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
          {items.map((item, index: number) => (
            <CarouselSlide
              key={index}
              item={item}
              index={index}
              handlePromotionsImpressions={handlePromotionsImpressions}
            />
          ))}
        </Slider>

        <DotContainer>
          {items.map((_, index) => (
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
