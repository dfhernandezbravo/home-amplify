import { ContentBody } from '@/domain/entities/content/content.types';
import useBreakpoints from '@/presentation/hooks/useBreakpoints';
import useLinks from '@/presentation/hooks/useLink';
import Link from 'next/link';
import { Fragment } from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  BolderElement,
  CardItem,
  Container,
  ContainerSwiper,
  HighlitedElement,
  IconElement,
  NormalText,
} from './InformationCard.styles';
import { CardItems, TextItems, TextTypesStruct } from './InformationCard.types';

const InformationCard = (props: ContentBody) => {
  const { items } = props;
  const { getLink, sendEvent } = useLinks();
  const { isSm, isMd, isLg } = useBreakpoints();
  const itemsPerRow = 1.1;

  const TextElement = ({
    formatText,
    text,
    color,
  }: {
    formatText: string;
    text: string;
    color: string;
  }): JSX.Element => {
    const exp = '[n]';
    const eol = text?.includes(exp);

    const normalizeText = (t: string): string => {
      if (eol) return t.replace(exp, '');
      return t;
    };
    switch (formatText) {
      case TextTypesStruct.Bolder:
        return (
          <Fragment>
            <BolderElement>{normalizeText(text)}</BolderElement>
            {eol && <br />}
          </Fragment>
        );
      case TextTypesStruct.higlight:
        return (
          <Fragment>
            <HighlitedElement style={{ color: color }}>
              {normalizeText(text)}
            </HighlitedElement>
            {eol && <br />}
          </Fragment>
        );
      default:
        return (
          <Fragment>
            <NormalText>{normalizeText(text)}</NormalText>
            {eol && <br />}
          </Fragment>
        );
    }
  };

  return (
    <Fragment>
      {isLg && (
        <Container>
          {items?.length > 0 &&
            items?.map((item: CardItems, index: number) => (
              <CardItem key={index} color={item.color} isMobile={isMd || isSm}>
                <Link
                  href={getLink(item.link)}
                  onClick={(e) => {
                    e.stopPropagation();
                    sendEvent(item.link);
                  }}
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <IconElement src={item.icon} />
                  <div>
                    {item?.textItems?.length > 0 &&
                      item?.textItems?.map(
                        (elementItem: TextItems, _index: number) => (
                          <div key={_index}>
                            {TextElement({
                              formatText: elementItem.formatText,
                              text: elementItem.text,
                              color: item.color,
                            })}
                          </div>
                        ),
                      )}
                  </div>
                </Link>
              </CardItem>
            ))}
        </Container>
      )}
      {(isSm || isMd || !isLg) && (
        <ContainerSwiper>
          <Swiper slidesPerView={itemsPerRow}>
            {items?.length > 0 &&
              items?.map((item: CardItems, index: number) => (
                <SwiperSlide key={index}>
                  <CardItem color={item.color} isMobile={isMd || isSm || !isLg}>
                    <Link
                      href={getLink(item.link)}
                      onClick={(e) => {
                        e.stopPropagation();
                        sendEvent(item.link);
                      }}
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <IconElement src={item.icon} />
                      <div>
                        {item?.textItems?.length > 0 &&
                          item?.textItems?.map(
                            (elementItem: TextItems, _index: number) => (
                              <div key={_index}>
                                {TextElement({
                                  formatText: elementItem.formatText,
                                  text: elementItem.text,
                                  color: item.color,
                                })}
                              </div>
                            ),
                          )}
                      </div>
                    </Link>
                  </CardItem>
                </SwiperSlide>
              ))}
          </Swiper>
        </ContainerSwiper>
      )}
    </Fragment>
  );
};
export default InformationCard;
