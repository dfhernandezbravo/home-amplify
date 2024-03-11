import { useEffect } from 'react';
import Header from './components/header';
import {
  useAppDispatch,
  useAppSelector,
} from '@/presentation/hooks/storeHooks';

import getContentEvent from '@/domain/use-cases/content/get-content-event';
import { Container } from './styles';
import { setStore } from '@/presentation/store/stores';
import CardContainer from './components/card-container';

const Stores = () => {
  const { stores } = useAppSelector((state) => state.stores);

  const dispatch = useAppDispatch();
  useEffect(() => {
    (async () => {
      const viewStore = await getContentEvent('store');
      dispatch(setStore(viewStore[0].storeInfo));
    })();
  }, []);

  return (
    <div>
      <Header />
      <Container>
        {stores?.map((store, indx) => (
          <CardContainer key={indx} {...store} />
        ))}
      </Container>
    </div>
  );
};

export default Stores;
