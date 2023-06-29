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
  const { clusterId, onAddToCart, skuList } = props;

  //State
  const [items, setItems] = useState<any>();

  //Hooks
  const { isSm, isMd, isLg } = useBreakpoints();
  
  const checkBreackpoints =( defaultBreackpoint : number, firstBreackpoint : number, secondBreackpoint : number)=>{
    if(isLg) return firstBreackpoint;
    if(isMd || isSm) return secondBreackpoint;
    return defaultBreackpoint;
  }

  const methods = {
    getProductsByClusterId: async (clusterId: string) => {
      if (clusterId) {
        const response = await ProductService.getProductsByClusterId(clusterId);
        setItems(response);
      }
    },
    getProductsByIds: async (skuList: string) => {
      if (skuList) {
        const response = await ProductService.getProductsByIds(skuList);
        setItems(response);
      }
    },
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
            visibleSlides={checkBreackpoints(1.3, 4, 3)}
            step={checkBreackpoints(2, 5, 3)}
          >
            <Slider>
              {items.map((item: ProductModel, index: number) => (
                <Slide key={item.productId + index} index={index}>
                  <ProductCard product={item} onAddToCart={onAddToCart} />
                </Slide>
              ))}
            </Slider>

            {isLg && (
              <div>
                <ButtonBack
                  style={{ background: 'transparent', border: 'none' }}
                >
                  <CarouselNavButton style={{ left: '-3rem' }}>
                    <GrPrevious size={'25px'} />
                  </CarouselNavButton>
                </ButtonBack>

                <ButtonNext
                  style={{ background: 'transparent', border: 'none' }}
                >
                  <CarouselNavButton style={{ right: '-3rem' }}>
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

export default ProductCarousel;
