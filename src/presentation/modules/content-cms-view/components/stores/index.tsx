import Header from './components/header';

import getContentEvent from '@/domain/use-cases/content/get-content-event';
import { Container } from './styles';
// import { setStore } from '@/presentation/store/stores';
import CardContainer from './components/card-container';
import { ContentBody } from '@/domain/entities/content/content.types';
import { GetServerSideProps } from 'next';

interface PageProps {
  content: ContentBody[] | null;
}

export const getServerSideProps = (async () => {
  try {
    const content = await getContentEvent('store');
    return { props: { content } };
  } catch (error) {
    return { props: { content: null } };
  }
}) satisfies GetServerSideProps<PageProps>;

const Stores = ({ storeInfo }: ContentBody) => {
  return (
    <div>
      <Header />
      <Container>
        {storeInfo?.map((store, indx) => (
          <CardContainer key={indx} {...store} />
        ))}
      </Container>
    </div>
  );
};

export default Stores;
