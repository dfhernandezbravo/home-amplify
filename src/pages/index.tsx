/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-use-before-define */
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { ContentCMS } from '@/domain/entities/content/content.types';
import MainLayout from '@/presentation/components/layouts/main-layout/main-layout';
import Home from '@/presentation/modules/home';
import axios from 'axios';

const HomeLayout = ({
  repo,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <MainLayout>
      <Home {...repo} />
    </MainLayout>
  );
};
export default HomeLayout;

export const getServerSideProps = (async () => {
  const response = await await axios.get(
    `${process.env.NEXT_PUBLIC_BFF_WEB_URL}cms/views/home-headless`,
    {
      headers: {
        'x-api-key': `${process.env.NEXT_PUBLIC_API_KEY_BFF_WEB}`,
      },
    },
  );
  const repo = await response?.data;
  return { props: { repo } };
}) satisfies GetServerSideProps<{
  repo: ContentCMS;
}>;
