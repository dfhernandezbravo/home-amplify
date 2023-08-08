/* eslint-disable @next/next/no-img-element */
import {
  ItemsWrapper,
  CarouselNavButton,
  DotContainer,
  Dots,
  CustomSlider,
} from './Categories.styles';
import { CategoriesStruct } from '../Categories.types';
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Dot,
  Slide,
} from 'pure-react-carousel';
import { GrNext, GrPrevious } from 'react-icons/gr';
import useBreakpoints from '@/presentation/hooks/useBreakpoints';
import Container from '@/presentation/components/atoms/Container';
import IconsContainer from './IconsContainer';
import { useEffect, useState } from 'react';
import {
  ItemImpression,
  Promotion,
} from '@/domain/entities/analytics/analytics';
import useAnalytics from '@/presentation/hooks/useAnalytics';

const CategoriesSquare = ({ items }: CategoriesStruct) => {
  const {
    methods: { sendPromotionImpressionEvent },
  } = useAnalytics();
  const { isLg, isMd, isSm } = useBreakpoints();
  const [promotions, setPromotions] = useState<Promotion[]>([]);

  const emptyArray = Array(items.length / 2).fill(null);
  const defaultValueVisible = 2;
  const firstValueBreackpoint = 4;

  const checkBreackpoints = () => {
    if (isLg || isSm || isMd) {
      return firstValueBreackpoint;
    }
    return defaultValueVisible;
  };

  const handlePromotionsImpressions = (item: ItemImpression, index: number) => {
    const promotion = {
      id: 'Burbuja',
      name: `${item.title}`,
      creative: `${item.image}`,
      position: `Burbuja ${index + 1}`,
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
      <ItemsWrapper>
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={100}
          totalSlides={emptyArray.length}
          visibleSlides={checkBreackpoints()}
          step={checkBreackpoints()}
          dragStep={checkBreackpoints()}
        >
          <CustomSlider>
            {emptyArray.map((_, index) => (
              <Slide key={index} index={index}>
                <IconsContainer
                  items={items}
                  indexArray={index}
                  handlePromotionsImpressions={handlePromotionsImpressions}
                />
              </Slide>
            ))}
          </CustomSlider>

          <ButtonBack style={{ background: 'transparent', border: 'none' }}>
            <CarouselNavButton>
              <GrPrevious size={'25px'} />
            </CarouselNavButton>
          </ButtonBack>
          <ButtonNext style={{ background: 'transparent', border: 'none' }}>
            <CarouselNavButton right>
              <GrNext size={'25px'} />
            </CarouselNavButton>
          </ButtonNext>

          <DotContainer>
            {items.map((item, index) =>
              index === 0 || index === emptyArray.length - 1 ? (
                <Dot slide={index} key={index}>
                  <div>
                    <Dots />
                  </div>
                </Dot>
              ) : null,
            )}
          </DotContainer>
        </CarouselProvider>
      </ItemsWrapper>
    </Container>
  );
};

export default CategoriesSquare;
