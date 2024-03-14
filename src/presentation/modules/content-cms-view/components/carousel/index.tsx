import { Promotion } from '@/domain/entities/analytics/analytics';
import {
  ContentBody,
  ItemContent,
} from '@/domain/entities/content/content.types';
import useAnalytics from '@/presentation/hooks/useAnalytics';
import { isDateInRange } from '@/presentation/hooks/useTimeValidator';
import { SwiperEasyProps } from '@ccom-easy-design-system/molecules.swiper';
import dynamic from 'next/dynamic';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { useEffect, useState } from 'react';
import RenderImageCarousel from './image-carousel';
import { SwiperContainer } from './styles';

const Skeleton = dynamic(
  () =>
    import('@ccom-easy-design-system/atoms.skeleton').then(
      (module) => module.Skeleton,
    ),
  { ssr: false, loading: () => <></> },
);

const Swiper = dynamic<SwiperEasyProps<ItemContent>>(
  () =>
    import('@ccom-easy-design-system/molecules.swiper').then(
      (module) => module.Swiper,
    ),
  { ssr: false, loading: () => <Skeleton height={'60vh'} /> },
);

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
          <Swiper
            arialabel="btn-swiper"
            slidesPerGroup={1}
            slidesPerView={1}
            items={items}
            renderItem={(item) => <RenderImageCarousel item={item} />}
            autoPlay={true}
            isLoop
            hasActionButton
            isPositionAbsoluteButtons
            hasPagination
            paginationStyle="dot"
          />
        </SwiperContainer>
      )}
    </>
  );
};

export default Carousel;
