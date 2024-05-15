import { ItemImpression } from '@/domain/entities/analytics/analytics';
import { ItemContent } from '@/domain/entities/content/content.types';
import React from 'react';
import CardsWithoutSwipper from './components/cards-without-swipper';
import CardsWithSwipper from './components/cards-with-swipper';
import LazyLoad from 'react-lazyload';

interface Props {
  items: ItemContent[];
  hasMultipleRows: boolean;
  handlePromotionsImpressions: (item: ItemImpression, index: number) => void;
  hasSwipper: boolean;
}

const CardsMobile = ({
  items,
  hasMultipleRows,
  handlePromotionsImpressions,
  hasSwipper,
}: Props) => {
  return hasSwipper ? (
    <CardsWithSwipper
      hasMultipleRows={hasMultipleRows}
      handlePromotionsImpressions={handlePromotionsImpressions}
      items={items}
    />
  ) : (
    <LazyLoad throttle={300} height={300}>
      <CardsWithoutSwipper
        hasMultipleRows={hasMultipleRows}
        handlePromotionsImpressions={handlePromotionsImpressions}
        items={items}
      />
    </LazyLoad>
  );
};

export default CardsMobile;
