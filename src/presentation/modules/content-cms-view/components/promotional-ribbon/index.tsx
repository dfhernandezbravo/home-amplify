import { ContentBody } from '@/domain/entities/content/content.types';
import useAnalytics from '@/presentation/hooks/useAnalytics';
import useBreakpoints from '@/presentation/hooks/useBreakpoints';
//import useIsInViewport from '@/presentation/hooks/useIsInViewport';
import { useEffect, useRef } from 'react';
import { ImageRibbon, Container } from './styles';

const PromotionalRibbon = ({
  alt,
  imageDesktop,
  imageMobile,
  backgroundColor,
  link,
  fullWidth,
}: ContentBody) => {
  const {
    methods: { sendPromotionClickEvent },
  } = useAnalytics();
  const { device } = useBreakpoints();
  const ref = useRef(null);
  //const { isIntersecting, observer } = useIsInViewport(ref);

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

  useEffect(() => {}, [device]);
  /*
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
*/
  return (
    <Container
      background={backgroundColor}
      href={link}
      onClick={(e) => {
        e.stopPropagation();
        handleRibbonClick();
      }}
      ref={ref}
    >
      <ImageRibbon
        fullWidth={fullWidth}
        src={device === 'Desktop' ? imageDesktop : imageMobile}
        alt={alt}
        title={alt}
        width={0}
        height={0}
        sizes="100vw"
      />
    </Container>
  );
};

export default PromotionalRibbon;
