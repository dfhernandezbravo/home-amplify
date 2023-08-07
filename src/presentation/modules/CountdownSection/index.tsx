/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import {
  BuyButton,
  CarouselNavButton,
  CountdownContent,
  CountdownHeader,
  CountdownSectionWrapper,
  CountdownTop,
  Description,
  DotContainer,
  Dots,
  HighlightedText,
  ProductContainer,
} from './CountdownSection.styles';
import { CountdownProducts, CountdownStruct } from './CountdownSection.types';
import Countdown from './components/Countdown';
import Container from '@/presentation/components/atoms/Container';
import Title from '@/presentation/components/atoms/Title';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useAppDispatch } from '@/presentation/hooks/storeHooks';
import { getProductsBySkus } from '@/domain/use-cases/products';
import {
  ProductSkuSellers,
  ProductSkuStruct,
} from '@/domain/entities/products/skus';
import {
  IsMobile,
  calculateDiscount,
  formatPrice,
} from '@/presentation/hooks/utils';
import { DiscountPercentage } from '../ProductCard/Components/ProductPrice/ProductPrice.style';
import { Router, useRouter } from 'next/router';
import useBreakpoints from '@/presentation/hooks/useBreakpoints';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Dot,
} from 'pure-react-carousel';
import { GrNext, GrPrevious } from 'react-icons/gr';
import Link from 'next/link';
import useLinks from '@/presentation/hooks/useLink';

const CountdownSection = (props: CountdownStruct) => {
  const {
    backgroundColor,
    endDate,
    headerColor,
    subtitle,
    title,
    productList,
  } = props;
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [products, setProduct] = useState<ProductSkuStruct[]>([]);
  const [isEnabled, setIsEnabled] = useState(true);
  const { getLink, sendEvent } = useLinks();

  const { isXs, isSm, isMd, isLg } = useBreakpoints();

  const checkActivation = useCallback(() => {
    return setTimeout(() => {
      if (products?.length > 0) return true;
    }, 1000);
  }, [products]);

  const getProducts = async (skus: string) => {
    return await dispatch(getProductsBySkus(skus));
  };

  const getSkus = useCallback(async () => {
    const skuList = productList?.map((p: CountdownProducts) => p.skuId);
    const skusToStr = skuList.join(',');
    const productsSkus = await getProducts(skusToStr);
    if (productsSkus?.payload?.length > 0) setProduct(productsSkus?.payload);
  }, []);

  useEffect(() => {
    if (productList?.length > 0) getSkus();
  }, [getSkus, productList]);

  const borderAssign = (index: number, quantity: number) => {
    const defaultBorder = { border: 'none' };
    const borderColor = '1px solid #ccc';
    if (quantity === 1) return defaultBorder;
    if (quantity > 2) {
      switch (index) {
        case 1:
          return { borderRight: borderColor };
        case 3:
          return { borderLeft: borderColor };
        default:
          return defaultBorder;
      }
    }
    return defaultBorder;
  };

  const handlePrices = (seller: ProductSkuSellers, type: string) => {
    const defaultValue = formatPrice(seller?.commertialOffer?.Price);
    switch (type) {
      case 'PRICE':
        return `$${defaultValue}`;
      case 'NORMAL':
        const normalPrice = formatPrice(seller?.commertialOffer?.ListPrice);
        return defaultValue < normalPrice && `Normal:$${normalPrice}`;
      case 'DISCOUNT':
        const discount = calculateDiscount(
          seller?.commertialOffer?.Price,
          seller?.commertialOffer?.ListPrice,
        );
        return parseFloat(discount) > 0 && `${discount}%`;
      default:
        return `$${defaultValue}`;
    }
  };

  return useMemo(
    () => (
      <React.Fragment>
        {checkActivation() && isEnabled && (
          <Container>
            <div
              style={{
                maxHeight: 'max-content',
                width: '100%',
                margin: 'auto',
              }}
            >
              <Title text={title} />
              <CountdownSectionWrapper color={headerColor}>
                <CountdownHeader color={headerColor}>
                  <CountdownTop>
                    <Image
                      src="https://easycl.vtexassets.com/assets/vtex.file-manager-graphql/images/e0174805-b275-4df8-bad5-08e0028e00a4___39e00f79fefd42ca2a8dc1504c7263de.svg"
                      width={100}
                      height={100}
                      alt="Icon clock"
                    />
                    <HighlightedText>{subtitle}</HighlightedText>
                  </CountdownTop>
                  <Countdown endDate={endDate} setIsEnabled={setIsEnabled} />
                </CountdownHeader>

                {(isLg || isMd) && (
                  <CountdownContent>
                    {products?.map(
                      (product: ProductSkuStruct, index: number) => (
                        <ProductContainer
                          key={index}
                          style={{
                            ...borderAssign(index + 1, products?.length),
                            background: backgroundColor,
                          }}
                        >
                          <Description>
                            <section
                              style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                              }}
                            >
                              {product?.items[0]?.images && (
                                <img
                                  src={product?.items[0]?.images[0]?.imageUrl}
                                  alt={product?.productName}
                                  width={150}
                                  height={150}
                                />
                              )}
                            </section>
                            <div>
                              <div style={{ minHeight: 200 }}>
                                <div
                                  style={{
                                    background: '#f2f2f2',
                                    borderRadius: 6,
                                    padding: '6px 10px',
                                    width: 'max-content',
                                    marginBottom: 8,
                                  }}
                                >
                                  {product.brand}
                                </div>
                                <div>
                                  <p style={{ marginBottom: 10 }}>
                                    {product.productName}
                                  </p>
                                </div>
                                <div style={{ display: 'flex' }}>
                                  <p
                                    style={{
                                      fontSize: 20,
                                      fontWeight: 700,
                                      marginBottom: 15,
                                    }}
                                  >
                                    {handlePrices(
                                      product?.items[0]?.sellers[0],
                                      'PRICE',
                                    )}
                                  </p>
                                  {handlePrices(
                                    product?.items[0]?.sellers[0],
                                    'DISCOUNT',
                                  ) && (
                                    <p
                                      style={{
                                        marginLeft: 10,
                                        color: '#990707',
                                        background: '#f1dddd',
                                        padding: '2px 4px 2px 4px',
                                        borderRadius: 5,
                                        fontWeight: 700,
                                        fontSize: 14,
                                        height: 'max-content',
                                      }}
                                    >
                                      {handlePrices(
                                        product?.items[0]?.sellers[0],
                                        'DISCOUNT',
                                      )}
                                    </p>
                                  )}
                                </div>
                                <p
                                  style={{
                                    textDecoration: 'line-through',
                                    color: '#4d4d4d',
                                    fontSize: 12,
                                  }}
                                >
                                  {handlePrices(
                                    product?.items[0]?.sellers[0],
                                    'NORMAL',
                                  )}
                                </p>
                              </div>
                            </div>
                          </Description>
                          <BuyButton>
                            <Link
                              href={getLink(product.link)}
                              onClick={() => sendEvent(product.link)}
                            >
                              ¡Lo compro!
                            </Link>
                          </BuyButton>
                        </ProductContainer>
                      ),
                    )}
                  </CountdownContent>
                )}

                {(isSm || isXs) && (
                  <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={25}
                    totalSlides={3}
                    isIntrinsicHeight={true}
                  >
                    <Slider>
                      {products?.map(
                        (product: ProductSkuStruct, index: number) => (
                          <Slide key={index} index={index}>
                            <div
                              key={index}
                              style={{
                                display: 'flex',
                                justifyContent: 'center',
                                ...borderAssign(index + 1, products?.length),
                                width: '100%',
                                background: backgroundColor,
                                padding: 50,
                              }}
                            >
                              <section
                                style={{
                                  display: 'flex',
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                }}
                              >
                                {product?.items[0]?.images && (
                                  <img
                                    src={product?.items[0]?.images[0]?.imageUrl}
                                    alt={product?.productName}
                                    width={150}
                                    height={150}
                                  />
                                )}
                              </section>
                              <div>
                                <div style={{ minHeight: 200 }}>
                                  <div
                                    style={{
                                      background: '#f2f2f2',
                                      borderRadius: 6,
                                      padding: '6px 10px',
                                      width: 'max-content',
                                      marginBottom: 8,
                                    }}
                                  >
                                    {product.brand}
                                  </div>
                                  <div>
                                    <p style={{ marginBottom: 10 }}>
                                      {product.productName}
                                    </p>
                                  </div>
                                  <div style={{ display: 'flex' }}>
                                    <p
                                      style={{
                                        fontSize: 20,
                                        fontWeight: 700,
                                        marginBottom: 15,
                                      }}
                                    >
                                      {handlePrices(
                                        product?.items[0]?.sellers[0],
                                        'PRICE',
                                      )}
                                    </p>
                                    {handlePrices(
                                      product?.items[0]?.sellers[0],
                                      'DISCOUNT',
                                    ) && (
                                      <p
                                        style={{
                                          marginLeft: 10,
                                          color: '#990707',
                                          background: '#f1dddd',
                                          padding: '2px 4px 2px 4px',
                                          borderRadius: 5,
                                          fontWeight: 700,
                                          fontSize: 14,
                                          height: 'max-content',
                                        }}
                                      >
                                        {handlePrices(
                                          product?.items[0]?.sellers[0],
                                          'DISCOUNT',
                                        )}
                                      </p>
                                    )}
                                  </div>
                                  <p
                                    style={{
                                      textDecoration: 'line-through',
                                      color: '#4d4d4d',
                                      fontSize: 12,
                                    }}
                                  >
                                    {handlePrices(
                                      product?.items[0]?.sellers[0],
                                      'NORMAL',
                                    )}
                                  </p>
                                </div>
                                <div
                                  style={{
                                    border: '1.6px solid #af1212',
                                    borderRadius: 6,
                                    color: '#af1212',
                                    fontWeight: 600,
                                    padding: 12,
                                    width: 'max-content',
                                    cursor: 'pointer',
                                    marginTop: 20,
                                  }}
                                  onClick={() => router.push(product.link)}
                                >
                                  ¡Lo compro!
                                </div>
                              </div>
                            </div>
                          </Slide>
                        ),
                      )}
                    </Slider>

                    <CarouselNavButton>
                      <ButtonBack
                        style={{ background: 'transparent', border: 'none' }}
                      >
                        <GrPrevious size={'25px'} />
                      </ButtonBack>
                    </CarouselNavButton>
                    <CarouselNavButton right>
                      <ButtonNext
                        style={{ background: 'transparent', border: 'none' }}
                      >
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
                )}
              </CountdownSectionWrapper>
            </div>
          </Container>
        )}
      </React.Fragment>
    ),
    [
      checkActivation,
      title,
      headerColor,
      subtitle,
      endDate,
      products,
      isEnabled,
      backgroundColor,
      isLg,
      isSm,
      isMd,
      isXs,
    ],
  );
};

export default CountdownSection;
