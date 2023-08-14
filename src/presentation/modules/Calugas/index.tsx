import { Fragment, useEffect, useState } from 'react';
import Container from '@/presentation/components/atoms/Container';
import { ContainerSwiper, Section } from './Calugas.styles';
import { CalugaStruct, ItemStruct } from './Calugas.types';
import Caluga from './components/Caluga';
import Title from '@/presentation/components/atoms/Title';
import {
  ItemImpression,
  Promotion,
} from '@/domain/entities/analytics/analytics';
import useAnalytics from '@/presentation/hooks/useAnalytics';
import useBreakpoints from '@/presentation/hooks/useBreakpoints';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';



const ContainerCaluga = ({ title, items, isFooter }: CalugaStruct) => {
  const {
    methods: { sendPromotionImpressionEvent },
  } = useAnalytics();
  const [promotions, setPromotions] = useState<Promotion[]>([]);
  const { isSm, isMd, isLg } = useBreakpoints();
  const itemsPerRow = 1.1;

  const handlePromotionsImpressions = (item: ItemImpression, index: number) => {
    const promotion = {
      id: 'Banner Secundario',
      name: `${item.title}`,
      creative: `${item.image}`,
      position: `Banner Secundario ${index + 1}`,
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


  const breakpoint = () => {
    if (isSm) return true
    if (!isLg) return true
    else return false
  }


  return (
    <Container>
      <Title text={title} />
      <Fragment>
        {!breakpoint() || isFooter ? (
          <Section>
            {items.map((item: ItemStruct, index: number) => (
              <Caluga
                key={`${index}`}
                image={!breakpoint() ? item.image : item.mobileImage}
                description={item.description}
                alt={item.alt}
                link={item.link}
                width={item.width}
                index={index}
                handlePromotionsImpressions={handlePromotionsImpressions}
              />
            ))}
          </Section>
        ) : (
          <ContainerSwiper style={{ width: '90%' }}>
            <Swiper
              slidesPerView={(isMd||isSm) ? itemsPerRow *2 : itemsPerRow}
              pagination={{
                clickable: true
              }}
              modules={[Pagination]}
            >
              {items?.length > 0 && items.map((item: ItemStruct, index: number) => (
                <SwiperSlide key={index}>
                  <Caluga
                    key={`${index}`}
                    image={item.mobileImage}
                    description={item.description}
                    alt={item.alt}
                    link={item.link}
                    width={100}
                    maxHeight
                    index={index}
                    handlePromotionsImpressions={handlePromotionsImpressions}
                  />
                </SwiperSlide>
              ))}
              <div className='swiper-pagination-bullet custom-pagination-categories' />
            </Swiper>
          </ContainerSwiper>
        )}
      </Fragment>
    </Container>
  );
};

export default ContainerCaluga;
