import React, { useState } from 'react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import ArrowButton from './components/arrow-button';
import { SwiperComponent, SwiperContainer } from './styles';
import getDisabledArrowButton from './validations/disabled-arrow-button';
import getModules from './validations/get-modules';

export interface SwiperEasyProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
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
  isGrid?: boolean;
  rowsGrid?: number;
}

function SwiperEasy<T>({
  items,
  renderItem,
  slidesPerGroup,
  slidesPerView,
  hasActionButton = false,
  isPositionAbsoluteButtons = true,
  hasPagination = false,
  isCenteredSlides = false,
  isLoop = false,
  autoPlay = false,
  paginationStyle = 'bullet',
  delay = 4000,
  isGrid = false,
  rowsGrid,
}: SwiperEasyProps<T>) {
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
          modules={getModules({ hasPagination, autoPlay, isGrid })}
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
          grid={{ rows: rowsGrid }}
        >
          {items.map((item, index) => (
            <SwiperSlide key={index}>{renderItem(item, index)}</SwiperSlide>
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
