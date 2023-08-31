import Link from 'next/link';
import Container from './EventRibbon.styles';
import { IsMobile } from '@/presentation/hooks/utils';
import useAnalytics from '@/presentation/hooks/useAnalytics';
import { useEffect, useRef } from 'react';
import useIsInViewport from '@/presentation/hooks/useIsInViewport';
import useLinks from '@/presentation/hooks/useLink';
import { ContentBody } from '@/domain/entities/content/content.types';
import Image from 'next/image';

const EventRibbon = (props: ContentBody) => {
  // Hooks
  const { getLink, sendEvent } = useLinks();
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
      creative: `${isMobile ? props?.imageMobile : props?.imageDesktop}`,
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isIntersecting]);

  const dynamicWidth = ({
    fullWidth,
    isMobile,
  }: {
    fullWidth: boolean;
    isMobile: boolean;
  }): string => {
    const defaultValue = '100%';
    if (isMobile || (!isMobile && fullWidth)) return defaultValue;
    if (!fullWidth) return '77rem';
    return defaultValue;
  };

  return (
    <Container style={{ backgroundColor: props?.backgroundColor || '#f9f9f9' }}>
      <Link
        href={getLink(props.link || '')}
        onClick={(e) => {
          e.stopPropagation();
          handleRibbonClick();
          sendEvent(props.link || '');
        }}
        ref={ref}
      >
        <Image
          src={IsMobile() ? props?.imageMobile : props?.imageDesktop}
          alt={props.alt}
          title={props.alt}
          style={{
            width: dynamicWidth({
              fullWidth: props.fullWidth || true,
              isMobile: IsMobile(),
            }),
          }}
        />
      </Link>
    </Container>
  );
};

export default EventRibbon;
