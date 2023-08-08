/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import {
  ItemsWrapper,
  CarouselImageContainer,
  IconTitle,
  CarouselNavButton,
  CustomSlider,
  CustomSlide,
} from './Categories.styles';
import { ButtonBack, ButtonNext, CarouselProvider } from 'pure-react-carousel';
import { GrNext, GrPrevious } from 'react-icons/gr';
import useBreakpoints from '@/presentation/hooks/useBreakpoints';
import Container from '@/presentation/components/atoms/Container';
import { CategoriesStruct, ItemStruct } from '../Categories.types';
import useAnalytics from '@/presentation/hooks/useAnalytics';
import useLinks from '@/presentation/hooks/useLink';

const CategoriesCircle = ({ items }: CategoriesStruct) => {
  const { isLg, isMd, isSm } = useBreakpoints();
  const { getLink, sendEvent } = useLinks();
  const {
    methods: { sendPromotionClickEvent },
  } = useAnalytics();

  const defaultValueVisible = 5;
  const firstValueBreackpoint = 9;
  const secondValueBreackpoint = 6;

  const checkBreackpoints = () => {
    if (isLg || isSm) {
      return firstValueBreackpoint;
    }
    if (isMd) return secondValueBreackpoint;
    return defaultValueVisible;
  };

  const handleCategoryClick = (item: ItemStruct, index: number) => {
    const promotions = [
      {
        id: 'Burbuja',
        name: `${item?.title}`,
        creative: `${item?.image}`,
        position: `Burbuja ${index + 1}`,
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

  return (
    <Container>
      <ItemsWrapper>
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={100}
          totalSlides={items.length}
          visibleSlides={checkBreackpoints()}
          step={checkBreackpoints()}
        >
          <CustomSlider>
            {items.map(
              (item, index) =>
                item.image && (
                  <CustomSlide key={item.title} index={index}>
                    <Link
                      href={getLink(item.link)}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCategoryClick(item, index);
                        sendEvent(item.link);
                      }}
                    >
                      <CarouselImageContainer>
                        <img
                          src={item.image}
                          width={100}
                          height={100}
                          sizes="100vw"
                          alt={item.title || 'Item icon'}
                        />
                      </CarouselImageContainer>
                      <IconTitle>{item.title}</IconTitle>
                    </Link>
                  </CustomSlide>
                ),
            )}
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
        </CarouselProvider>
      </ItemsWrapper>
    </Container>
  );
};

export default CategoriesCircle;
