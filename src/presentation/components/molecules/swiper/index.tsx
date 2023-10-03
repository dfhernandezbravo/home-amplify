import React, { useState } from 'react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {
  Autoplay,
  Keyboard,
  Navigation,
  Pagination,
  Scrollbar,
} from 'swiper/modules';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { SwiperModule } from 'swiper/types';
import ArrowButton from './components/arrow-button';
import { SwiperComponent, SwiperContainer } from './styles';
import getDisabledArrowButton from './validations/disabled-arrow-button';

interface Props<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  slidesPerView: number;
  slidesPerGroup: number;
  hasActionButton?: boolean;
  isPositionAbsoluteButtons?: boolean;
  hasPagination?: boolean;
  isCenteredSlides?: boolean;
  isLoop?: boolean;
  autoPlay?: boolean;
  paginationStyle?: 'bullet' | 'dot';
  delay?: number;
}

const getModules = (hasPagination: boolean, autoPlay: boolean) => {
  const modules: SwiperModule[] = [Keyboard, Scrollbar, Navigation];

  if (hasPagination) modules.push(Pagination);
  if (autoPlay) modules.push(Autoplay);

  return modules;
};

function SwiperEasy<T>({
  items,
  renderItem,
  slidesPerGroup,
  slidesPerView,
  hasActionButton = false,
  isPositionAbsoluteButtons = true,
  hasPagination = false,
  isCenteredSlides = true,
  isLoop = false,
  autoPlay = false,
  paginationStyle = 'bullet',
  delay = 4000,
}: Props<T>) {
  const [swiper, setSwiper] = useState<SwiperClass>();
  const [isEnd, setIsEnd] = useState(false);
  const [isStart, setIsStart] = useState(true);

  return (
    <SwiperContainer paginationStyle={paginationStyle}>
      <SwiperComponent>
        {hasActionButton && (
          <ArrowButton
            position="left"
            isPositionAbsolute={isPositionAbsoluteButtons}
            disabled={getDisabledArrowButton(isLoop, isStart)}
            onClick={() => swiper && swiper.slidePrev()}
          />
        )}

        <Swiper
          slidesPerView={slidesPerView}
          slidesPerGroup={slidesPerGroup}
          modules={getModules(hasPagination, autoPlay)}
          pagination={{
            clickable: true,
          }}
          centeredSlides={isCenteredSlides}
          onSwiper={(ev) => {
            setSwiper(ev);
          }}
          onSlideChange={(ev) => {
            setIsEnd(ev.isEnd);
            setIsStart(ev.isBeginning);
          }}
          loop={isLoop}
          autoplay={{ delay }}
        >
          {items.map((item, index) => (
            <SwiperSlide key={index}>{renderItem(item)}</SwiperSlide>
          ))}
          {hasPagination && (
            <div className="swiper-pagination-bullet custom-pagination-container" />
          )}
        </Swiper>

        {hasActionButton && (
          <ArrowButton
            position="right"
            isPositionAbsolute={isPositionAbsoluteButtons}
            disabled={getDisabledArrowButton(isLoop, isEnd)}
            onClick={() => swiper && swiper.slideNext()}
          />
        )}
      </SwiperComponent>
    </SwiperContainer>
  );
}

export default SwiperEasy;
