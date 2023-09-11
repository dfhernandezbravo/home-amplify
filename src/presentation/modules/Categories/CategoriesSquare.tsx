/* eslint-disable @next/next/no-img-element */
import React, {
  Fragment,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { CategoriesStruct, ItemStruct } from './Categories.types';
import {
  ArrowButton,
  ContainerSwiper,
  ItemContainer,
  ItemImage,
  ItemTitle,
} from './CategoriesSquare.styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Keyboard,
  Scrollbar,
  Navigation,
  Pagination,
  Grid,
} from 'swiper/modules';
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIos,
} from 'react-icons/md';

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/grid';
import useBreakpoints from '@/presentation/hooks/useBreakpoints';
import Link from 'next/link';
import useLinks from '@/presentation/hooks/useLink';
import useAnalytics from '@/presentation/hooks/useAnalytics';
import useIsInViewport from '@/presentation/hooks/useIsInViewport';
import { Promotion } from '@/domain/entities/analytics/analytics';
import { handlePromotionsImpressions } from './helper/analytics';

const CategoriesSquare = (props: CategoriesStruct) => {
  const [swiper, setSwiper] = useState<any>(null);
  const { items, itemsPerRow } = props;
  const [isEnd, setIsEnd] = useState<boolean>(false);
  const { getLink, sendEvent } = useLinks();
  const { isMd, isLg } = useBreakpoints();
  const [dymanicItemsPerRow, setDynamicItemsPerRow] =
    useState<number>(itemsPerRow);
  const elementRef = useRef<HTMLDivElement>(null);
  const { isIntersecting, observer } = useIsInViewport(elementRef);

  const dynamicItems = useCallback(() => {
    if (!isMd && !isLg) return setDynamicItemsPerRow(2);
    if (isMd && !isLg) return setDynamicItemsPerRow(4);
    if (!isMd && isLg) return setDynamicItemsPerRow(itemsPerRow);
  }, [isLg, isMd, itemsPerRow]);

  useEffect(() => {
    dynamicItems();
  }, [dynamicItems, isLg, isMd]);

  const {
    methods: { sendPromotionImpressionEvent },
  } = useAnalytics();

  const HandleItemsToMark = (start: number, end: number) => {
    const itemsToMark: ItemStruct[] = items.slice(start, end);
    const promotionsToMark = itemsToMark.map((item, index) => {
      return handlePromotionsImpressions(item, index + start);
    });
    sendImpression(promotionsToMark);
  };

  const sendImpression = (promotions: Promotion[]) => {
    sendPromotionImpressionEvent({
      event: 'promotionsViews',
      ecommerce: {
        promoView: {
          promotions,
        },
      },
    });
  };

  // Mark when component is visible
  useEffect(() => {
    if (isIntersecting) {
      const end = isLg ? dymanicItemsPerRow : dymanicItemsPerRow * 2;
      HandleItemsToMark(0, end);
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    }
  }, [isIntersecting]);

  return (
    <div ref={elementRef}>
      <Fragment>
        {isLg && (
          <ContainerSwiper>
            <ArrowButton onClick={() => swiper.slidePrev()} disabled={!isEnd}>
              <MdOutlineArrowBackIos />
            </ArrowButton>
            <Swiper
              slidesPerView={dymanicItemsPerRow}
              onSwiper={(ev) => setSwiper(ev)}
              onSlideChange={(ev) => setIsEnd(ev?.isEnd)}
              slidesPerGroup={dymanicItemsPerRow}
              modules={[Keyboard, Scrollbar, Navigation, Pagination]}
              pagination={{
                clickable: true,
              }}
              onRealIndexChange={(e) => {
                HandleItemsToMark(
                  e.realIndex,
                  e.realIndex + dymanicItemsPerRow,
                );
              }}
            >
              {items?.length > 0 &&
                items.map((item: ItemStruct, index: number) => (
                  <SwiperSlide key={index}>
                    <ItemContainer>
                      <Link href={getLink(item.link)}>
                        <ItemImage src={item.image} alt={item.title} />
                        <ItemTitle>{item.title}</ItemTitle>
                      </Link>
                    </ItemContainer>
                  </SwiperSlide>
                ))}
              <div className="swiper-pagination-bullet custom-pagination-categories" />
            </Swiper>
            <ArrowButton onClick={() => swiper.slideNext()} disabled={isEnd}>
              <MdOutlineArrowForwardIos />
            </ArrowButton>
          </ContainerSwiper>
        )}
        {!isLg && (
          <div style={{ padding: 20 }}>
            <Swiper
              onSwiper={(ev) => setSwiper(ev)}
              onSlideChange={(ev) => setIsEnd(ev?.isEnd)}
              slidesPerView={dymanicItemsPerRow}
              slidesPerGroup={dymanicItemsPerRow}
              grid={{
                fill: 'row',
                rows: 2,
              }}
              modules={[Keyboard, Scrollbar, Navigation, Pagination, Grid]}
              pagination={{
                clickable: true,
              }}
              onRealIndexChange={(e) => {
                {
                  HandleItemsToMark(
                    e.realIndex * 2,
                    e.realIndex * 2 + dymanicItemsPerRow * 2,
                  );
                }
              }}
            >
              {items?.length > 0 &&
                items.map((item: ItemStruct, index: number) => (
                  <SwiperSlide key={index}>
                    <ItemContainer>
                      <Link
                        href={getLink(item.link)}
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          flexFlow: 'column',
                        }}
                      >
                        <ItemImage src={item.image} alt={item.title} />
                        <ItemTitle>{item.title}</ItemTitle>
                      </Link>
                    </ItemContainer>
                  </SwiperSlide>
                ))}
              <div className="swiper-pagination-bullet custom-pagination-categories" />
            </Swiper>
          </div>
        )}
      </Fragment>
    </div>
  );
};

export default CategoriesSquare;
