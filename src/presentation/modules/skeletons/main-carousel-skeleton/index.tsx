import React from 'react';
import CarouselDots from './components/carousel-dots';
import { SkeletonContainer } from './style';
import { Skeleton } from '@/presentation/components/atoms/skeleton';

const MainCarouselSkeleton = () => {
  return (
    <>
      <SkeletonContainer>
        <Skeleton height="800px" />
      </SkeletonContainer>
      <CarouselDots />
    </>
  );
};

export default MainCarouselSkeleton;
