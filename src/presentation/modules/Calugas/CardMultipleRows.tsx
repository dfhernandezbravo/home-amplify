/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import { Fragment, useEffect, useState } from 'react';
import { CalugaStruct, ItemStruct } from './Calugas.types';
import {
  Container,
  ContainerSlider,
  ContainerSwiper,
  GroupContainer,
  GroupContainerFixed,
  GroupContainerSlide,
  MultipleRowContainer,
  MultipleRowContainerFixed,
  RootContainer,
  RootContainerFixed,
  SingleRowContainer,
} from './CardMultipleRow.styles';
import useBreakpoints from '@/presentation/hooks/useBreakpoints';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import useLinks from '@/presentation/hooks/useLink';
import Link from 'next/link';
import { send } from 'process';

const CardMultipleRows = (props: CalugaStruct) => {
  const [cardMultiRow, setCardMultiRow] = useState<ItemStruct>();
  const [cardsSingleRow, setCardsSingleRow] = useState<ItemStruct[]>([]);
  const { isSm, isMd, isLg } = useBreakpoints();
  const { getLink, sendEvent } = useLinks();
  const { items } = props;
  const widthMultiRow = '100%';
  const widthSingleRow = '50%';
  const itemsPerRow = 1.1;

  useEffect(() => {
    if (items?.length > 0) {
      setCardMultiRow(items.find((i) => i.rows === 2));
      setCardsSingleRow(items.filter((i) => i.rows !== 2));
    }
  }, [items]);

  return (
    <Fragment>
      {(isLg || isMd) && (
        <Container>
          <RootContainer>
            <MultipleRowContainer>
              {cardMultiRow && (
                <Link
                  href={getLink(cardMultiRow.link)}
                  onClick={() => sendEvent(cardMultiRow.link)}
                >
                  <img
                    src={cardMultiRow.image}
                    width={widthMultiRow}
                    alt={cardMultiRow.alt}
                  />
                </Link>
              )}
            </MultipleRowContainer>
            <SingleRowContainer>
              <GroupContainer>
                {cardsSingleRow?.length > 0 &&
                  cardsSingleRow
                    ?.slice(0, 2)
                    ?.map((card: ItemStruct, index: number) => (
                      <Link
                        href={getLink(card.link)}
                        key={index}
                        onClick={() => sendEvent(card.link)}
                      >
                        <img
                          src={card.image}
                          width={widthSingleRow}
                          alt={card.alt}
                        />
                      </Link>
                    ))}
              </GroupContainer>
              <GroupContainer>
                {cardsSingleRow?.length > 0 &&
                  cardsSingleRow
                    ?.slice(2, 4)
                    ?.map((card: ItemStruct, index: number) => (
                      <Link
                        href={getLink(card.link)}
                        key={index}
                        onClick={() => sendEvent(card.link)}
                      >
                        <img
                          src={card.image}
                          width={widthSingleRow}
                          alt={card.alt}
                        />
                      </Link>
                    ))}
              </GroupContainer>
            </SingleRowContainer>
          </RootContainer>
        </Container>
      )}
      {(isSm || (!isSm && !isMd && !isLg)) && props?.sliderOnMobileView && (
        <ContainerSlider>
          <MultipleRowContainer style={{ textAlign: 'center' }}>
            {cardMultiRow && (
              <Link
                href={getLink(cardMultiRow.link)}
                onClick={() => sendEvent(cardMultiRow.link)}
              >
                <img
                  src={cardMultiRow.mobileImage}
                  width="95%"
                  alt={cardMultiRow.alt}
                />
              </Link>
            )}
          </MultipleRowContainer>
          <ContainerSwiper style={{ width: '95%' }}>
            <Swiper
              slidesPerView={itemsPerRow}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
            >
              {items?.length > 0 &&
                items.map(
                  (item: ItemStruct, index: number) =>
                    index > 0 && (
                      <SwiperSlide key={index}>
                        <GroupContainerSlide>
                          <Link
                            href={getLink(item.link)}
                            onClick={() => sendEvent(item.link)}
                          >
                            <img
                              src={item.image}
                              width={'100%'}
                              alt={item.alt}
                            />
                          </Link>
                        </GroupContainerSlide>
                      </SwiperSlide>
                    ),
                )}
              <div className="swiper-pagination-bullet custom-pagination-categories" />
            </Swiper>
          </ContainerSwiper>
        </ContainerSlider>
      )}
      {(isSm || (!isLg && !isMd && !isSm)) && !props?.sliderOnMobileView && (
        <Container>
          <RootContainerFixed>
            <MultipleRowContainerFixed>
              {cardMultiRow && (
                <Link
                  href={getLink(cardMultiRow.link)}
                  onClick={() => sendEvent(cardMultiRow.link)}
                >
                  <img
                    src={cardMultiRow.image}
                    width={widthMultiRow}
                    alt={cardMultiRow.alt}
                  />
                </Link>
              )}
            </MultipleRowContainerFixed>
            <SingleRowContainer>
              <GroupContainerFixed>
                {cardsSingleRow?.length > 0 &&
                  cardsSingleRow?.map((card: ItemStruct, index: number) => (
                    <Link
                      href={getLink(card.link)}
                      key={index}
                      onClick={() => sendEvent(card.link)}
                    >
                      <img
                        src={card.image}
                        width={widthMultiRow}
                        alt={card.alt}
                      />
                    </Link>
                  ))}
              </GroupContainerFixed>
            </SingleRowContainer>
          </RootContainerFixed>
        </Container>
      )}
    </Fragment>
  );
};
export default CardMultipleRows;
