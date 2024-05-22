import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { ContentCMS } from '@/domain/entities/content/content.types';
import MainLayout from '@/presentation/components/layouts/main-layout/main-layout';
import Home from '@/presentation/modules/home';
import axios from 'axios';

export const getStaticProps = (async () => {
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
}) satisfies GetStaticProps<{
  repo: ContentCMS;
}>;

const HomeLayout = ({
  repo,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
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
