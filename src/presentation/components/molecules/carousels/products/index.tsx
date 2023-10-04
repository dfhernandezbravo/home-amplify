import { ProductAnalytics } from '@/domain/entities/analytics/analytics';
import Container from '@/presentation/components/atoms/Container';
import Title from '@/presentation/components/atoms/Title';
import Desktop from '@/presentation/components/layouts/Desktop';
import useAnalytics from '@/presentation/hooks/useAnalytics';
import useBreakpoints from '@/presentation/hooks/useBreakpoints';
import ProductCard from '@/presentation/modules/ProductCard';
import { Product } from '@/domain/entities/products/product.type';
import React, { useEffect, useState } from 'react';
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from 'react-icons/md';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { Keyboard, Navigation, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { ArrowButton, CarouselContainer } from './styles';

interface Props {
  products: Product[];
  title: string;
  onAddToCart: (product: Product) => void;
}

type Slides = {
  [x: string]: number;
};

/**
 * @deprecated
 * @param param0
 * @returns
 */
const CarouselProducts: React.FC<Props> = ({
  products,
  title,
  onAddToCart,
}) => {
  const { isXs, isSm, isMd, isLg } = useBreakpoints();
  const {
    methods: { sendImpressionsEvent },
  } = useAnalytics();

  const slidesPerView: Slides = {
    isLg: 4,
    isMd: 3,
    isXs: 1.3,
  };

  const slidesPerGroup: Slides = {
    isLg: 4,
    isMd: 3,
    isXs: 1,
  };

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

  const getSlides = (slides: Slides) => {
    if (isLg) return slides['isLg'];
    if (isMd || isSm) return slides['isMd'];
    return slides['isXs'];
  };

  const onStart = (): boolean => {
    return activeIndex < getSlides(slidesPerGroup);
  };

  const itemProperty = (propertie: string | undefined): string => {
    return propertie || '';
  };

  const handleProductImpression = (item: Product, position: number) => {
    const itemSelected = item?.items?.[0];

    const product = {
      name: itemProperty(itemSelected?.name),
      id: itemProperty(itemSelected?.referenceId?.[0].Value),
      brand: itemProperty(item?.brand),
      category: itemProperty(item?.categories?.[0]),
      variant: itemProperty(itemSelected?.referenceId?.[0].Value),
      price: itemSelected?.sellers?.[0].commertialOffer?.Price || 0,
      position: position,
      quantity: 1,
    };

    setProductsToMark((prev) => [...prev, product]);
  };

  return products.length ? (
    <Container>
      <Title text={title} />
      <CarouselContainer>
        <Swiper
          slidesPerView={getSlides(slidesPerView)}
          slidesPerGroup={getSlides(slidesPerGroup)}
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
  ) : null;
};

export default CarouselProducts;
