import { ItemImpression } from '@/domain/entities/analytics/analytics';
import { ItemContent } from '@/domain/entities/content/content.types';
import { useEffect, useState } from 'react';
import { ContainerSwiper } from './styles';
import Mobile from '@/presentation/components/layouts/Mobile';
import SwiperEasy from '@/presentation/components/molecules/swiper';
import Card from '@/presentation/modules/content-cms-view/components/cards/components/card';
import 'swiper/css';
import 'swiper/css/pagination';

interface Props {
  items: ItemContent[];
  hasMultipleRows: boolean;
  handlePromotionsImpressions: (item: ItemImpression, index: number) => void;
}

const CardsWithSwipper = ({
  items,
  hasMultipleRows,
  handlePromotionsImpressions,
}: Props) => {
  const itemsPerRow = 1.5;
  const itemsPerGroup = 1;
  const [itemsRender, setItemRenders] = useState(items);
  const [itemFixed, setItemFixed] = useState<ItemContent | undefined>();

  useEffect(() => {
    if (hasMultipleRows) {
      const fixed = items.find((item) => item.rows === 2);
      const restItems = items.filter((item) => item.rows !== 2);

      setItemFixed(fixed);
      setItemRenders(restItems);
    }
  }, [hasMultipleRows, items]);

  const renderItem = (item: ItemContent) => (
    <Card
      hasMultipleRows={hasMultipleRows}
      key={item.alt}
      image={item.mobileImage}
      description={item.description}
      alt={item.alt}
      link={item.link}
      width={100}
      index={0}
      handlePromotionsImpressions={handlePromotionsImpressions}
    />
  );

  return (
    <Mobile>
      {itemFixed && (
        <Card
          hasMultipleRows={hasMultipleRows}
          image={itemFixed.mobileImage}
          description={itemFixed.description}
          alt={itemFixed.alt}
          link={itemFixed.link}
          width={100}
          index={0}
          handlePromotionsImpressions={handlePromotionsImpressions}
        />
      )}
      <ContainerSwiper>
        <SwiperEasy
          items={itemsRender}
          renderItem={renderItem}
          slidesPerView={itemsPerRow}
          slidesPerGroup={itemsPerGroup}
          hasActionButton={false}
          hasPagination
        />
      </ContainerSwiper>
    </Mobile>
  );
};

export default CardsWithSwipper;
