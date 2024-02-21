import React from 'react';
import { Layout } from '@cencosud-ds/easy-design-system';
import { Box } from './index.styles';
import CustomSkeleton from '../CustomSkeleton';

const AccountSidebarSkeleton = () => {
  return (
    <>
      <Layout is={['Desktop', 'Tablet']}>
        <Box>
          <CustomSkeleton $width={233.594} $height={469} $margin="0 17px 0 0" />
        </Box>
      </Layout>
    </>
  );
};

export default AccountSidebarSkeleton;
