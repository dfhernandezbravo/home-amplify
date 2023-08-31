import Title from '@/presentation/components/atoms/Title';
import { Product } from '@/presentation/store/products/product.type';
import React, { useEffect, useState } from 'react';
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from 'react-icons/md';
import { Keyboard, Navigation, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { ProductAnalytics } from '@/domain/entities/analytics/analytics';
import Container from '@/presentation/components/atoms/Container';
import Desktop from '@/presentation/components/layouts/Desktop';
import useAnalytics from '@/presentation/hooks/useAnalytics';
import useBreakpoints from '@/presentation/hooks/useBreakpoints';
import ProductCard from '@/presentation/modules/ProductCard';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { SwiperClass } from 'swiper/react';
import { ArrowButton, CarouselContainer } from './styles';

interface Props {
  products: Product[];
  title: string;
  onAddToCart: (product: Product) => void;
}

const CarouselProducts: React.FC<Props> = ({
  products,
  title,
  onAddToCart,
}) => {
  const { isXs, isSm, isMd, isLg } = useBreakpoints();
  const {
    methods: { sendImpressionsEvent },
  } = useAnalytics();

  const [swiper, setSwiper] = useState<SwiperClass | null>(null);
  const [isEnd, setIsEnd] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [productsToMark, setProductsToMark] = useState<ProductAnalytics[]>([]);

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
  }, [productsToMark, sendImpressionsEvent]);

  function getSlidesPerView(): number {
    if (isLg) return 4;
    if (isMd || isSm) return 3;
    return 1.3;
  }

  function getSlidesPerGroup(): number {
    if (isLg) return 4;
    if (isMd || isSm) return 3;
    return 1;
  }

  const onStart = (): boolean => {
    return activeIndex < getSlidesPerView();
  };

  const handleProductImpression = (item: Product, position: number) => {
    const product = {
      name: item?.items?.[0].name || '',
      id: item?.items?.[0].referenceId?.[0].Value || '',
      price: item?.items?.[0].sellers?.[0].commertialOffer?.Price || 0,
      brand: item?.brand || '',
      category: item?.categories?.[0] || '',
      variant: item?.items?.[0].referenceId?.[0].Value || '',
      position: position,
      quantity: 1,
    };

    setProductsToMark((prev) => [...prev, product]);
  };

  return (
    <Container>
      <Title text={title} />
      <CarouselContainer>
        <Swiper
          slidesPerView={getSlidesPerView()}
          slidesPerGroup={getSlidesPerGroup()}
          onSwiper={(ev) => {
            setSwiper(ev), setProductsToMark([]);
          }}
          onSlideChange={(ev) => setIsEnd(ev?.isEnd)}
          modules={[Keyboard, Scrollbar, Navigation]}
          pagination={{
            clickable: true,
          }}
          centeredSlides={isXs}
          onRealIndexChange={(el) => setActiveIndex(el.activeIndex)}
        >
          {products.map((item: Product, index: number) => (
            <SwiperSlide key={item.productId}>
              <ProductCard
                product={item}
                onAddToCart={onAddToCart}
                position={index + 1}
                handleProductImpression={handleProductImpression}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <Desktop>
          <>
            <ArrowButton
              onClick={() => {
                setProductsToMark([]), swiper && swiper.slidePrev();
              }}
              disabled={!isEnd && onStart()}
              right={false}
            >
              <MdOutlineArrowBackIos />
            </ArrowButton>
            <ArrowButton
              onClick={() => {
                setProductsToMark([]), swiper && swiper.slideNext();
              }}
              disabled={isEnd}
              right
            >
              <MdOutlineArrowForwardIos />
            </ArrowButton>
          </>
        </Desktop>
      </CarouselContainer>
    </Container>
  );
};

export default CarouselProducts;
