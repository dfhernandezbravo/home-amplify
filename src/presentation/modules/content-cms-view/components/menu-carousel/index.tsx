import {
  ContentBody,
  ItemContent,
} from '@/domain/entities/content/content.types';
import SwiperEasy from '@/presentation/components/molecules/swiper';
import useBreakpoints from '@/presentation/hooks/useBreakpoints';
import { getSlidePerview } from './validations/get-slide-perview';
import {
  Card,
  CardTitle,
  ImageCardContainer,
  ImageIcon,
  SwiperContainer,
} from './style';

const MenuCarousel = ({ items, shape, itemsPerRow }: ContentBody) => {
  const { device } = useBreakpoints();
  const { isGrid, slidePerView, rows } = getSlidePerview({
    device,
    shape,
    itemsPerRow,
  });

  const renderItem = (item: ItemContent) => (
    <Card shape={shape}>
      <ImageCardContainer shape={shape}>
        <ImageIcon
          src={item.image}
          width={0}
          height={0}
          sizes="100vh"
          alt={item.alt}
        />
      </ImageCardContainer>
      <CardTitle>
        <span>{item.title}</span>
      </CardTitle>
    </Card>
  );

  return (
    <SwiperContainer>
      <SwiperEasy
        items={items}
        renderItem={renderItem}
        slidesPerView={slidePerView}
        slidesPerGroup={1}
        hasPagination
        paginationStyle={'bullet'}
        isGrid={isGrid}
        rowsGrid={rows}
        fillGrid="row"
      />
    </SwiperContainer>
  );
};

export default MenuCarousel;
