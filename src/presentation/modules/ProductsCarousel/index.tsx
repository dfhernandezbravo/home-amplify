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

const ProductCarousel = (props: any) => {
  //Props
  console.log("props:", props)
  const { clusterId, onAddToCart, skuList } = props;

  //State
  const [items, setItems] = useState<any>();

  //Hooks
  const { isSm, isMd, isLg } = useBreakpoints();

  const methods = {
    getProductsByClusterId: async (clusterId: string) => {
      if (clusterId) {
        const response = await ProductService.getProductsByClusterId(
          clusterId,
        );
        setItems(response);
      }
    },
    getProductsByIds: async (skuList: string) => {
      if (skuList) {
        const response = await ProductService.getProductsByIds(skuList);
        setItems(response)
      }
    }
  };

  useEffect(() => {
    clusterId && methods.getProductsByClusterId(clusterId);
    skuList && methods.getProductsByIds(skuList);
  }, []);

  if (items)
    return (
      <Container>
        <CarouselContainer>
          <CarouselProvider
            naturalSlideWidth={25}
            naturalSlideHeight={100}
            totalSlides={items.length}
            infinite={false}
            isIntrinsicHeight={true}
            visibleSlides={isLg ? 4 : isMd || isSm ? 3 : 2}
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
      </Container>
    );
  return null;
};

export default ProductCarousel;
