/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { ItemStruct } from '../../Categories.types';
import { Icon, IconsWrapper } from './IconsContainer.styles';
import useAnalytics from '@/presentation/hooks/useAnalytics';
import { ItemImpression } from '@/domain/entities/analytics/analytics';
import { useEffect, useRef } from 'react';
import useIsInViewport from '@/presentation/hooks/useIsInViewport';
import useLinks from '@/presentation/hooks/useLink';

type IconsStruct = {
  items: ItemStruct[];
  indexArray: number;
  handlePromotionsImpressions?: (item: ItemImpression, index: number) => void;
};

const IconsContainer = ({
  items,
  indexArray,
  handlePromotionsImpressions,
}: IconsStruct) => {
  const { getLink, sendEvent } = useLinks();
  const {
    methods: { sendPromotionClickEvent },
  } = useAnalytics();
  const firstIconsRef = useRef(null);
  const secondIconsRef = useRef(null);
  const {
    isIntersecting: isIntersectingFirstIcons,
    observer: observerFirstIcons,
  } = useIsInViewport(firstIconsRef);
  const {
    isIntersecting: isIntersectingSecondIcons,
    observer: observerSecondIcons,
  } = useIsInViewport(secondIconsRef);

  const index = indexArray * 2;

  const handleCategoryClick = (item: ItemStruct, index: number) => {
    const promotions = [
      {
        id: 'Burbuja',
        name: `${item.title}`,
        creative: `${item.image}`,
        position: `Burbuja ${index + 1}`,
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

  useEffect(() => {
    if (isIntersectingFirstIcons) {
      handlePromotionsImpressions?.(
        {
          image: items[index].image,
          title: items[index].title,
        },
        index,
      );

      if (firstIconsRef.current) {
        observerFirstIcons.unobserve(firstIconsRef.current);
      }
    }
  }, [isIntersectingFirstIcons]);

  useEffect(() => {
    if (isIntersectingSecondIcons) {
      handlePromotionsImpressions?.(
        {
          image: items[index + 1].image,
          title: items[index + 1].title,
        },
        index + 1,
      );

      if (secondIconsRef.current) {
        observerSecondIcons.unobserve(secondIconsRef.current);
      }
    }
  }, [isIntersectingSecondIcons]);

  return (
    <IconsWrapper>
      <Icon>
        <Link
          href={getLink(items[index].link)}
          onClick={(e) => {
            e.stopPropagation();
            handleCategoryClick(items[index], index);
            sendEvent(items[index].link);
          }}
          ref={firstIconsRef}
        >
          <img src={items[index].image} alt={items[index].title} />
          <p>{items[index].title}</p>
        </Link>
      </Icon>

      <Icon>
        <Link
          href={getLink(items[index + 1].link)}
          onClick={(e) => {
            e.stopPropagation();
            handleCategoryClick(items[index + 1], index);
            sendEvent(items[index + 1].link);
          }}
          ref={secondIconsRef}
        >
          <img src={items[index + 1].image} alt={items[index + 1].title} />
          <p>{items[index + 1].title}</p>
        </Link>
      </Icon>
    </IconsWrapper>
  );
};

export default IconsContainer;
