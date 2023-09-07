import { ItemImpression } from '@/domain/entities/analytics/analytics';
import { ItemContent } from '@/domain/entities/content/content.types';

import React, { useEffect, useState } from 'react';
import { ContainerSwiper } from './styles';

import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Card from '@/presentation/modules/Cards/components/card';
import useBreakpoints from '@/presentation/hooks/useBreakpoints';
import Mobile from '@/presentation/components/layouts/Mobile';

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
  const { isSm, isMd } = useBreakpoints();
  const itemsPerRow = 1.1;
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
        <Swiper
          slidesPerView={isMd || isSm ? itemsPerRow + 1 : itemsPerRow}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        >
          {itemsRender.map((item, index: number) => (
            <SwiperSlide key={index}>
              <Card
                hasMultipleRows={hasMultipleRows}
                key={`${index}`}
                image={item.mobileImage}
                description={item.description}
                alt={item.alt}
                link={item.link}
                width={100}
                index={index}
                handlePromotionsImpressions={handlePromotionsImpressions}
              />
            </SwiperSlide>
          ))}
          <div className="swiper-pagination-bullet custom-pagination-categories" />
        </Swiper>
      </ContainerSwiper>
    </Mobile>
  );
};

export default CardsWithSwipper;
