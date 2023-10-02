import { SwiperClass } from 'swiper/react';
import ArrowButton from '../arrow-button';

interface Props {
  isEnd: boolean;
  isStart: boolean;
  swiper?: SwiperClass;
  isPositionAbsoluteButtons: boolean;
}

const ActionsButtons = ({
  isEnd,
  isStart,
  swiper,
  isPositionAbsoluteButtons,
}: Props) => {
  return (
    <>
      <ArrowButton
        position="left"
        isPositionAbsolute={isPositionAbsoluteButtons}
        disabled={isStart}
        onClick={() => swiper && swiper.slidePrev()}
      />
      <ArrowButton
        position="right"
        isPositionAbsolute={isPositionAbsoluteButtons}
        disabled={isEnd}
        onClick={() => swiper && swiper.slideNext()}
      />
    </>
  );
};

export default ActionsButtons;
