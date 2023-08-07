/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { EventRibbonStruct } from './EventRibbon.types';
import Container from './EventRibbon.styles';
import { IsMobile } from '@/presentation/hooks/utils';
import useAnalytics from '@/presentation/hooks/useAnalytics';
import { useEffect, useRef } from 'react';
import useIsInViewport from '@/presentation/hooks/useIsInViewport';

const EventRibbon = (props: EventRibbonStruct) => {
  // Hooks
  const {
    methods: { sendPromotionClickEvent, sendPromotionImpressionEvent },
  } = useAnalytics();
  const isMobile = IsMobile();
  const ref = useRef(null);
  const { isIntersecting, observer } = useIsInViewport(ref);

  const promotions = [
    {
      id: 'Banner Principal',
      name: `${props.alt}`,
      creative: `${isMobile ? props['image-mobile'] : props['image-desktop']}`,
      position: `Banner Principal 1`,
    },
  ];

  const handleRibbonClick = () => {
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
      sendPromotionImpressionEvent({
        event: 'promotionsViews',
        ecommerce: {
          promoView: {
            promotions,
          },
        },
      });

      if (ref.current) observer.unobserve(ref.current);
    }
  }, [isIntersecting]);

  return (
    <Container>
      <Link
        href={props.link}
        target="_parent"
        onClick={(e) => {
          e.stopPropagation();
          handleRibbonClick();
        }}
        ref={ref}
      >
        <img
          src={IsMobile() ? props['image-mobile'] : props['image-desktop']}
          alt={props.alt}
          width={100}
          height={100}
          sizes="100vw"
          title={props.alt}
        />
      </Link>
    </Container>
  );
};

export default EventRibbon;
