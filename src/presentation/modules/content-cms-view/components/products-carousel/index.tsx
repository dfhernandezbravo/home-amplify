import { ProductAnalytics } from '@/domain/entities/analytics/analytics';
import { ContentBody } from '@/domain/entities/content/content.types';
import getProductsByClusterId from '@/domain/use-cases/products/get-products-by-cluster';
import getProductsByIds from '@/domain/use-cases/products/get-products-by-ids';
import getProductBySkus from '@/domain/use-cases/products/get-products-by-skus';
import { itemProperties } from '@/helpers/analytics';
import Title from '@/presentation/components/atoms/Title';
import SwiperEasy from '@/presentation/components/molecules/swiper';
import useAnalytics from '@/presentation/hooks/useAnalytics';
import useBreakpoints from '@/presentation/hooks/useBreakpoints';
import { Product } from '@/presentation/store/products/product.type';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import ProductCard from '../../../ProductCard';
import getSlidesPerView from './validations/get-slides-per-view';
import { CarouselContainer, Container } from './styles';

const ProductsCarousel = (props: ContentBody) => {
  console.log(props);
  const { products, fieldName, maxItems, title } = props;
  const [productsToMark, setProductsToMark] = useState<ProductAnalytics[]>([]);
  const [productItems, setProductItems] = useState<Product[]>([]);
  const { device } = useBreakpoints();
  const {
    methods: { sendImpressionsEvent },
  } = useAnalytics();

  const { data: productsCluster } = useQuery(
    ['get-products-by-cluster', { products, maxItems }],
    () => getProductsByClusterId(products, maxItems),
    {
      enabled: fieldName === 'clusterId',
    },
  );

  const { data: productsSkus } = useQuery(
    ['get-products-by-sku', { products }],
    () => getProductBySkus(products),
    {
      enabled: fieldName === 'skuId',
    },
  );

  const { data: productsByIds } = useQuery(
    ['get-products-by-ids', { products }],
    () => getProductsByIds(products),
    {
      enabled: fieldName === 'productId',
    },
  );

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

  useEffect(() => {
    if (productsByIds) setProductItems(productsByIds);
    if (productsCluster) setProductItems(productsCluster);
    if (productsSkus) setProductItems(productsSkus);
  }, [productsByIds, productsCluster, productsSkus]);

  function handleProductImpression(item: Product, position: number) {
    const product = {
      ...itemProperties(item),
      price: item?.items?.[0].sellers?.[0].commertialOffer?.Price || 0,
      position: position,
      quantity: 1,
    };

    setProductsToMark((prev) => [...prev, product]);
  }

  const renderItem = (item: Product, index: number) => (
    <ProductCard
      product={item}
      onAddToCart={() => {}}
      position={index + 1}
      handleProductImpression={handleProductImpression}
    />
  );

  return (
    <Container>
      <CarouselContainer>
        <Title text={title} />
        <SwiperEasy
          items={productItems}
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
