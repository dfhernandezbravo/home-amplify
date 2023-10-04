import { ProductAnalytics } from '@/domain/entities/analytics/analytics';
// import { itemProperties } from '@/helpers/analytics';
import Container from '@/presentation/components/atoms/Container';
import Title from '@/presentation/components/atoms/Title';
import SwiperEasy from '@/presentation/components/molecules/swiper';
import useAnalytics from '@/presentation/hooks/useAnalytics';
import useBreakpoints from '@/presentation/hooks/useBreakpoints';
import { Product } from '@/domain/entities/products/product.type';
import { useEffect, useState } from 'react';
import { CarouselContainer } from './styles';
import getSlidesPerView from './validations/get-slides-per-view';
import ProductCard from './components/product-card';

interface Props {
  items: Product[];
  title?: string;
}

const ProductsCarousel = ({ items, title }: Props) => {
  const [productsToMark, setProductsToMark] = useState<ProductAnalytics[]>([]);

  const { device } = useBreakpoints();
  const {
    methods: { sendImpressionsEvent },
  } = useAnalytics();

  useEffect(() => {
    if (productsToMark.length > 0) {
      sendImpressionsEvent({
        event: 'impressions',
        ecommerce: {
          impressions: productsToMark,
          currencyCode: 'CLP',
        },
      });
      setProductsToMark([]);
    }
  }, [productsToMark]);

  // function handleProductImpression(item: Product, position: number) {
  //   const product = {
  //     ...itemProperties(item),
  //     price: item?.items?.[0].sellers?.[0].commertialOffer?.Price || 0,
  //     position: position,
  //     quantity: 1,
  //   };

  //   setProductsToMark((prev) => [...prev, product]);
  // }

  const renderItem = (item: Product) => <ProductCard product={item} />;

  return (
    <Container>
      <CarouselContainer>
        <Title text={title} />
        <SwiperEasy
          items={items}
          renderItem={renderItem}
          slidesPerView={getSlidesPerView(device)}
          slidesPerGroup={1}
          hasActionButton
          isPositionAbsoluteButtons={false}
        />
      </CarouselContainer>
    </Container>
  );
};

export default ProductsCarousel;
