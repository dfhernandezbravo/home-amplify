import {
  Promotion
} from '@/domain/entities/analytics/analytics';
import {
  ContentBody,
  ItemContent,
} from '@/domain/entities/content/content.types';
import useAnalytics from '@/presentation/hooks/useAnalytics';
import useBreakpoints from '@/presentation/hooks/useBreakpoints';
import useIsInViewport from '@/presentation/hooks/useIsInViewport';
import useLinks from '@/presentation/hooks/useLink';
import Link from 'next/link';
import { Fragment, useEffect, useRef } from 'react';
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

type TextStruct = {
  formatText: string;
  text: string;
};

const InformationCard = (props: ContentBody) => {
  const { items } = props;
  const { getLink, sendEvent } = useLinks();
  const { isSm, isMd, isLg } = useBreakpoints();
  const itemsPerRow = 1.1;
  const itemRef = useRef<HTMLInputElement>(null);
  const { isIntersecting, observer } = useIsInViewport(itemRef);
  const {
    methods: { sendPromotionImpressionEvent, sendPromotionClickEvent },
  } = useAnalytics();

  const joinText = (textItem: TextStruct[]): string => {
    return textItem.map((text) => text.text.replace(/\[n\]/g, '')).join('');
  };

  const handlePromotionsImpressions = () => {
    const promotions: Promotion[] = items.map((item, index) => {
      return {
        id: 'promoView',
        name: joinText(item.textItems),
        creative: item.icon,
        position: `${index + 1}`,
      };
    });

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
      handlePromotionsImpressions();

      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    }
  }, [isIntersecting]);

  const handleCardClick = (item: ItemContent, index: number) => {
    const promotions = [
      {
        id: 'Caluga Informativa',
        name: joinText(item.textItems),
        creative: item.icon,
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

  }
  const exp = '[n]';

  const isEndOfLine = (t: string): boolean => {
    return t?.includes(exp);
  };

  const normalizeText = (t: string): string => {
    if (isEndOfLine(t)) return t.replace(exp, '');
    return t;
  };

  const TextElement = ({
    formatText,
    text,
    color,
  }: {
    formatText: string;
    text: string;
    color: string;
  }): JSX.Element => {
    const eol = isEndOfLine(text);
    const normalizedText = normalizeText(text);

    let Element = NormalText;

    if (formatText === TextTypesStruct.Bolder) {
      Element = BolderElement;
    } else if (formatText === TextTypesStruct.higlight) {
      Element = HighlitedElement;
    }

    return (
      <Fragment>
        <Element
          style={
            formatText === TextTypesStruct.higlight ? { color: color } : {}
          }
        >
          {normalizedText}
        </Element>
        {eol && <br />}
      </Fragment>
    );
  };

  const haveText = (item: CardItems): boolean => {
    return item?.textItems?.length > 0;
  };

  const isMobile = (): boolean => {
    return isMd || isSm || !isLg;
  };

  return (
    <Fragment>
      {isLg && (
        <Container ref={itemRef}>
          {items?.length > 0 &&
            items?.map((item: CardItems, index: number) => (
              <CardItem key={index} color={item.color} isMobile={isMobile()}>
                <Link
                  href={getLink(item.link)}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCardClick(item as ItemContent, index);
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
                    {haveText(item) &&
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
      {isMobile() && (
        <ContainerSwiper>
          <Swiper slidesPerView={itemsPerRow}>
            {items?.length > 0 &&
              items?.map((item: CardItems, index: number) => (
                <SwiperSlide key={index}>
                  <CardItem color={item.color} isMobile={isMobile()}>
                    <Link
                      href={getLink(item.link)}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCardClick(item as ItemContent, index);
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
                        {haveText(item) &&
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
