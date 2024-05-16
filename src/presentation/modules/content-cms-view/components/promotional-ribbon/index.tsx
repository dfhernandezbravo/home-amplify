import { ContentBody } from '@/domain/entities/content/content.types';
import useAnalytics from '@/presentation/hooks/useAnalytics';
import useBreakpoints from '@/presentation/hooks/useBreakpoints';
import { useEffect, useRef, useState } from 'react';
import { ImageRibbon, Container } from './styles';
import useRedirectLink from '@/presentation/hooks/useRedirectLink';
import { isDateInRange } from '@/presentation/hooks/useTimeValidator';
import dynamic from 'next/dynamic';
import LazyLoad from 'react-lazyload';

const Skeleton = dynamic(
  () =>
    import('@ccom-easy-design-system/atoms.skeleton').then(
      (module) => module.Skeleton,
    ),
  { ssr: false, loading: () => <></> },
);

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
  const { isXs } = useBreakpoints();
  const ref = useRef(null);
  const { redirect } = useRedirectLink();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [image, setImage] = useState(imageDesktop);

  useEffect(() => {
    if (isXs && imageMobile) {
      setImage(imageMobile);
    } else {
      setImage(imageDesktop);
    }
  }, [isXs]);

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

  if (!isActive || !isDateInRange(startDate, endDate)) return <></>;

  return (
    <LazyLoad throttle={300} height={300}>
      <Container
        className="fade-in"
        background={backgroundColor}
        href={redirect(link)}
        onClick={(e) => {
          e.stopPropagation();
          handleRibbonClick();
        }}
        ref={ref}
        $fullwidth={fullWidth}
      >
        <ImageRibbon
          src={image}
          alt={alt}
          title={alt}
          width={100}
          height={100}
          sizes="100vw"
          onLoad={() => setImageLoaded(true)}
          $isloaded={imageLoaded}
        />
        {!imageLoaded && (
          <Skeleton animationtype="pulse" height={'40px'} width={'100%'} />
        )}
      </Container>
    </LazyLoad>
  );
};

export default PromotionalRibbon;
