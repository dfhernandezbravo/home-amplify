import {
  ContentBody,
  ItemContent,
} from '@/domain/entities/content/content.types';
import Desktop from '@/presentation/components/layouts/Desktop';
import Mobile from '@/presentation/components/layouts/Mobile';
import useBreakpoints from '@/presentation/hooks/useBreakpoints';
import MenuCarouselCard from './components/menu-carousel-card';
import { SwiperContainer } from './style';
import { getSlidePerview } from './validations/get-slide-perview';
import { getRowsPerShape } from './validations/get-rows-per-shape';
import { isDateInRange } from '@/presentation/hooks/useTimeValidator';
import SwiperBit from '@/presentation/components/atoms/Swiper';

const MenuCarousel = ({
  items,
  shape,
  itemsPerRow,
  isActive,
  startDate,
  endDate,
}: ContentBody) => {
  const { device } = useBreakpoints();

  if (!isActive) return <></>;
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const renderItem = (item: ItemContent | any) => (
    <MenuCarouselCard item={item} shape={shape} />
  );

  return (
    <>
      {isDateInRange(startDate, endDate) && (
        <>
          <Desktop>
            <SwiperContainer>
              <SwiperBit
                items={items}
                renderItem={renderItem}
                slidesPerView={getSlidePerview({
                  device,
                  shape,
                  itemsPerRow,
                })}
                slidesPerGroup={1}
                hasPagination
                paginationStyle={'bullet'}
                rowsGrid={1}
                fillGrid="row"
                hasActionButton
                isPositionAbsoluteButtons={false}
              />
            </SwiperContainer>
          </Desktop>
          <Mobile>
            <SwiperBit
              items={items}
              renderItem={renderItem}
              slidesPerView={getSlidePerview({
                device,
                shape,
                itemsPerRow,
              })}
              slidesPerGroup={1}
              hasPagination
              paginationStyle={'bullet'}
              rowsGrid={getRowsPerShape({ shape })}
              fillGrid="row"
            />
          </Mobile>
        </>
      )}
    </>
  );
};

export default MenuCarousel;
