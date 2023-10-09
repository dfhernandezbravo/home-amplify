import { ContentBody } from '@/domain/entities/content/content.types';
import Desktop from '@/presentation/components/layouts/Desktop';
import Mobile from '@/presentation/components/layouts/Mobile';
import SwiperEasy from '@/presentation/components/molecules/swiper';
import useBreakpoints from '@/presentation/hooks/useBreakpoints';
import MenuCarouselCard from './components/menu-carousel-card';
import { SwiperContainer } from './style';
import { getSlidePerview } from './validations/get-slide-perview';
import { getRowsPerShape } from './validations/get-rows-per-shape';

const MenuCarousel = ({ items, shape, itemsPerRow }: ContentBody) => {
  const { device, isSm } = useBreakpoints();

  console.log(isSm);
  return (
    <>
      <Desktop>
        <SwiperContainer>
          <SwiperEasy
            items={items}
            renderItem={(item) => (
              <MenuCarouselCard item={item} shape={shape} />
            )}
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
          />
        </SwiperContainer>
      </Desktop>
      <Mobile>
        <SwiperEasy
          items={items}
          renderItem={(item) => <MenuCarouselCard item={item} shape={shape} />}
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
  );
};

export default MenuCarousel;
