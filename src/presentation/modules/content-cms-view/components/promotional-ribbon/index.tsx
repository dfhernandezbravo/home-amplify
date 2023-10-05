import { ContentBody } from '@/domain/entities/content/content.types';
import useAnalytics from '@/presentation/hooks/useAnalytics';
import useBreakpoints from '@/presentation/hooks/useBreakpoints';
import useIsInViewport from '@/presentation/hooks/useIsInViewport';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import Container, { ImageRibbon, ImageRibbonContainer } from './styles';

const PromotionalRibbon = ({
  alt,
  imageDesktop,
  imageMobile,
  backgroundColor,
  link,
  fullWidth,
}: ContentBody) => {
  const {
    methods: { sendPromotionClickEvent, sendPromotionImpressionEvent },
  } = useAnalytics();
  const { device } = useBreakpoints();
  const ref = useRef(null);
  const { isIntersecting, observer } = useIsInViewport(ref);

  const promotions = [
    {
      id: 'Banner Principal',
      name: alt,
      creative: device === 'Desktop' ? imageDesktop : imageMobile,
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
    <Container background={backgroundColor}>
      <Link
        href={link}
        onClick={(e) => {
          e.stopPropagation();
          handleRibbonClick();
        }}
        ref={ref}
      >
        <ImageRibbonContainer fullWidth={fullWidth}>
          <ImageRibbon
            src={device === 'Desktop' ? imageDesktop : imageMobile}
            alt={alt}
            title={alt}
          />
        </ImageRibbonContainer>
      </Link>
    </Container>
  );
};

export default PromotionalRibbon;
