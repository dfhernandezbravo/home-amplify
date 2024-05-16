import React from 'react';
import { Box } from './index.styles';
import CustomSkeleton from '../CustomSkeleton';
import { Layout } from '../layout';

const LegalsSidebarSkeleton = () => {
  return (
    <>
      <Layout is={['Desktop', 'Tablet']}>
        <Box>
          <CustomSkeleton $width={264.35} $height={70} $margin="0 0 2px 0" />
          <CustomSkeleton $width={264.35} $height={70} $margin="0 0 2px 0" />
          <CustomSkeleton $width={264.35} $height={70} $margin="0 0 2px 0" />
          <CustomSkeleton $width={264.35} $height={70} $margin="0 0 2px 0" />
        </Box>
      </Layout>
    </>
  );
};

export default LegalsSidebarSkeleton;
