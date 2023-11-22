import { Promotion } from '@/domain/entities/analytics/analytics';
import {
  ContentBody,
  ItemContent,
} from '@/domain/entities/content/content.types';
import SwiperEasy from '@/presentation/components/molecules/swiper';
import useAnalytics from '@/presentation/hooks/useAnalytics';
import Image from 'next/image';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { useEffect, useState } from 'react';
import { ImageCarousel } from './styles';
import useBreakpoints from '@/presentation/hooks/useBreakpoints';

const Carousel = ({ items }: ContentBody) => {
  const {
    methods: { sendPromotionImpressionEvent },
  } = useAnalytics();
  const [promotions, setPromotions] = useState<Promotion[]>([]);
  const { device } = useBreakpoints();

  // const handlePromotionsImpressions = (item: ItemImpression, index: number) => {
  //   const promotion = {
  //     id: 'Banner Full',
  //     name: `${item.alt}`,
  //     creative: `${item.image}`,
  //     position: `Banner Full ${index + 1}`,
  //   };
  //   setPromotions((prev) => [...prev, promotion]);
  // };

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

  const renderItem = (item: ItemContent) => {
    return (
      <ImageCarousel>
        <Image
          src={device === 'Desktop' ? item.image : item.mobileImage}
          width={0}
          height={0}
          sizes="100vw"
          fill
          alt={item.alt}
        />
      </ImageCarousel>
    );
  };

  return (
    <SwiperEasy
      slidesPerGroup={1}
      slidesPerView={1}
      items={items}
      renderItem={renderItem}
      autoPlay={true}
      isLoop
      hasActionButton
      isPositionAbsoluteButtons
      hasPagination
      paginationStyle="dot"
    />
  );
};

export default Carousel;