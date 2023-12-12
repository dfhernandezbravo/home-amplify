import MainLayout from '@/presentation/components/layouts/main-layout/main-layout';
import Home from '@/presentation/modules/home';
import axios from 'axios';

const HomeLayout = () => {
  return (
    <MainLayout>
      <Home />
    </MainLayout>
  );
};
export default HomeLayout;

export async function getServerSideProps() {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_BFF_WEB_URL}cms/views/home-headless`,
    {
      headers: {
        'x-api-key': `${process.env.NEXT_PUBLIC_API_KEY_BFF_WEB}`,
      },
    },
  );
  if (!response) {
    return {
      notFound: true,
    };
  }
  return { props: response?.data };
}
