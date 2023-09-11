/* eslint-disable @next/next/no-img-element */
import {
  ItemImpression,
  Promotion,
} from '@/domain/entities/analytics/analytics';
import {
  ContentBody,
  ItemContent,
} from '@/domain/entities/content/content.types';
import Title from '@/presentation/components/atoms/Title';
import useAnalytics from '@/presentation/hooks/useAnalytics';
import { IsMobile } from '@/presentation/hooks/utils';
import { Fragment, useEffect, useState } from 'react';
import CarouselCategories from './CarouselCategories';
import { Container } from './FeaturedCategories.styles';

import FeaturedCategoriesItem from './FeaturedCategoriesItem';

const FeaturedCategories = (props: ContentBody) => {
  const {
    methods: { sendPromotionImpressionEvent },
  } = useAnalytics();
  const [promotions, setPromotions] = useState<Promotion[]>([]);

  const { items } = props;
  const halfItems = Math.floor(items.length / 2);

  const firstHalf: ItemContent[] = items.slice(0, halfItems);
  const secondHalf: ItemContent[] = items.slice(halfItems);

  const handlePromotionsImpressions = (item: ItemImpression, index: number) => {
    const promotion = {
      id: 'Banner Principal',
      name: `${item.alt}`,
      creative: `${item.image}`,
      position: `Banner Principal ${index + 1}`,
    };

    setPromotions((prev) => [...prev, promotion]);
  };

  useEffect(() => {
    if (promotions.length) {
      sendPromotionImpressionEvent({
        event: 'promotionsViews',
        ecommerce: {
          promoView: {
            promotions,
          },
        },
      });

      // Remove previous promotions to avoid duplication
      setPromotions([]);
    }
  }, [promotions, sendPromotionImpressionEvent]);

  return (
    <Container>
      {IsMobile() ? (
        <Fragment>
          <Title text={props.title} />
          <CarouselCategories items={firstHalf} />
          <CarouselCategories items={secondHalf} />
        </Fragment>
      ) : (
        <Fragment>
          <Title text={props.title} />
          {items &&
            items.map((item, index: number) => (
              <FeaturedCategoriesItem
                key={index}
                index={index}
                item={item}
                handlePromotionsImpressions={handlePromotionsImpressions}
              />
            ))}
        </Fragment>
      )}
    </Container>
  );
};

export default FeaturedCategories;
