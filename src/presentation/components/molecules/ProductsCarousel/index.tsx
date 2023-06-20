import React, { useContext, useEffect, useState } from 'react';
import 'pure-react-carousel/dist/react-carousel.es.css';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import { ProductCarouselProps } from './ProductCarousel.types';
import { ProductModel } from '@/presentation/store/products/product.type';
import ProductCard from '../ProductCard';
import { CarouselContainer, CarouselNavButton } from './ProductsCarousel.style';
import { GrNext, GrPrevious } from 'react-icons/gr';
import ProductService from '@/application/services/products';
import useBreakpoints from '@/presentation/hooks/useBreakpoints';

const ProductCarousel = (props: ProductCarouselProps) => {
  //Props
  const { productClusterId, onAddToCart } = props;

  //State
  const [items, setItems] = useState<any>();

  //Hooks
  const { isSm, isMd, isLg } = useBreakpoints();

  const methods = {
    getProductsByClusterId: async (productClusterId: string) => {
      const response = await ProductService.getProductsByClusterId(
        productClusterId,
      );
      setItems(response);
    },
  };

  useEffect(() => {
    methods.getProductsByClusterId(productClusterId);
  }, []);

  if (items)
    return (
      <CarouselContainer>
        <CarouselProvider
          naturalSlideWidth={25}
          naturalSlideHeight={100}
          totalSlides={items.length}
          infinite={false}
          isIntrinsicHeight={true}
          visibleSlides={isLg ? 5 : isMd || isSm ? 3 : 2}
          step={isLg ? 5 : isMd || isSm ? 3 : 2}
        >
          <ButtonBack style={{ background: 'transparent', border: 'none' }}>
            <CarouselNavButton style={{ left: '-1rem' }}>
              <GrPrevious size={'20px'} />
            </CarouselNavButton>
          </ButtonBack>

          <Slider>
            {items.map((item: ProductModel, index: number) => (
              <Slide key={item.productId + index} index={index}>
                <ProductCard product={item} onAddToCart={onAddToCart} />
              </Slide>
            ))}
          </Slider>

          <ButtonNext
            style={{
              background: 'transparent',
              border: 'none',
            }}
          >
            <CarouselNavButton style={{ right: '-1rem' }}>
              <GrNext size={'20px'} style={{ margin: 'auto 0' }} />
            </CarouselNavButton>
          </ButtonNext>
        </CarouselProvider>
      </CarouselContainer>
    );
  return null;
};

export default ProductCarousel;
