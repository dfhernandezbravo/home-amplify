import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { ContentCMS } from '@/domain/entities/content/content.types';
import MainLayout from '@/presentation/components/layouts/main-layout/main-layout';
import Home from '@/presentation/modules/home';
import axios from 'axios';

export const getServerSideProps = (async () => {
  const response = await axios.get(
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

const HomeLayout = ({
  repo,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <MainLayout>
        <title>Easy.cl - Homepage</title>
        <Home {...repo} />
      </MainLayout>
    </>
  );
};
export default HomeLayout;
