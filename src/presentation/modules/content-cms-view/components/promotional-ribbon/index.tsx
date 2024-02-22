import { ContentBody } from '@/domain/entities/content/content.types';
import useAnalytics from '@/presentation/hooks/useAnalytics';
import useBreakpoints from '@/presentation/hooks/useBreakpoints';
//import useIsInViewport from '@/presentation/hooks/useIsInViewport';
import { useEffect, useRef } from 'react';
import { ImageRibbon, Container } from './styles';
import useRedirectLink from '@/presentation/hooks/useRedirectLink';
import { isDateInRange } from '@/presentation/hooks/useTimeValidator';

const PromotionalRibbon = ({
  alt,
  imageDesktop,
  imageMobile,
  backgroundColor,
  link,
  fullWidth,
  isActive,
  startDate,
  endDate,
}: ContentBody) => {
  const {
    methods: { sendPromotionClickEvent },
  } = useAnalytics();
  const { device, isXs } = useBreakpoints();
  const ref = useRef(null);
  //const { isIntersecting, observer } = useIsInViewport(ref);
  const { redirect } = useRedirectLink();

  const promotions = [
    {
      id: 'Banner Principal',
      name: alt,
      creative: isXs ? imageMobile : imageDesktop,
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

  if (!isActive) return <></>;

  return (
    <>
      {isDateInRange(startDate, endDate) && (
        <Container
          background={backgroundColor}
          href={redirect(link)}
          onClick={(e) => {
            e.stopPropagation();
            handleRibbonClick();
          }}
          ref={ref}
          fullwidth={fullWidth.toString()}
        >
          <ImageRibbon
            src={!isXs ? imageDesktop : imageMobile}
            alt={alt}
            title={alt}
            width={100}
            height={100}
            sizes="100vw"
          />
        </Container>
      )}
    </>
  );
};

export default PromotionalRibbon;
