import { ItemImpression } from '@/domain/entities/analytics/analytics';
import useAnalytics from '@/presentation/hooks/useAnalytics';
import useIsInViewport from '@/presentation/hooks/useIsInViewport';
import useLinks from '@/presentation/hooks/useLink';
import React, { useEffect, useRef, useState } from 'react';
import { ContainerCard, LinkCard, ImageCard, ImageContainer } from './style';

type Props = {
  image: string;
  alt: string;
  link: string;
  width: number;
  description: string;
  index: number;
  isMaxHeight?: boolean;
  handlePromotionsImpressions?: (item: ItemImpression, index: number) => void;
  hasMultipleRows: boolean;
};

const Card = ({
  image,
  alt,
  link,
  width,
  index,
  handlePromotionsImpressions,
  hasMultipleRows,
}: Props) => {
  const ref = useRef(null);
  const [isLoadImage, setIsLoadImage] = useState<boolean>(false);

  const { getLink, sendEvent } = useLinks();
  const { isIntersecting, observer } = useIsInViewport(ref);
  const {
    methods: { sendPromotionClickEvent },
  } = useAnalytics();

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isIntersecting]);

  const handleCardClick = () => {
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
    <ContainerCard hasMultipleRows={hasMultipleRows} width={width}>
      <LinkCard
        href={isLoadImage ? getLink(link) : ''}
        onClick={(e) => {
          e.stopPropagation();
          handleCardClick();
          sendEvent(link);
        }}
        ref={ref}
      >
        <ImageContainer>
          <ImageCard
            src={image}
            alt={alt}
            onLoad={() => setIsLoadImage(true)}
            width={0}
            height={0}
            sizes="100vw"
          />
        </ImageContainer>
      </LinkCard>
    </ContainerCard>
  );
};

export default Card;
