/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Product } from '@/presentation/store/products/product.type';
import ProductCard from '../ProductCard';
import { ArrowButton, CarouselContainer } from './ProductsCarousel.style';
import ProductService from '@/application/services/products';
import useBreakpoints from '@/presentation/hooks/useBreakpoints';
import Container from '@/presentation/components/atoms/Container';
import { ProductCarouselStruct } from './ProductCarousel.types';
import useAnalytics from '@/presentation/hooks/useAnalytics';
import useSwipe from '@/presentation/hooks/useSwipe';
import { ProductAnalytics } from '@/domain/entities/analytics/analytics';
import Title from '@/presentation/components/atoms/Title';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Scrollbar, Navigation } from 'swiper/modules';
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIos,
} from 'react-icons/md';

import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/grid';

const ProductsCarousel = (props: ProductCarouselStruct) => {
  const { clusterId, onAddToCart, items, fieldName, maxItems, title } = props;
  const [productsToMark, setProductsToMark] = useState<ProductAnalytics[]>([]);

  const [productItems, setProductItems] = useState<Product[]>();

  const [swiper, setSwiper] = useState<any>(null);
  const [isEnd, setIsEnd] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const { isXs, isSm, isMd, isLg } = useBreakpoints();
  const {
    methods: { sendImpressionsEvent },
  } = useAnalytics();
  const swipeHandlers = useSwipe({
    onSwipedLeft: () => setProductsToMark([]),
    onSwipedRight: () => {
      setProductsToMark([]);
    },
  });

  const checkBreakpoints = (
    defaultBreakpoint: number,
    firstBreakpoint: number,
    secondBreakpoint: number,
  ) => {
    if (isLg) return firstBreakpoint;
    if (isMd || isSm) return secondBreakpoint;
    return defaultBreakpoint;
  };

  const methods = {
    getProductsByClusterId: async ({
      clusterId,
      maxItems,
    }: {
      clusterId: string;
      maxItems: number;
    }) => {
      if (clusterId) {
        const response = await ProductService.getProductsByClusterId({
          clusterId,
          maxItems,
        });
        setProductItems(response);
      }
    },
    getProductsByIds: async (skuList: string) => {
      if (skuList) {
        const response = await ProductService.getProductsByIds(skuList);
        setProductItems(response);
      }
    },
    handleProductImpression: (item: Product, position: number) => {
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
    },
  };

  // Send products impressions mark
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
    switch (fieldName) {
      case 'clusterId':
        methods.getProductsByClusterId({ clusterId: items, maxItems });
        break;
      case 'productId':
        methods.getProductsByIds(items);
        break;
      default:
        return;
    }
  }, []);

  const mobile = (): boolean => {
    return isXs || isSm;
  };

  const onStart = (): boolean => {
    return activeIndex < checkBreakpoints(1.3, 4, 3);
  };

  if (productItems)
    return (
      <Container>
        <Title text={title} />
        <CarouselContainer>
          <Swiper
            slidesPerView={checkBreakpoints(1.3, 4, 3)}
            slidesPerGroup={checkBreakpoints(1, 4, 3)}
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
            {productItems.map((item: Product, index: number) => (
              <SwiperSlide key={item.productId + index}>
                <ProductCard
                  product={item}
                  onAddToCart={onAddToCart}
                  position={index + 1}
                  handleProductImpression={methods.handleProductImpression}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          {!mobile() && (
            <>
              <ArrowButton
                onClick={() => {
                  setProductsToMark([]), swiper.slidePrev();
                }}
                disabled={!isEnd && onStart()}
                right={false}
              >
                <MdOutlineArrowBackIos />
              </ArrowButton>
              <ArrowButton
                onClick={() => {
                  setProductsToMark([]), swiper.slideNext();
                }}
                disabled={isEnd}
                right
              >
                <MdOutlineArrowForwardIos />
              </ArrowButton>
            </>
          )}
        </CarouselContainer>
      </Container>
    );
  return null;
};

export default ProductsCarousel;
