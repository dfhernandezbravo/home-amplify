import { ProductAnalytics } from '@/domain/entities/analytics/analytics';
import Container from '@/presentation/components/atoms/Container';
import Title from '@/presentation/components/atoms/Title';
// import SwiperEasy from '@/presentation/components/molecules/swiper';
import useAnalytics from '@/presentation/hooks/useAnalytics';
import useBreakpoints from '@/presentation/hooks/useBreakpoints';
import { useEffect, useState } from 'react';
import { CarouselContainer } from './styles';
import getSlidesPerView from './validations/get-slides-per-view';
import { Product } from '@cencosud-ds/easy-design-system';
import dynamic from 'next/dynamic';
import Image from 'next/image';

interface Props {
  items: Product[];
  title?: string;
}

const Swiper = dynamic(
  () =>
    import('@ccom-easy-design-system/molecules.swiper').then(
      (module) => module.Swiper,
    ),
  { ssr: false, loading: () => <></> },
);
const Card = dynamic(
  () =>
    import('@ccom-easy-design-system/molecules.product-card').then(
      (module) => module.ProductCard,
    ),
  { ssr: false, loading: () => <></> },
);

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

  const handleOnClickButton = ({
    variantId,
    product,
  }: {
    variantId: string;
    product: Product;
  }) => {
    const productSelected = {
      id: variantId,
      quantity: 1,
      ...product,
    };

    document.dispatchEvent(
      new CustomEvent('ADD_ITEM_SHOPPING_CART', {
        detail: { product: productSelected },
      }),
    );
  };

  // function handleProductImpression(item: Product, position: number) {
  //   const product = {
  //     ...itemProperties(item),
  //     price: item?.items?.[0].sellers?.[0].commertialOffer?.Price || 0,
  //     position: position,
  //     quantity: 1,
  //   };

  //   setProductsToMark((prev) => [...prev, product]);
  // }

  const renderItem = (item: Product | unknown) => (
    <Card
      onClickButton={handleOnClickButton}
      product={item as Product}
      onClickCard={() => {}}
      layout="grid"
      renderImage={() => (
        <Image
          quality={100}
          src={(item as Product).imageUrl}
          alt=""
          width={450}
          height={333}
        />
      )}
    />
  );

  return (
    <Container>
      <CarouselContainer>
        <h1>Hola Product Carousel</h1>
        <Title text={title} />
        <Swiper
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
