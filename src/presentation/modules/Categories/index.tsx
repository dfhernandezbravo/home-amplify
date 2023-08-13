/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import { CategoriesStruct, ItemStruct } from './Categories.types';
import { ArrowButton, ContainerSwiper, ItemContainer, ItemImage, ItemTitle } from './Categories.styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos } from 'react-icons/md'

import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const Categories = (props: CategoriesStruct) => {

  const [swiper, setSwiper] = useState<any>(null);
  const { items, itemsPerRow } = props;
  const [isEnd, setIsEnd] = useState<boolean>(false);

  return (
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
      >

        {items?.length > 0 && items.map((item: ItemStruct, index: number) => (
          <SwiperSlide key={index}>
            <ItemContainer>
              <ItemImage src={item.image} alt={item.title} />
              <ItemTitle>{item.title}</ItemTitle>
            </ItemContainer>
          </SwiperSlide>
        ))}
      </Swiper>
      <ArrowButton onClick={() => swiper.slideNext()} disabled={isEnd}>
        <MdOutlineArrowForwardIos/>
      </ArrowButton>
    </ContainerSwiper>
  );
}

export default Categories;
