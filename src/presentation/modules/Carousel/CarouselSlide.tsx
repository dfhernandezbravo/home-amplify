import { ItemImpressionsProps } from '@/domain/entities/analytics/analytics';
import useAnalytics from '@/presentation/hooks/useAnalytics';
import useBreakpoints from '@/presentation/hooks/useBreakpoints';
import { Slide } from 'pure-react-carousel';
import Link from 'next/link';
import { CarouselImageContainer } from './Carousel.styles';
import { useEffect, useRef } from 'react';
import useIsInViewport from '@/presentation/hooks/useIsInViewport';
import useLinks from '@/presentation/hooks/useLink';

const CarouselSlide = (props: ItemImpressionsProps) => {
  // Hooks
  const { isLg, isSm } = useBreakpoints();
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
      id: 'Banner Full',
      name: `${item.title}`,
      creative: `${isLg || isSm ? item.image : item.mobileImage}`,
      position: `Banner Full ${index + 1}`,
    },
  ];

  const handleSlideClick = () => {
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
          title: item.title,
        },
        index,
      );

      if (ref.current) {
        observer.unobserve(ref.current);
      }
    }
  }, [isIntersecting]);

  return (
    <Slide key={item.title} index={index}>
      <Link
        href={getLink(item.link)}
        onClick={(e) => {
          e.stopPropagation();
          handleSlideClick();
          sendEvent(item.link);
        }}
        ref={ref}
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
  );
};

export default CarouselSlide;
