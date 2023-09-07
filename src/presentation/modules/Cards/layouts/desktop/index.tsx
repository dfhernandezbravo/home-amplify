import { ItemImpression } from '@/domain/entities/analytics/analytics';
import { ItemContent } from '@/domain/entities/content/content.types';
import Desktop from '@/presentation/components/layouts/Desktop';
import React from 'react';
import Card from '../../components/card';
import { CardDesktopContainer } from './styles';

interface Props {
  items: ItemContent[];
  hasMultipleRows: boolean;
  handlePromotionsImpressions: (item: ItemImpression, index: number) => void;
}

const CardsDesktop = ({
  items,
  hasMultipleRows,
  handlePromotionsImpressions,
}: Props) => {
  return (
    <Desktop>
      <CardDesktopContainer hasMultipleRows={hasMultipleRows}>
        {items.map((item, index) => (
          <div
            className={item.rows === 2 ? 'main' : undefined}
            key={`${item.link}-${index}`}
          >
            <Card
              hasMultipleRows={hasMultipleRows}
              index={index}
              handlePromotionsImpressions={handlePromotionsImpressions}
              {...item}
            />
          </div>
        ))}
      </CardDesktopContainer>
    </Desktop>
  );
};

export default CardsDesktop;
