import Link from 'next/link';
import { ItemContainer } from './FeaturedCategories.styles';
import { FeaturedCategoriesItemImpressionsProps } from '@/domain/entities/analytics/analytics';
import { ItemStruct } from './FeaturedCategories.types';
import useAnalytics from '@/presentation/hooks/useAnalytics';
import { useEffect, useRef } from 'react';
import useIsInViewport from '@/presentation/hooks/useIsInViewport';

const FeaturedCategoriesItem = (
  props: FeaturedCategoriesItemImpressionsProps,
) => {
  // Hooks
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
        href={item.link}
        target="_parent"
        onClick={(e) => {
          e.stopPropagation();
          handleFeaturedCategoriesClick(item);
        }}
        ref={ref}
      >
        <img
          src={item.image}
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
