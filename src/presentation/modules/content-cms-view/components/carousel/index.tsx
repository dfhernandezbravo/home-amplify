import { Promotion } from '@/domain/entities/analytics/analytics';
import {
  ContentBody,
  ItemContent,
} from '@/domain/entities/content/content.types';
import SwiperBit from '@/presentation/components/atoms/Swiper';
import useAnalytics from '@/presentation/hooks/useAnalytics';
import { isDateInRange } from '@/presentation/hooks/useTimeValidator';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { useEffect, useState } from 'react';
import RenderImageCarousel from './image-carousel';
import { SwiperContainer } from './styles';

const Carousel = ({ items, isActive, startDate, endDate }: ContentBody) => {
  const {
    methods: { sendPromotionImpressionEvent },
  } = useAnalytics();
  const [promotions, setPromotions] = useState<Promotion[]>([]);

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

  if (!isActive) return <></>;

  return (
    <>
      {isDateInRange(startDate, endDate) && (
        <SwiperContainer>
          <SwiperBit
            arialabel="btn-swiper"
            slidesPerGroup={1}
            slidesPerView={1}
            items={items}
            renderItem={(item) => (
              <RenderImageCarousel item={item as ItemContent} />
            )}
            autoPlay={true}
            isLoop
            hasActionButton
            hasPagination
            paginationStyle="dot"
          />
        </SwiperContainer>
      )}
    </>
  );
};

export default Carousel;
