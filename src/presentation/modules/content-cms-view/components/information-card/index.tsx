import { Promotion } from '@/domain/entities/analytics/analytics';
import {
  ContentBody,
  ItemContent,
  TextItems,
} from '@/domain/entities/content/content.types';
import Container from '@/presentation/components/atoms/Container';
import Desktop from '@/presentation/components/layouts/Desktop';
import Mobile from '@/presentation/components/layouts/Mobile';
import SwiperEasy from '@/presentation/components/molecules/swiper';
import useAnalytics from '@/presentation/hooks/useAnalytics';
import useIsInViewport from '@/presentation/hooks/useIsInViewport';
import { useEffect, useRef } from 'react';
import { CardItem, Description, IconElement, Title } from './styles';

const InformationCard = ({ items }: ContentBody) => {
  const itemRef = useRef<HTMLInputElement>(null);
  const { isIntersecting, observer } = useIsInViewport(itemRef);
  const {
    methods: { sendPromotionImpressionEvent, sendPromotionClickEvent },
  } = useAnalytics();

  const joinText = (textItem: TextItems[]): string => {
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
  };

  function getTextComponent(itemText: TextItems, color: string) {
    switch (itemText.formatText) {
      case 'title':
        return <Title>{itemText.text}</Title>;

      case 'highlightedText':
        return (
          <Description color={color}>
            {itemText.text.replace('[n]', '\n')}
          </Description>
        );

      default:
        return <Description>{itemText.text.replace('[n]', '\n')}</Description>;
    }
  }

  const renderItem = (item: ItemContent, index: number) => (
    <CardItem
      href={item.link}
      color={item.color}
      onClick={(e) => {
        e.stopPropagation();
        handleCardClick(item, index);
      }}
      key={index}
    >
      <IconElement src={item.icon} width={0} height={0} alt={item.icon} />
      <div>
        {item.textItems.map((textItem, index) => (
          <div key={index}>{getTextComponent(textItem, item.color)}</div>
        ))}
      </div>
    </CardItem>
  );

  return (
    <div>
      <Desktop>
        <Container direction="row">{items.map(renderItem)}</Container>
      </Desktop>

      <Mobile>
        <div style={{ padding: '1rem' }}>
          <SwiperEasy
            items={items}
            renderItem={renderItem}
            slidesPerView={1.1}
            slidesPerGroup={1}
          />
        </div>
      </Mobile>
    </div>
  );
};
export default InformationCard;