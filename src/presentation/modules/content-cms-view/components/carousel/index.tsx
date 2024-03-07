import { Promotion } from '@/domain/entities/analytics/analytics';
import {
  ContentBody,
  ItemContent,
} from '@/domain/entities/content/content.types';
import useAnalytics from '@/presentation/hooks/useAnalytics';
import Image from 'next/image';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { useEffect, useState } from 'react';
import { ImageCarousel, SwiperContainer } from './styles';
import useBreakpoints from '@/presentation/hooks/useBreakpoints';
import Link from 'next/link';
import useRedirectLink from '@/presentation/hooks/useRedirectLink';
import dynamic from 'next/dynamic';
import { isDateInRange } from '@/presentation/hooks/useTimeValidator';

const Skeleton = dynamic(
  () =>
    import('@ccom-easy-design-system/atoms.skeleton').then(
      (module) => module.Skeleton,
    ),
  { ssr: false, loading: () => <></> },
);

const Swiper = dynamic(
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
  const { isLg, isMd } = useBreakpoints();
  const { redirect } = useRedirectLink();

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

  const renderItem = (item: ItemContent | unknown) => {
    const { link, image, mobileImage, alt } = item as ItemContent;
    return (
      <ImageCarousel>
        <Link href={redirect(link)}>
          <Image
            src={isLg || isMd ? image : mobileImage}
            width={0}
            height={0}
            sizes="100vw"
            fill
            alt={alt}
            priority
            loading="eager"
          />
        </Link>
      </ImageCarousel>
    );
  };

  if (!isActive) return <></>;

  return (
    <>
      {isDateInRange(startDate, endDate) && (
        <SwiperContainer>
          <Swiper
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
        </SwiperContainer>
      )}
    </>
  );
};

export default Carousel;
