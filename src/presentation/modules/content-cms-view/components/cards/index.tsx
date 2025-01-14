import {
  ItemImpression,
  Promotion,
} from '@/domain/entities/analytics/analytics';
import { ContentBody } from '@/domain/entities/content/content.types';
import Container from '@/presentation/components/atoms/Container';
import Title from '@/presentation/components/atoms/Title';
import useAnalytics from '@/presentation/hooks/useAnalytics';
import { useEffect, useState } from 'react';
import CardsDesktop from './layouts/desktop';
import CardsMobile from './layouts/mobile';
import { isDateInRange } from '@/presentation/hooks/useTimeValidator';
import useBreakpoints from '@/presentation/hooks/useBreakpoints';

const Cards = ({
  items,
  title,
  titleTag,
  sliderOnMobileView,
  isActive,
  startDate,
  endDate,
}: ContentBody) => {
  const [hasMultipleRows, setHasMultipleRows] = useState(false);
  const [promotions, setPromotions] = useState<Promotion[]>([]);

  const { isLg } = useBreakpoints();

  const {
    methods: { sendPromotionImpressionEvent },
  } = useAnalytics();

  useEffect(() => {
    setHasMultipleRows(items.some((i) => i.rows > 1));
  }, [items]);

  const handlePromotionsImpressions = (item: ItemImpression, index: number) => {
    const promotion = {
      id: 'Banner Secundario',
      name: `${item.alt}`,
      creative: `${item.image}`,
      position: `Banner Secundario ${index + 1}`,
    };

    setPromotions((prev) => [...prev, promotion]);
  };

  useEffect(() => {
    if (promotions.length) {
      sendPromotionImpressionEvent({
        event: 'promotionsViews',
        ecommerce: {
          promoView: {
            promotions,
          },
        },
      });

      // Remove previous promotions to avoid duplication
      setPromotions([]);
    }
  }, [promotions, sendPromotionImpressionEvent]);

  if (!isActive && !isDateInRange(startDate, endDate)) return null;

  if (isLg)
    return (
      <Container>
        <Title text={title} titleTag={titleTag} />
        <CardsDesktop
          items={items}
          hasMultipleRows={hasMultipleRows}
          handlePromotionsImpressions={handlePromotionsImpressions}
        />
      </Container>
    );

  return (
    <Container>
      <Title text={title} titleTag={titleTag} />
      <CardsMobile
        items={items}
        hasMultipleRows={hasMultipleRows}
        handlePromotionsImpressions={handlePromotionsImpressions}
        hasSwipper={sliderOnMobileView}
      />
    </Container>
  );
};
export default Cards;
