import {
  StoreInfo,
  StoreInformation,
} from '@/domain/entities/content/content.types';
import StoreDesktop from './layout/desktop';
import StoreProvider from './layout/provider';
import StoreMobile from './layout/mobile';

interface Props {
  storeInfo: StoreInfo[];
  informations: StoreInformation[];
}

const Stores = ({ storeInfo, informations }: Props) => {
  return (
    <StoreProvider storeInfo={storeInfo} informations={informations}>
      <StoreDesktop />
      <StoreMobile />
    </StoreProvider>
  );
};

export default Stores;
