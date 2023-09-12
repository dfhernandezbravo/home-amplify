import { Slide } from 'pure-react-carousel';
import Link from 'next/link';
import Image from 'next/image';
import useAnalytics from '@/presentation/hooks/useAnalytics';
import { useEffect, useRef } from 'react';
import useIsInViewport from '@/presentation/hooks/useIsInViewport';
import { FeaturedCategoriesItemImpressionsProps } from '@/domain/entities/analytics/analytics';
import useLinks from '@/presentation/hooks/useLink';

const CarouselSlide = (props: FeaturedCategoriesItemImpressionsProps) => {
  // Hooks
  const { getLink, sendEvent } = useLinks();
  const {
    methods: { sendPromotionClickEvent },
  } = useAnalytics();
  const ref = useRef(null);
  const { isIntersecting, observer } = useIsInViewport(ref);

  // Props
  const { index, item, handlePromotionsImpressions } = props;

  const promotions = [
    {
      id: 'Banner Principal',
      name: `${item.title}`,
      creative: `${item.mobileImage}`,
      position: `Banner Principal ${index + 1}`,
    },
  ];

  const handleFeaturedCategoriesClick = () => {
    sendPromotionClickEvent({
      event: 'promotionClick',
      ecommerce: {
        promoClick: {
          promotions,
        },
      },
    });
  };

  useEffect(() => {
    if (isIntersecting) {
      handlePromotionsImpressions?.(
        {
          image: item.mobileImage,
          alt: item.title,
        },
        index,
      );

      if (ref.current) {
        observer.unobserve(ref.current);
      }
    }
  }, [isIntersecting]);

  return (
    <Slide
      key={index}
      style={{ padding: '16px', margin: '0 16px' }}
      index={index}
    >
      <Link
        href={getLink(item.link)}
        onClick={(e) => {
          e.stopPropagation();
          handleFeaturedCategoriesClick();
          sendEvent(item.link);
        }}
        ref={ref}
      >
        <Image
          src={item.mobileImage}
          alt={item.title}
          width={100}
          height={100}
          sizes="100vw"
        />
      </Link>
    </Slide>
  );
};

export default CarouselSlide;
