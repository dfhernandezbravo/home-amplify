import useAnalytics from '@/presentation/hooks/useAnalytics';
import { Container, LinkCaluga } from './Caluga.styles';
import { ImageCaluga } from './Caluga.styles';
import { useEffect, useRef } from 'react';
import useIsInViewport from '@/presentation/hooks/useIsInViewport';
import { ItemImpression } from '@/domain/entities/analytics/analytics';

type Props = {
  image: string;
  title: string;
  link: string;
  width: string;
  description: string;
  index: number;
  handlePromotionsImpressions?: (item: ItemImpression, index: number) => void;
};

const Caluga = (props: Props) => {
  const {
    methods: { sendPromotionClickEvent },
  } = useAnalytics();
  const ref = useRef(null);
  const { isIntersecting, observer } = useIsInViewport(ref);

  const { image, title, link, width, index, handlePromotionsImpressions } =
    props;

  useEffect(() => {
    if (isIntersecting) {
      handlePromotionsImpressions?.(
        {
          image,
          title,
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
        name: `${title}`,
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
        href={link}
        target="_parent"
        onClick={(e) => {
          e.stopPropagation();
          handleCalugaClick();
        }}
        ref={ref}
      >
        <ImageCaluga src={image} width={420} height={100} alt={title} />
      </LinkCaluga>
    </Container>
  );
};

export default Caluga;
