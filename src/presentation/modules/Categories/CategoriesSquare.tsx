/* eslint-disable @next/next/no-img-element */
import { Promotion } from '@/domain/entities/analytics/analytics';
import useAnalytics from '@/presentation/hooks/useAnalytics';
import useBreakpoints from '@/presentation/hooks/useBreakpoints';
import useIsInViewport from '@/presentation/hooks/useIsInViewport';
import useLinks from '@/presentation/hooks/useLink';
import Link from 'next/link';
import { Fragment, useCallback, useEffect, useRef, useState } from 'react';
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from 'react-icons/md';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {
  Grid,
  Keyboard,
  Navigation,
  Pagination,
  Scrollbar,
} from 'swiper/modules';
import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react';
import { CategoriesStruct, ItemStruct } from './Categories.types';
import {
  ArrowButton,
  ContainerSwiper,
  ItemContainer,
  ItemImage,
  ItemTitle,
} from './CategoriesSquare.styles';
import { handlePromotionsImpressions } from './helper/analytics';

const CategoriesSquare = (props: CategoriesStruct) => {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);
  const { items, itemsPerRow } = props;
  const [isEnd, setIsEnd] = useState<boolean>(false);
  const { getLink, sendEvent } = useLinks();
  const { isMd, isLg } = useBreakpoints();
  const [dymanicItemsPerRow, setDynamicItemsPerRow] =
    useState<number>(itemsPerRow);
  const elementRef = useRef<HTMLDivElement>(null);
  const { isIntersecting, observer } = useIsInViewport(elementRef);

  const dynamicItems = useCallback(() => {
    if (!isMd) {
      if (!isLg) return setDynamicItemsPerRow(2);
      return setDynamicItemsPerRow(itemsPerRow);
    }
    if (isMd && !isLg) return setDynamicItemsPerRow(4);
  }, [isLg, isMd, itemsPerRow]);

  useEffect(() => {
    dynamicItems();
  }, [dynamicItems, isLg, isMd]);

  const {
    methods: { sendPromotionImpressionEvent, sendPromotionClickEvent },
  } = useAnalytics();

  const handleItemClick = (item: ItemStruct, index: number) => {
    const promotions = [
      {
        id: 'Burbuja',
        name: `${item.title}`,
        creative: `${item.link}`,
        position: `${index + 1}`,
      },
    ];

    sendPromotionClickEvent({
      event: 'promotionClick',
      ecommerce: {
        promoClick: {
          promotions,
        },
      },
    });
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

  const HandleItemsToMark = (start: number, end: number) => {
    const itemsToMark: ItemStruct[] = items.slice(start, end);
    const promotionsToMark = itemsToMark.map((item, index) => {
      return handlePromotionsImpressions(item, index + start);
    });
    sendImpression(promotionsToMark);
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
            <ArrowButton
              onClick={() => swiper && swiper.slidePrev()}
              disabled={!isEnd}
            >
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
                      <Link
                        href={getLink(item.link)}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleItemClick(item, index);
                          sendEvent(item.link || '');
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
            <ArrowButton
              onClick={() => swiper && swiper.slideNext()}
              disabled={isEnd}
            >
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
                        onClick={(e) => {
                          e.stopPropagation();
                          handleItemClick(item, index);
                          sendEvent(item.link);
                        }}
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
