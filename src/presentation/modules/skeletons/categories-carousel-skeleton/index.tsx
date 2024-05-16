import React from 'react';
import { CarouselNavButton, CategorySkeleton, Container, Icon } from './style';
import useBreakpoints from '@/presentation/hooks/useBreakpoints';
import CarouselDots from './carousel-dots';
import { Skeleton } from '@/presentation/components/atoms/skeleton';

const CategoriesCarouselSkeleton = () => {
  const { isXs, isSm, isMd } = useBreakpoints();

  return (
    <>
      <Container>
        {[...Array(8)].map((category, i) => (
          <CategorySkeleton
            isMobile={isXs || isSm || isMd}
            key={`category-skeleton-${i}`}
            index={i}
          >
            <Skeleton height="48px" width="48px" radius="50%" />
            <Skeleton width="70px" height="25px" />
          </CategorySkeleton>
        ))}
        <CarouselNavButton>
          <Icon>{'<'}</Icon>
        </CarouselNavButton>
        <CarouselNavButton right>
          <Icon>{'>'}</Icon>
        </CarouselNavButton>
      </Container>
      <CarouselDots />
    </>
  );
};

export default CategoriesCarouselSkeleton;
