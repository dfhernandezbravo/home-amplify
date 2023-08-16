/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import 'pure-react-carousel/dist/react-carousel.es.css';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import { ProductModel } from '@/presentation/store/products/product.type';
import ProductCard from '../ProductCard';
import { CarouselContainer, CarouselNavButton } from './ProductsCarousel.style';
import { GrNext, GrPrevious } from 'react-icons/gr';
import ProductService from '@/application/services/products';
import useBreakpoints from '@/presentation/hooks/useBreakpoints';
import Container from '@/presentation/components/atoms/Container';
import { ProductCarouselStruct } from './ProductCarousel.types';
import useAnalytics from '@/presentation/hooks/useAnalytics';
import useSwipe from '@/presentation/hooks/useSwipe';
import { Product } from '@/domain/entities/analytics/analytics';

const ProductsCarousel = (props: ProductCarouselStruct) => {
  const { clusterId, onAddToCart, items, fieldName, maxItems } = props;
  const [productsToMark, setProductsToMark] = useState<Product[]>([]);

  const [productItems, setProductItems] = useState<ProductModel[]>();

  const { isSm, isMd, isLg } = useBreakpoints();
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
    getProductsByClusterId: async ({clusterId , maxItems}: { clusterId: string, maxItems: number }) => {
      if (clusterId) {
        const response = await ProductService.getProductsByClusterId({clusterId, maxItems});
        setProductItems(response);
      }
    },
    getProductsByIds: async (skuList: string) => {
      if (skuList) {
        const response = await ProductService.getProductsByIds(skuList);
        setProductItems(response);
      }
    },
    handleProductImpression: (item: ProductModel, position: number) => {
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
    switch(fieldName){
      case 'clusterId':
        methods.getProductsByClusterId({clusterId: items, maxItems });
        break;
      case 'productId':
        methods.getProductsByIds(items);
        break;
    default:
      return 
    }
  }, []);

  if (productItems)
    return (
      <Container>
        <CarouselContainer>
          <CarouselProvider
            naturalSlideWidth={25}
            naturalSlideHeight={100}
            totalSlides={productItems.length}
            infinite={false}
            isIntrinsicHeight={true}
            visibleSlides={checkBreakpoints(1.3, 4, 3)}
            step={checkBreakpoints(2, 5, 3)}
          >
            <Slider {...swipeHandlers}>
              {productItems.map((item: ProductModel, index: number) => (
                <Slide key={item.productId + index} index={index}>
                  <ProductCard
                    product={item}
                    onAddToCart={onAddToCart}
                    position={index + 1}
                    handleProductImpression={methods.handleProductImpression}
                  />
                </Slide>
              ))}
            </Slider>

            {!isSm && (
              <div>
                <ButtonBack
                  style={{ background: 'transparent', border: 'none' }}
                >
                  <CarouselNavButton onClick={() => setProductsToMark([])}>
                    <GrPrevious size={'25px'} />
                  </CarouselNavButton>
                </ButtonBack>

                <ButtonNext
                  style={{ background: 'transparent', border: 'none' }}
                >
                  <CarouselNavButton
                    onClick={() => setProductsToMark([])}
                    right
                  >
                    <GrNext size={'25px'} style={{ margin: 'auto 0' }} />
                  </CarouselNavButton>
                </ButtonNext>
              </div>
            )}
          </CarouselProvider>
        </CarouselContainer>
      </Container>
    );
  return null;
};

export default ProductsCarousel;
