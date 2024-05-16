/* eslint-disable @next/next/no-img-element */
import { ProductSkuStruct } from '@/domain/entities/products/skus';
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Dot,
  Slide,
  Slider,
} from 'pure-react-carousel';
import React from 'react';
import {
  CarouselNavButton,
  DescriptionCarrousel,
  DescriptionWrapper,
  DotContainer,
  Dots,
  ImageSection,
  LinkBuyButton,
  NormalPrice,
  PriceWrapper,
  ProductDiscount,
  ProductName,
  ProductPrice,
  TitleDescription,
} from './CountdownSection.styles';
import { borderAssign } from './helpers/styles';
import { GrNext, GrPrevious } from 'react-icons/gr';
import { handlePrices } from './helpers/prices';
import useRedirectLink from '@/presentation/hooks/useRedirectLink';
import { Product } from '@/domain/entities/products/product.type';

type ProductTmp = Product & Partial<ProductSkuStruct>;

type PropsStruct = {
  products: ProductTmp[];
  background: string;
  handleProductClick: (item: Product, position: number) => void;
};

const Moblie = (props: PropsStruct) => {
  const { products, background, handleProductClick } = props;
  const { redirect } = useRedirectLink();

  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={25}
      totalSlides={3}
      isIntrinsicHeight={true}
    >
      <Slider>
        {products?.map((product, index) => (
          <Slide key={index} index={index}>
            <DescriptionCarrousel
              key={index}
              style={{
                ...borderAssign(index + 1, products?.length),
                background: background,
              }}
            >
              <ImageSection>
                {product.items![0]?.images && (
                  <img
                    src={product?.items![0]?.images[0]?.imageUrl}
                    alt={product?.productName}
                  />
                )}
              </ImageSection>
              <div>
                <DescriptionWrapper>
                  <TitleDescription>{product.brand}</TitleDescription>
                  <div>
                    <ProductName>{product.productName}</ProductName>
                  </div>
                  <PriceWrapper>
                    <ProductPrice>
                      {handlePrices(product?.items![0]?.sellers[0], 'PRICE')}
                    </ProductPrice>
                    {handlePrices(
                      product?.items![0]?.sellers[0],
                      'DISCOUNT',
                    ) && (
                      <ProductDiscount>
                        {handlePrices(
                          product?.items![0]?.sellers[0],
                          'DISCOUNT',
                        )}
                      </ProductDiscount>
                    )}
                  </PriceWrapper>
                  <NormalPrice>
                    {handlePrices(product?.items![0]?.sellers[0], 'NORMAL')}
                  </NormalPrice>
                </DescriptionWrapper>
                <LinkBuyButton
                  href={redirect(product.link!)}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleProductClick(product as Product, index);
                  }}
                >
                  ¡Lo compro!
                </LinkBuyButton>
              </div>
            </DescriptionCarrousel>
          </Slide>
        ))}
      </Slider>

      <CarouselNavButton>
        <ButtonBack style={{ background: 'transparent', border: 'none' }}>
          <GrPrevious size={'25px'} />
        </ButtonBack>
      </CarouselNavButton>
      <CarouselNavButton right>
        <ButtonNext style={{ background: 'transparent', border: 'none' }}>
          <GrNext size={'25px'} />
        </ButtonNext>
      </CarouselNavButton>

      <DotContainer>
        {products.map((item, index) => (
          <Dot slide={index} key={index}>
            <div>
              <Dots />
            </div>
          </Dot>
        ))}
      </DotContainer>
    </CarouselProvider>
  );
};

export default Moblie;
