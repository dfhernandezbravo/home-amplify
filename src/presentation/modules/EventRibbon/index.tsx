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
import useBreakpoints from '@/presentation/hooks/useBreakpoints';

/**
 * @deprecated
 * @param props
 * @returns
 */
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
  }, [isIntersecting]);

  const checkBreakpoint = (): boolean => {
    return isSm || isMd || (!isSm && !isLg && !isMd);
  };

  const mobileBreakpoint = checkBreakpoint();

  const imageByBreakpoint = () => {
    return mobileBreakpoint ? props?.imageMobile : props?.imageDesktop;
  };

  const styleByBrekpoint = (style: string) => {
    return mobileBreakpoint ? style : '';
  };

  const checkLink = (link?: string) => {
    return link || '';
  };

  return (
    <Container background={props.backgroundColor}>
      <Link
        href={getLink(checkLink(props.link))}
        onClick={(e) => {
          e.stopPropagation();
          handleRibbonClick();
          sendEvent(checkLink(props.link));
        }}
        ref={ref}
      >
        <ImageRibbonContainer
          fullWidth={props.fullWidth}
          style={{
            width: styleByBrekpoint('auto'),
            margin: styleByBrekpoint('0px 20px 0px 20px'),
          }}
        >
          <ImageRibbon
            src={imageByBreakpoint()}
            alt={props.alt}
            title={props.alt}
          />
        </ImageRibbonContainer>
      </Link>
    </Container>
  );
};

export default EventRibbon;
