/* eslint-disable @next/next/no-img-element */
import { ProductSkuStruct } from '@/domain/entities/products/skus';
import { Product } from '@/presentation/store/products/product.type';
import {
  BuyButton,
  CountdownContent,
  Description,
  ImageSection,
  LinkBuyButton,
  NormalPrice,
  PriceWrapper,
  ProductContainer,
  ProductDescription,
  ProductDiscount,
  ProductName,
  ProductPrice,
  TitleDescription,
} from './CountdownSection.styles';
import { borderAssign } from './helpers/styles';
import { handlePrices } from './helpers/prices';
import useLinks from '@/presentation/hooks/useLink';
import React from 'react';

type PropsStruct = {
  products: ProductSkuStruct[];
  background: string;
  handleProductClick: (item: Product, position: number) => void;
};

const Desktop = (props: PropsStruct) => {
  const { products, background, handleProductClick } = props;
  const { getLink, sendEvent } = useLinks();

  return (
    <CountdownContent>
      {products?.map((product: ProductSkuStruct, index: number) => (
        <ProductContainer
          key={index}
          style={{
            ...borderAssign(index + 1, products?.length),
            background: background,
          }}
        >
          <Description>
            <ImageSection>
              {product?.items[0]?.images && (
                <img
                  src={product?.items[0]?.images[0]?.imageUrl}
                  alt={product?.productName}
                />
              )}
            </ImageSection>
            <div>
              <ProductDescription>
                <TitleDescription>{product.brand}</TitleDescription>
                <div>
                  <ProductName>{product.productName}</ProductName>
                </div>
                <PriceWrapper>
                  <ProductPrice>
                    {handlePrices(product?.items[0]?.sellers[0], 'PRICE')}
                  </ProductPrice>
                  {handlePrices(product?.items[0]?.sellers[0], 'DISCOUNT') && (
                    <ProductDiscount>
                      {handlePrices(product?.items[0]?.sellers[0], 'DISCOUNT')}
                    </ProductDiscount>
                  )}
                </PriceWrapper>
                <NormalPrice>
                  {handlePrices(product?.items[0]?.sellers[0], 'NORMAL')}
                </NormalPrice>
              </ProductDescription>
            </div>
          </Description>
          <BuyButton>
            <LinkBuyButton
              href={getLink(product.link)}
              onClick={(e) => {
                e.stopPropagation();
                handleProductClick(product as Product, index);
                sendEvent(product.link);
              }}
            >
              ¡Lo compro!
            </LinkBuyButton>
          </BuyButton>
        </ProductContainer>
      ))}
    </CountdownContent>
  );
};

export default Desktop;
