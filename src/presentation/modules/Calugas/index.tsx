import { useEffect, useState } from 'react';
import Container from '@/presentation/components/atoms/Container';
import { Section } from './Calugas.styles';
import { CalugaStruct, ItemStruct } from './Calugas.types';
import Caluga from './components/Caluga';
import { IsMobile } from '@/presentation/hooks/utils';
import Title from '@/presentation/components/atoms/Title';
import {
  ItemImpression,
  Promotion,
} from '@/domain/entities/analytics/analytics';
import useAnalytics from '@/presentation/hooks/useAnalytics';

const ContainerCaluga = ({ title, items }: CalugaStruct) => {
  const {
    methods: { sendPromotionImpressionEvent },
  } = useAnalytics();
  const [promotions, setPromotions] = useState<Promotion[]>([]);

  const handlePromotionsImpressions = (item: ItemImpression, index: number) => {
    const promotion = {
      id: 'Banner Secundario',
      name: `${item.title}`,
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
  }, [promotions]);

  return (
    <Container>
     <Title text={title} /> 
      <Section>
        {items.map((item: ItemStruct, index: number) => (
          <Caluga
            key={`${index}`}
            image={IsMobile() ? item.mobileImage : item.image}
            description={item.description}
            alt={item.alt}
            link={item.link}
            width={item.width}
            index={index}
            handlePromotionsImpressions={handlePromotionsImpressions}
          />
        ))}
      </Section>
    </Container>
  );
};

export default ContainerCaluga;
