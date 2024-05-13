import {
  ContentBody,
  ItemContent,
} from '@/domain/entities/content/content.types';
import Desktop from '@/presentation/components/layouts/Desktop';
import Mobile from '@/presentation/components/layouts/Mobile';
import SwiperEasy from '@/presentation/components/molecules/swiper';
import useBreakpoints from '@/presentation/hooks/useBreakpoints';
import { isDateInRange } from '@/presentation/hooks/useTimeValidator';
import MenuCarouselCard from './components/menu-carousel-card';
import { SwiperContainer } from './style';
import { getRowsPerShape } from './validations/get-rows-per-shape';
import { getSlidePerview } from './validations/get-slide-perview';

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
              <SwiperEasy
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
            <div style={{ width: '100%' }}>
              <SwiperEasy
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
            </div>
          </Mobile>
        </>
      )}
    </>
  );
};

export default MenuCarousel;
