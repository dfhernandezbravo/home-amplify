import React from 'react';
import { CalugasContainer, SkeletonContainer } from './style';
import { Skeleton } from '@/presentation/components/atoms/skeleton';

const CalugasSkeleton = () => {
  return (
    <CalugasContainer>
      {[...Array(6)].map((caluga, i) => (
        <SkeletonContainer index={i} key={`calugas-skeleton-${i}`}>
          <Skeleton
            animationtype="wave"
            height="500px"
            key={`caluga-skeleton-${i}`}
          />
        </SkeletonContainer>
      ))}
    </CalugasContainer>
  );
};

export default CalugasSkeleton;
