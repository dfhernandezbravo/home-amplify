import useAnalytics from '@/presentation/hooks/useAnalytics';
import useLinks from '@/presentation/hooks/useLink';
import { Container, LinkCaluga } from './Caluga.styles';
import { ImageCaluga } from './Caluga.styles';
import { useEffect, useRef } from 'react';
import useIsInViewport from '@/presentation/hooks/useIsInViewport';
import { ItemImpression } from '@/domain/entities/analytics/analytics';

type Props = {
  image: string;
  alt: string;
  link: string;
  width: number;
  description: string;
  index: number;
  maxHeight?: boolean;
  handlePromotionsImpressions?: (item: ItemImpression, index: number) => void;
};

const Caluga = (props: Props) => {
  const { getLink, sendEvent } = useLinks();
  const {
    methods: { sendPromotionClickEvent },
  } = useAnalytics();
  const ref = useRef(null);
  const { isIntersecting, observer } = useIsInViewport(ref);

  const { image, alt, link, width, index, handlePromotionsImpressions } =
    props;

  useEffect(() => {
    if (isIntersecting) {
      handlePromotionsImpressions?.(
        {
          image,
          title: alt,
        },
        index,
      );

      if (ref.current) {
        observer.unobserve(ref.current);
      }
    }
  }, [isIntersecting]);

  const handleCalugaClick = () => {
    const promotions = [
      {
        id: 'Banner Secundario',
        name: `${alt}`,
        creative: `${image}`,
        position: `Banner Secundario ${index + 1}`,
      },
    ];

    sendPromotionClickEvent({
      event: 'promotionClick',
      ecommerce: {
        promoClick: {
          promotions,
        },
      },
    });
  };

  return (
    <Container width={width}>
      <LinkCaluga
        href={getLink(link)}
        onClick={(e) => {
          e.stopPropagation();
          handleCalugaClick();
          sendEvent(link);
        }}
        ref={ref}
        style={{
          maxWidth: props?.maxHeight ? 350 : 'auto',
          }} 
      >
        <ImageCaluga src={image} alt={alt} 
        style={{
          maxHeight: props?.maxHeight ? 350 : 'auto', 
          minHeight: props?.maxHeight ? 350 : 'auto',
          maxWidth: props?.maxHeight ? 350 : 'auto',
          }} />
      </LinkCaluga>
    </Container>
  );
};

export default Caluga;
