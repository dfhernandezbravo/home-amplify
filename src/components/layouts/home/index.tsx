import React, { useEffect } from 'react';
import { getProducts } from '@/store/products';
import { Container, HomeContainer } from './Home.styles';
import { useAppDispatch, useAppSelector } from '@/hooks/storeHooks';
import { customDispatchEvent } from '@/store/events/dispatchEvents';

import viewData from '../../../mock/home-view.json';
import { TextBanner } from '@/components/atoms/TextBanner';
import { Carousel } from '@/components/molecules/Carousel';
import { Gallery } from '@/components/molecules/Gallery';
import { ProductModel } from '@/store/products/product.type';
import { BottomCards } from '@/components/molecules/BottomCards';
import { Categories } from '@/components/molecules/Categories';
import ProductCarousel from '@/components/molecules/ProductsCarousel/ProductsCarousel';

const Home = () => {
  const dispatch = useAppDispatch();
  const { products, loadingProducts } = useAppSelector(
    (state) => state.products
  );

  const methods = {
    addToCart: (product: ProductModel) => {
      customDispatchEvent({
        name: 'ADD_PRODUCT_IN_CART',
        detail: { ...product, quantity: 1 },
      });
    },
  };

  return (
    <HomeContainer>
      {viewData?.content &&
        viewData.content.map((content, index) => {
          switch (content.component) {
            case 'cinta-texto': {
              return (
                <TextBanner
                  key={`home_content_${index}`}
                  image={content.image}
                  mobileImage={content.mobileImage}
                  altDescription={content.desription}
                />
              );
            }

            case 'carrousel-home': {
              return (
                <Carousel
                  key={`home_content_${index}`}
                  items={content.items || []}
                  itemsPerRow={
                    (typeof content.itemsPerRow === 'string'
                      ? Number.parseInt(content.itemsPerRow)
                      : content.itemsPerRow) || 1
                  }
                  styles={{
                    padding: content.width === 100 ? '0' : '0 1rem',
                    maxWidth:
                      content.width === 100 ? '100%' : `${content.width}rem`,
                  }}
                />
              );
            }

            case 'galeria-home': {
              return (
                <Container key={`home_content_${index}`}>
                  <Gallery
                    items={content.items || []}
                    itemsPerRow={
                      (typeof content.itemsPerRow === 'string'
                        ? Number.parseInt(content.itemsPerRow)
                        : content.itemsPerRow) || 1
                    }
                    carouselMode={content.carouselMode}
                    styles={{
                      maxWidth: '80rem',
                    }}
                  />
                </Container>
              );
            }

            case 'categories-home': {
              return (
                <Container key={`home_content_${index}`}>
                  <Categories items={content.items || []} />
                </Container>
              );
            }
            case 'carousel-productos': {
              if (content.productClusterId)
                return (
                  <Container key={`product_carousel_${index}`}>
                    <ProductCarousel
                      productClusterId={content.productClusterId}
                      onAddToCart={(product: ProductModel) => {
                        methods.addToCart(product);
                      }}
                    />
                  </Container>
                );
            }
          }
        })}

      <BottomCards />
    </HomeContainer>
  );
};

export default Home;
