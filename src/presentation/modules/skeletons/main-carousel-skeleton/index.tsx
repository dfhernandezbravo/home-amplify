import React from 'react';
import CarouselDots from './components/carousel-dots';
import { SkeletonContainer } from './style';
import { Skeleton } from '@cencosud-ds/easy-design-system';

const MainCarouselSkeleton = () => {
  return (
    <>
      <SkeletonContainer>
        <Skeleton animation="wave" height="800px" />
      </SkeletonContainer>
      <CarouselDots />
    </>
  );
};

export default MainCarouselSkeleton;
