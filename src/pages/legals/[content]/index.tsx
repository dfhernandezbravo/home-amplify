import React from 'react';
import LeftContainer from '@/presentation/modules/left-container';
import RightContainer from '@/presentation/modules/right-container';
import { useRouter } from 'next/router';
import { useDevice } from '@cencosud-ds/easy-design-system';
import LegalsContainer from './legals.styles';
import MainLayout from '@/presentation/components/layouts/main-layout/main-layout';
import { GetServerSidePropsContext } from 'next';
import { ContentCMS } from '@/domain/entities/content/content.types';

type Props = {
  repo: ContentCMS;
};

const LegalsLayout = (props: Props) => {
  console.log('propsLegalsLayout', { ...props });
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

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  if (ctx.query.content === 'terms-and-conditions') {
    const termsAndConditions = await import(
      '../../../presentation/modules/terms-and-conditions'
    );
    if (termsAndConditions.getServerSideProps) {
      return termsAndConditions.getServerSideProps(ctx);
    }
  }
  //const pdp = await import('@modules/pdp');

  return {
    props: {},
  };
};
