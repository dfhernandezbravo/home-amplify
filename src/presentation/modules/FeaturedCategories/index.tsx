/* eslint-disable @next/next/no-img-element */
import { Fragment, useEffect, useState } from 'react';
import {
  FeaturedCategoriesStruct,
  ItemStruct,
} from './FeaturedCategories.types';
import { Container } from './FeaturedCategories.styles';
import { IsMobile } from '@/presentation/hooks/utils';
import CarouselCategories from './CarouselCategories';
import Title from '@/presentation/components/atoms/Title';
import useAnalytics from '@/presentation/hooks/useAnalytics';
import FeaturedCategoriesItem from './FeaturedCategoriesItem';
import {
  ItemImpression,
  Promotion,
} from '@/domain/entities/analytics/analytics';

const FeaturedCategories = (props: FeaturedCategoriesStruct) => {
  const {
    methods: { sendPromotionImpressionEvent },
  } = useAnalytics();
  const [promotions, setPromotions] = useState<Promotion[]>([]);

  const { items } = props;
  const halfItems = Math.floor(items.length / 2);

  const firstHalf: ItemStruct[] = items.slice(0, halfItems);
  const secondHalf: ItemStruct[] = items.slice(halfItems);

  const handlePromotionsImpressions = (item: ItemImpression, index: number) => {
    const promotion = {
      id: 'Banner Principal',
      name: `${item.title}`,
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
  }, [promotions]);

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
            items.map((item: ItemStruct, index: number) => (
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
