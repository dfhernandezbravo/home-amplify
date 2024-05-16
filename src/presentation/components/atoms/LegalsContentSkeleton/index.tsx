import React from 'react';
import { Box } from './index.styles';
import CustomSkeleton from '../CustomSkeleton';
import { Layout } from '../layout';

const LegalsContentSkeleton = () => {
  return (
    <>
      <Layout is={['Desktop', 'Tablet']}>
        <Box>
          <CustomSkeleton $height={300} $margin="0 0 2px 0" />
        </Box>
      </Layout>
    </>
  );
};

export default LegalsContentSkeleton;
