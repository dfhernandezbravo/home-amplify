import React from 'react';
import LeftContainer from '@/presentation/modules/left-container';
import RightContainer from '@/presentation/modules/right-container';
import { useRouter } from 'next/router';
import { useDevice } from '@cencosud-ds/easy-design-system';
import LegalsContainer from './legals.styles';
import MainLayout from '@/presentation/components/layouts/main-layout/main-layout';

const LegalsLayout = () => {
  const route = useRouter();
  const { content } = route.query;
  const { device } = useDevice();
  return (
    <MainLayout>
      <LegalsContainer>
        {(device !== 'Phone' || !content) && (
          <LeftContainer path={`${content}`} />
        )}
        <RightContainer path={`${content}`} />
      </LegalsContainer>
    </MainLayout>
  );
};

export default LegalsLayout;
