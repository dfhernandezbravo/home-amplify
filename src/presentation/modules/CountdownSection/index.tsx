/* eslint-disable @next/next/no-img-element */
import { ProductAnalytics } from '@/domain/entities/analytics/analytics';
import { ContentBody } from '@/domain/entities/content/content.types';
import {
  ProductSkuSellers,
  ProductSkuStruct,
} from '@/domain/entities/products/skus';
import { getProductsBySkus } from '@/domain/use-cases/products';
import Container from '@/presentation/components/atoms/Container';
import Title from '@/presentation/components/atoms/Title';
import { useAppDispatch } from '@/presentation/hooks/storeHooks';
import useAnalytics from '@/presentation/hooks/useAnalytics';
import useBreakpoints from '@/presentation/hooks/useBreakpoints';
import useIsInViewport from '@/presentation/hooks/useIsInViewport';
import { calculateDiscount, formatPrice } from '@/presentation/hooks/utils';
import { Product } from '@/presentation/store/products/product.type';
import Image from 'next/image';
import { useRouter } from 'next/router';
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Dot,
  Slide,
  Slider,
} from 'pure-react-carousel';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { GrNext, GrPrevious } from 'react-icons/gr';
import {
  BuyButton,
  CarouselNavButton,
  CountDownWrap,
  CountdownContent,
  CountdownHeader,
  CountdownSectionWrapper,
  CountdownTop,
  Description,
  DescriptionCarrousel,
  DescriptionWrapper,
  DotContainer,
  Dots,
  HighlightedText,
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
import { CountdownProducts } from './CountdownSection.types';
import Countdown from './components/Countdown';
import useLinks from '@/presentation/hooks/useLink';

const CountdownSection = (props: ContentBody) => {
  const {
    backgroundColor,
    endDate,
    headerColor,
    subtitle,
    title,
    productList,
    fieldName,
  } = props;

  const { getLink, sendEvent } = useLinks();

  const {
    methods: { sendImpressionsEvent, sendProductClickEvent },
  } = useAnalytics();
  const [productsToMark, setProductsToMark] = useState<ProductAnalytics[]>([]);
  const productRef = useRef<HTMLInputElement>(null);
  const { isIntersecting, observer } = useIsInViewport(productRef);

  const dispatch = useAppDispatch();
  const router = useRouter();
  const [products, setProduct] = useState<ProductSkuStruct[]>([]);
  const [isEnabled, setIsEnabled] = useState(true);

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
    const skuList = productList?.map((p: CountdownProducts) => p.item);
    const skusToStr = skuList.join(',');
    const productsSkus = await getProducts(skusToStr);
    if (productsSkus?.payload?.length > 0) {
      setProduct(productsSkus?.payload);
    }
  }, []);

  useEffect(() => {
    if (productList?.length > 0) {
      getSkus();
    }
  }, [getSkus, productList]);

  const handleProductImpression = (item: Product, position: number) => {
    const product: ProductAnalytics = {
      name: item?.items?.[0].name || '',
      id: item?.items?.[0].referenceId?.[0].Value || '',
      price: item?.items?.[0].sellers?.[0].commertialOffer?.Price || 0,
      brand: item?.brand || '',
      category: item?.categories?.[0] || '',
      variant: item?.items?.[0].referenceId?.[0].Value || '',
      position: position + 1,
      quantity: 1,
      list: 'Productos Destacados Crono',
    };
    return product;
  };

  const handleProductClick = (item: Product, position: number) => {
    const products: ProductAnalytics[] = [
      {
        name: item?.items?.[0].name || '',
        id: item?.items?.[0].referenceId?.[0].Value || '',
        price: item?.items?.[0].sellers?.[0].commertialOffer?.Price || 0,
        brand: item?.brand || '',
        category: item?.categories?.[0] || '',
        variant: item?.items?.[0].referenceId?.[0].Value || '',
        position: position + 1,
        quantity: 1,
      },
    ];

    sendProductClickEvent({
      event: 'productClick',
      ecommerce: {
        tipoClic: 'clic PDP',
        click: {
          actionField: { list: 'Productos Destacados Crono' },
          products,
        },
        currencyCode: 'CLP',
      },
    });
  };

  // Mark when component is visible
  useEffect(() => {
    if (isIntersecting && productsToMark.length > 0) {
      sendImpressionsEvent({
        event: 'impressions',
        ecommerce: {
          impressions: productsToMark,
          currencyCode: 'CLP',
        },
      });

      if (productRef.current) {
        observer.unobserve(productRef.current);
      }
    }
  }, [isIntersecting, productsToMark]);

  useEffect(() => {
    const prodToMark: ProductAnalytics[] = products.map((item, index) => {
      return handleProductImpression(item as Product, index);
    });
    setProductsToMark(prodToMark);
  }, [products]);

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
            <CountDownWrap>
              <Title text={title} />
              <CountdownSectionWrapper color={headerColor} ref={productRef}>
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
                                <TitleDescription>
                                  {product.brand}
                                </TitleDescription>
                                <div>
                                  <ProductName>
                                    {product.productName}
                                  </ProductName>
                                </div>
                                <PriceWrapper>
                                  <ProductPrice>
                                    {handlePrices(
                                      product?.items[0]?.sellers[0],
                                      'PRICE',
                                    )}
                                  </ProductPrice>
                                  {handlePrices(
                                    product?.items[0]?.sellers[0],
                                    'DISCOUNT',
                                  ) && (
                                    <ProductDiscount>
                                      {handlePrices(
                                        product?.items[0]?.sellers[0],
                                        'DISCOUNT',
                                      )}
                                    </ProductDiscount>
                                  )}
                                </PriceWrapper>
                                <NormalPrice>
                                  {handlePrices(
                                    product?.items[0]?.sellers[0],
                                    'NORMAL',
                                  )}
                                </NormalPrice>
                              </ProductDescription>
                            </div>
                          </Description>
                          <BuyButton>
                            <LinkBuyButton
                              href={getLink(product.link)}
                              target="_parent"
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
                            <DescriptionCarrousel
                              key={index}
                              style={{
                                ...borderAssign(index + 1, products?.length),
                                background: backgroundColor,
                              }}
                            >
                              <ImageSection>
                                {product?.items[0]?.images && (
                                  <img
                                    src={product?.items[0]?.images[0]?.imageUrl}
                                    alt={product?.productName}
                                  />
                                )}
                              </ImageSection>
                              <div>
                                <DescriptionWrapper>
                                  <TitleDescription>
                                    {product.brand}
                                  </TitleDescription>
                                  <div>
                                    <ProductName>
                                      {product.productName}
                                    </ProductName>
                                  </div>
                                  <PriceWrapper>
                                    <ProductPrice>
                                      {handlePrices(
                                        product?.items[0]?.sellers[0],
                                        'PRICE',
                                      )}
                                    </ProductPrice>
                                    {handlePrices(
                                      product?.items[0]?.sellers[0],
                                      'DISCOUNT',
                                    ) && (
                                      <ProductDiscount>
                                        {handlePrices(
                                          product?.items[0]?.sellers[0],
                                          'DISCOUNT',
                                        )}
                                      </ProductDiscount>
                                    )}
                                  </PriceWrapper>
                                  <NormalPrice>
                                    {handlePrices(
                                      product?.items[0]?.sellers[0],
                                      'NORMAL',
                                    )}
                                  </NormalPrice>
                                </DescriptionWrapper>
                                <BuyButton
                                  onClick={() => {
                                    router.push(product.link);
                                    handleProductClick(
                                      product as Product,
                                      index,
                                    );
                                  }}
                                >
                                  ¡Lo compro!
                                </BuyButton>
                              </div>
                            </DescriptionCarrousel>
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
            </CountDownWrap>
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
