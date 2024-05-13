import { ItemImpression } from '@/domain/entities/analytics/analytics';
import useAnalytics from '@/presentation/hooks/useAnalytics';
import useIsInViewport from '@/presentation/hooks/useIsInViewport';
import React, { useEffect, useRef, useState } from 'react';
import {
  ContainerCard,
  LinkCard,
  ImageCard,
  ImageContainer,
  BoxContainer,
} from './style';
import useRedirectLink from '@/presentation/hooks/useRedirectLink';

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
  isInSwiper?: boolean;
};

const Card = ({
  image,
  alt,
  link,
  width,
  index,
  handlePromotionsImpressions,
  hasMultipleRows,
  isInSwiper,
}: Props) => {
  const ref = useRef(null);
  const [isLoadImage, setIsLoadImage] = useState<boolean>(false);
  const { redirect } = useRedirectLink();

  const { isIntersecting, observer } = useIsInViewport(ref);
  const {
    methods: { sendPromotionClickEvent },
  } = useAnalytics();

  useEffect(() => {
    if (isIntersecting) {
      handlePromotionsImpressions?.(
        {
          image,
          alt: alt,
        },
        index,
      );

      if (ref.current) {
        if (observer) observer.unobserve(ref.current);
      }
    }
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
    <ContainerCard hasmultiplerows={hasMultipleRows.toString()} width={width}>
      <LinkCard
        data-id={link.includes('cluster') ? 'cluster-link' : ''}
        rel="dns-prefetch"
        href={isLoadImage ? link && redirect(link) : ''}
        onClick={(e) => {
          e.stopPropagation();
          handleCardClick();
        }}
        ref={ref}
      >
        <BoxContainer isInSwiper={isInSwiper}>
          <ImageContainer>
            <ImageCard
              src={image}
              alt={alt}
              onLoad={() => setIsLoadImage(true)}
              width={0}
              height={0}
              sizes="100vw"
              loading="lazy"
            />
          </ImageContainer>
        </BoxContainer>
      </LinkCard>
    </ContainerCard>
  );
};

export default Card;
