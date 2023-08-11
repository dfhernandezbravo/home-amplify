import Link from 'next/link';
import { ItemContainer } from './FeaturedCategories.styles';
import { FeaturedCategoriesItemImpressionsProps } from '@/domain/entities/analytics/analytics';
import { ItemStruct } from './FeaturedCategories.types';
import useAnalytics from '@/presentation/hooks/useAnalytics';
import { useEffect, useRef } from 'react';
import useIsInViewport from '@/presentation/hooks/useIsInViewport';
import useLinks from '@/presentation/hooks/useLink';

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

  const handleFeaturedCategoriesClick = (item: ItemStruct) => {
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
        <img
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
