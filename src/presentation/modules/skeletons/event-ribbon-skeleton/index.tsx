import React from 'react';
import { SkeletonContainer } from './style';
import { Skeleton } from '@/presentation/components/atoms/Skeleton';

const EventRibbonSkeleton = () => {
  return (
    <SkeletonContainer>
      <Skeleton height="300px" width="100%" />
    </SkeletonContainer>
  );
};

export default EventRibbonSkeleton;
