/* eslint-disable @next/next/no-img-element */
import React, { Fragment, useState } from 'react';
import { CategoriesStruct, ItemStruct } from './Categories.types';
import { ArrowButton, ContainerSwiper, ItemContainer, ItemImage, ItemTitle } from './CategoriesSquare.styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Scrollbar, Navigation, Pagination, Grid } from 'swiper/modules';
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos } from 'react-icons/md'

import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/grid";
import useBreakpoints from '@/presentation/hooks/useBreakpoints';
import Link from 'next/link';
import useLinks from '@/presentation/hooks/useLink';


const CategoriesSquare = (props: CategoriesStruct) => {

  const [swiper, setSwiper] = useState<any>(null);
  const { items, itemsPerRow } = props;
  const [isEnd, setIsEnd] = useState<boolean>(false);
  const { getLink } = useLinks();
  const { isMd, isLg } = useBreakpoints();

  return (
    <Fragment>
      {isLg && (
        <ContainerSwiper>
          <ArrowButton onClick={() => swiper.slidePrev()} disabled={!isEnd}>
            <MdOutlineArrowBackIos />
          </ArrowButton>
          <Swiper
            slidesPerView={itemsPerRow}
            onSwiper={(ev) => setSwiper(ev)}
            onSlideChange={(ev) => setIsEnd(ev?.isEnd)}
            slidesPerGroup={itemsPerRow}
            modules={[Keyboard, Scrollbar, Navigation, Pagination]}
            pagination={{
              clickable: true
            }}
          >
            {items?.length > 0 && items.map((item: ItemStruct, index: number) => (
              <SwiperSlide key={index}>
                <ItemContainer>
                  <Link href={getLink(item.link)}>
                    <ItemImage src={item.image} alt={item.title} />
                    <ItemTitle>{item.title}</ItemTitle>
                  </Link>
                </ItemContainer>
              </SwiperSlide>
            ))}
            <div className='swiper-pagination-bullet custom-pagination-categories' />
          </Swiper>
          <ArrowButton onClick={() => swiper.slideNext()} disabled={isEnd}>
            <MdOutlineArrowForwardIos />
          </ArrowButton>
        </ContainerSwiper>
      )}
      {!isLg && (
        <div style={{ padding: 20 }}>
          <Swiper
            onSwiper={(ev) => setSwiper(ev)}
            onSlideChange={(ev) => setIsEnd(ev?.isEnd)}
            slidesPerView={isMd ? 4 : 2}
            slidesPerGroup={isMd ? 4 : 2}
            grid={{
              fill: "row",
              rows: 2
            }}
            modules={[Keyboard, Scrollbar, Navigation, Pagination, Grid]}
            pagination={{
              clickable: true
            }}
          >
            {items?.length > 0 && items.map((item: ItemStruct, index: number) => (
              <SwiperSlide key={index}>
                <ItemContainer>
                  <Link href={getLink(item.link)} style={{display:'flex', justifyContent: 'center', alignItems: 'center', flexFlow:'column'}}>
                    <ItemImage src={item.image} alt={item.title} />
                    <ItemTitle>{item.title}</ItemTitle>
                  </Link>
                </ItemContainer>
              </SwiperSlide>
            ))}
            <div className='swiper-pagination-bullet custom-pagination-categories' />
          </Swiper>
        </div>
      )}
    </Fragment>
  );
}

export default CategoriesSquare;
