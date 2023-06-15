import React from 'react';
import { HomeContainer } from './Home.styles';
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
import { CountdownSection } from '@/components/molecules/CountdownSection';
import { SmartBanner } from '@/components/molecules/SmartBanner';
import useBreakpoints from '@/hooks/useBreakpoints';
import useSmartBannerTime from '@/hooks/useSmartBannerTime';
import Container  from '@/components/atoms/Container';
import Title from '@/components/atoms/Title';
import { onDate } from '@/hooks/utils';
import { Calugas } from '@/components/molecules/Calugas/Calugas';

const Home = () => {
  const dispatch = useAppDispatch();
  const { products, loadingProducts } = useAppSelector(
    (state) => state.products,
  );

  const methods = {
    addToCart: (product: ProductModel) => {
      customDispatchEvent({
        name: 'ADD_PRODUCT_IN_CART',
        detail: { ...product, quantity: 1 },
      });
    },
  };

  const { isXs, isSm } = useBreakpoints();
  const showSmartBanner = useSmartBannerTime(new Date().getTime());

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

            case 'calugas-home': {
              return (
                <Container>
                  <Title text={content.title} />
                  <Calugas items={content.itemsCaluga}/>
                </Container>
              );
            }

            case 'countdown-promo': {
              return onDate(content.endDate || '') ? null : (
                <Container>
                  <Title text="Decora y ahorra con estos productos" />
                  <CountdownSection
                    endDate={content.endDate as string}
                    startDate={content.startDate as string}
                    highlightedText={content.highlightedText}
                    showIcon={content.showIcon}
                    icon={content.icon}
                    content={<></>}
                  />
                </Container>
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

      {(isXs && showSmartBanner) || (isSm && showSmartBanner) ? (
        <SmartBanner
          linkStore="https://play.google.com/store/apps/details?id=com.cencosud.easy.cl"
          hideTime={1}
        />
      ) : null}
    </HomeContainer>
  );
};

export default Home;
