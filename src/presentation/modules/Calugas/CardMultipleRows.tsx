import useBreakpoints from '@/presentation/hooks/useBreakpoints';
import { Fragment, useEffect, useState } from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
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

import {
  ContentBody,
  ItemContent,
} from '@/domain/entities/content/content.types';
import useLinks from '@/presentation/hooks/useLink';
import Image from 'next/image';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/pagination';

const CardMultipleRows = (props: ContentBody) => {
  const [cardMultiRow, setCardMultiRow] = useState<ItemContent>();
  const [cardsSingleRow, setCardsSingleRow] = useState<ItemContent[]>([]);
  const { isSm, isMd, isLg } = useBreakpoints();
  const { getLink } = useLinks();
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
                <Link href={getLink(cardMultiRow.link)}>
                  <Image
                    src={cardMultiRow.image}
                    alt={cardMultiRow.alt}
                    width={200}
                    height={200}
                  />
                </Link>
              )}
            </MultipleRowContainer>
            <SingleRowContainer>
              <GroupContainer>
                {cardsSingleRow?.length > 0 &&
                  cardsSingleRow?.slice(0, 2)?.map((card, index: number) => (
                    <Link href={getLink(card.link)} key={index}>
                      {/* <Image */}
                      {/*   src={card.image} */}
                      {/*   sizes={widthSingleRow} */}
                      {/*   alt={card.alt} */}
                      {/* /> */}
                    </Link>
                  ))}
              </GroupContainer>
              <GroupContainer>
                {cardsSingleRow?.length > 0 &&
                  cardsSingleRow?.slice(2, 4)?.map((card, index: number) => (
                    <Link href={getLink(card.link)} key={index}>
                      {/* <Image */}
                      {/*   src={card.image} */}
                      {/*   sizes={widthSingleRow} */}
                      {/*   alt={card.alt} */}
                      {/* /> */}
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
              <Link href={getLink(cardMultiRow.link)}>
                {/* <Image */}
                {/*   src={cardMultiRow.mobileImage} */}
                {/*   sizes="95%" */}
                {/*   alt={cardMultiRow.alt} */}
                {/* /> */}
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
                  (item, index: number) =>
                    index > 0 && (
                      <SwiperSlide key={index}>
                        <GroupContainerSlide>
                          <Link href={getLink(item.link)}>
                            {/* <Image */}
                            {/*   src={item.image} */}
                            {/*   sizes={'100%'} */}
                            {/*   alt={item.alt} */}
                            {/* /> */}
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
                <Link href={getLink(cardMultiRow.link)}>
                  <Image
                    src={cardMultiRow.image}
                    sizes={widthMultiRow}
                    alt={cardMultiRow.alt}
                  />
                </Link>
              )}
            </MultipleRowContainerFixed>
            <SingleRowContainer>
              <GroupContainerFixed>
                {cardsSingleRow?.length > 0 &&
                  cardsSingleRow?.map((card, index: number) => (
                    <Link href={getLink(card.link)} key={index}>
                      <Image
                        src={card.image}
                        sizes={widthMultiRow}
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
