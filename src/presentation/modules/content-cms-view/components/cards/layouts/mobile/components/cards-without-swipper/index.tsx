import { ItemImpression } from '@/domain/entities/analytics/analytics';
import { ItemContent } from '@/domain/entities/content/content.types';
import Card from '@/presentation/modules/content-cms-view/components/cards/components/card';
import React from 'react';
import { CardElementContainer, CardMobileContainer } from './styles';
import Mobile from '@/presentation/components/layouts/Mobile';

interface Props {
  items: ItemContent[];
  hasMultipleRows: boolean;
  handlePromotionsImpressions: (item: ItemImpression, index: number) => void;
}

const CardsWithoutSwipper = ({
  items,
  hasMultipleRows,
  handlePromotionsImpressions,
}: Props) => {
  return (
    <Mobile>
      <CardMobileContainer hasMultipleRows={hasMultipleRows}>
        {items.map((item, index) => (
          <CardElementContainer
            width={item.width}
            className={item.rows === 2 ? 'main-grid' : undefined}
            key={`${item.link}-${index}`}
          >
            <Card
              hasMultipleRows={hasMultipleRows}
              index={index}
              handlePromotionsImpressions={handlePromotionsImpressions}
              image={item.mobileImage}
              description={item.description}
              alt={item.alt}
              link={item.link}
              width={item.width}
            />
          </CardElementContainer>
        ))}
      </CardMobileContainer>
    </Mobile>
  );
};

export default CardsWithoutSwipper;
