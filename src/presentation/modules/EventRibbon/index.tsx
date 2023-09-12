import Link from 'next/link';
import Container, {
  ImageRibbon,
  ImageRibbonContainer,
} from './EventRibbon.styles';
import { IsMobile } from '@/presentation/hooks/utils';
import useAnalytics from '@/presentation/hooks/useAnalytics';
import { useEffect, useRef } from 'react';
import useIsInViewport from '@/presentation/hooks/useIsInViewport';
import useLinks from '@/presentation/hooks/useLink';
import { ContentBody } from '@/domain/entities/content/content.types';
import Image from 'next/image';
import useBreakpoints from '@/presentation/hooks/useBreakpoints';

const EventRibbon = (props: ContentBody) => {
  // Hooks
  const { getLink, sendEvent } = useLinks();
  const {
    methods: { sendPromotionClickEvent, sendPromotionImpressionEvent },
  } = useAnalytics();
  const isMobile = IsMobile();
  const { isLg, isMd, isSm } = useBreakpoints();
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

  const mobileBreakpoint = Boolean(isSm || isMd || (!isSm && !isLg && !isMd));

  return (
    <Container background={''}>
      <Link
        href={getLink(props.link || '')}
        onClick={(e) => {
          e.stopPropagation();
          handleRibbonClick();
          sendEvent(props.link || '');
        }}
        ref={ref}
      >
        <ImageRibbonContainer
          fullWidth={props.fullWidth}
          style={{
            width: mobileBreakpoint ? 'auto' : '',
            margin: mobileBreakpoint ? '0px 20px 0px 20px' : '',
          }}
        >
          <ImageRibbon
            src={mobileBreakpoint ? props?.imageMobile : props?.imageDesktop}
            alt={props.alt}
            title={props.alt}
          />
        </ImageRibbonContainer>
      </Link>
    </Container>
  );
};

export default EventRibbon;
