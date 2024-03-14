import { ProductAnalytics } from '@/domain/entities/analytics/analytics';
import Container from '@/presentation/components/atoms/Container';
import Title from '@/presentation/components/atoms/Title';
import useAnalytics from '@/presentation/hooks/useAnalytics';
import useBreakpoints from '@/presentation/hooks/useBreakpoints';
import { useEffect, useState } from 'react';
import { CarouselContainer } from './styles';
import getSlidesPerView from './validations/get-slides-per-view';
import { Product } from '@cencosud-ds/easy-design-system';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useRouter } from 'next/router';
import SwiperBit from '../../atoms/Swiper';

interface CustomProduct extends Product {
  linkText?: string;
  link?: string;
}

interface Props {
  items: Product[];
  title?: string;
}

const Card = dynamic(
  () =>
    import('@ccom-easy-design-system/molecules.product-card').then(
      (module) => module.ProductCard,
    ),
  { ssr: false, loading: () => <></> },
);

const ProductsCarousel = ({ items, title }: Props) => {
  const [productsToMark, setProductsToMark] = useState<ProductAnalytics[]>([]);
  const router = useRouter();

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

  const handleClickCard = (product: CustomProduct, id: string | null) => {
    if (product.linkText) {
      let url = `/${product.linkText}/p`;
      if (id) url += `?skuId=${id}`;
      router.push(url);
    }
  };

  const renderItem = (item: Product | unknown) => (
    <Card
      onClickButton={handleOnClickButton}
      product={item as Product}     
      arialabel={`${(item as Product)?.productId}`}     
      onClickCard={(variantId: string | null) =>
        handleClickCard(item as Product, variantId)
      }
      layout="grid"
      renderImage={() => (
        <Image
          quality={1}
          src={(item as Product).imageUrl}
          alt={(item as Product).productName}
          sizes="fill"
          width={450}
          height={333}
          loading="lazy"
          placeholder="empty"
          onLoadingComplete={() => console.log('load complete')}
        />
      )}
    />
  );

  return (
    <Container>
      {items?.length > 0 ? (
        <CarouselContainer>
          <Title text={title} />
          <SwiperBit
            items={items}
            renderItem={renderItem}
            slidesPerView={getSlidesPerView(device)}
            slidesPerGroup={1}
            hasActionButton={items.length !== getSlidesPerView(device)}
            isPositionAbsoluteButtons={device !== 'Desktop'}
            spaceBetween={18}
          />
        </CarouselContainer>
      ) : (
        <></>
      )}
    </Container>
  );
};

export default ProductsCarousel;
