import React from 'react';
import LeftContainer from '@/presentation/modules/left-container';
import RightContainer from '@/presentation/modules/right-container';
import { useRouter } from 'next/router';
import { useDevice } from '@cencosud-ds/easy-design-system';
import MainContainer from './content.styles';
import MainLayout from '@/presentation/components/layouts/main-layout/main-layout';

const LegalsLayout = () => {
  const route = useRouter();
  const { content } = route.query;
  const { device } = useDevice();
  return (
    <MainLayout>
      <MainContainer>
        {(device !== 'Phone' || !content) && (
          <LeftContainer path={`${content}`} />
        )}
        <RightContainer path={`${content}`} />
      </MainContainer>
    </MainLayout>
  );
};

export default LegalsLayout;
