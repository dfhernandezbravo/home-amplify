import Link from 'next/link';
import { ItemContainer } from './FeaturedCategories.styles';
import { FeaturedCategoriesItemImpressionsProps } from '@/domain/entities/analytics/analytics';
import useAnalytics from '@/presentation/hooks/useAnalytics';
import { useEffect, useRef } from 'react';
import useIsInViewport from '@/presentation/hooks/useIsInViewport';
import useLinks from '@/presentation/hooks/useLink';
import Image from 'next/image';
import { ItemContent } from '@/domain/entities/content/content.types';

const FeaturedCategoriesItem = (
  props: FeaturedCategoriesItemImpressionsProps,
) => {
  // Hooks
  const { getLink, sendEvent } = useLinks();
  const {
    methods: { sendPromotionClickEvent },
  } = useAnalytics();
  const ref = useRef(null);
  const { isIntersecting, observer } = useIsInViewport(ref);

  // Props
  const { item, index, handlePromotionsImpressions } = props;

  const handleFeaturedCategoriesClick = (item: ItemContent) => {
    const promotions = [
      {
        id: 'Banner Principal',
        name: `${item.title}`,
        creative: `${item.image}`,
        position: `Banner Principal ${index + 1}`,
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
    if (isIntersecting) {
      handlePromotionsImpressions?.(
        {
          image: item.image,
          title: item.title,
        },
        index,
      );

      if (ref.current) {
        observer.unobserve(ref.current);
      }
    }
  }, [isIntersecting]);

  return (
    <ItemContainer key={`gallery_item_${index}`}>
      <Link
        href={getLink(item.link)}
        onClick={(e) => {
          e.stopPropagation();
          handleFeaturedCategoriesClick(item);
          sendEvent(item.link);
        }}
        ref={ref}
      >
        <Image
          src={item?.image || item?.mobileImage}
          alt={item.title}
          width={100}
          height={100}
          sizes="100vw"
        />
      </Link>
    </ItemContainer>
  );
};

export default FeaturedCategoriesItem;
