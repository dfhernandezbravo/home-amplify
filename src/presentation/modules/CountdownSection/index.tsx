/* eslint-disable @next/next/no-img-element */
import { ProductAnalytics } from '@/domain/entities/analytics/analytics';
import { ContentBody } from '@/domain/entities/content/content.types';
import { ProductSkuStruct } from '@/domain/entities/products/skus';
import Container from '@/presentation/components/atoms/Container';
import Title from '@/presentation/components/atoms/Title';
import useAnalytics from '@/presentation/hooks/useAnalytics';
import useBreakpoints from '@/presentation/hooks/useBreakpoints';
import useIsInViewport from '@/presentation/hooks/useIsInViewport';
import { Product } from '@/presentation/store/products/product.type';
import Image from 'next/image';

import getProductBySkus from '@/domain/use-cases/products/get-products-by-skus';
import { itemProperties } from '@/helpers/analytics';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  CountDownWrap,
  CountdownHeader,
  CountdownSectionWrapper,
  CountdownTop,
  HighlightedText,
} from './CountdownSection.styles';
import { CountdownProducts } from './CountdownSection.types';
import Desktop from './Desktop';
import Moblie from './Mobile';
import Countdown from './components/Countdown';
import { handleProductImpression } from './helpers/analytics';

const CountdownSection = (props: ContentBody) => {
  const {
    backgroundColor,
    endDate,
    headerColor,
    subtitle,
    title,
    productList,
  } = props;

  const {
    methods: { sendImpressionsEvent, sendProductClickEvent },
  } = useAnalytics();
  const [productsToMark, setProductsToMark] = useState<ProductAnalytics[]>([]);
  const productRef = useRef<HTMLInputElement>(null);
  const { isIntersecting, observer } = useIsInViewport(productRef);

  const [products, setProduct] = useState<ProductSkuStruct[]>([]);
  const [isEnabled, setIsEnabled] = useState(true);

  const { isXs, isSm, isMd, isLg } = useBreakpoints();

  const checkActivation = useCallback(() => {
    return setTimeout(() => {
      if (products?.length > 0) return true;
    }, 1000);
  }, [products]);

  const getProducts = async (skus: string) => {
    return await getProductBySkus(skus);
  };

  const getSkus = useCallback(async () => {
    const skuList = productList?.map((p: CountdownProducts) => p.item);
    const skusToStr = skuList.join(',');
    const productsSkus = await getProducts(skusToStr);
    if (productsSkus) {
      setProduct(productsSkus as ProductSkuStruct[]);
    }
  }, []);

  useEffect(() => {
    if (productList?.length > 0) {
      getSkus();
    }
  }, [getSkus, productList]);

  const handleProductClick = (item: Product, position: number) => {
    const itemSelected = item?.items?.[0];
    const products: ProductAnalytics[] = [
      {
        ...itemProperties(item),
        price: itemSelected?.sellers?.[0].commertialOffer?.Price || 0,
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

  const isAvalible = () => {
    return checkActivation() && isEnabled;
  };

  const isDesktop = () => {
    return isLg || isMd;
  };

  const isMobile = () => {
    return isSm || isXs;
  };

  return useMemo(
    () => (
      <React.Fragment>
        {isAvalible() && (
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

                {isDesktop() && (
                  <Desktop
                    products={products}
                    background={backgroundColor}
                    handleProductClick={handleProductClick}
                  />
                )}

                {isMobile() && (
                  <Moblie
                    products={products}
                    background={backgroundColor}
                    handleProductClick={handleProductClick}
                  />
                )}
              </CountdownSectionWrapper>
            </CountDownWrap>
          </Container>
        )}
      </React.Fragment>
    ),

    [
      checkActivation,
      isDesktop,
      isMobile,
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
