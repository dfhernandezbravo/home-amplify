import HeaderTitle from '../header-title';
import StoreFilter from '../store-filter';
import { HeaderMobileContainer } from './styles';

const HeaderMobile = () => {
  return (
    <HeaderMobileContainer>
      <HeaderTitle />
      <StoreFilter />
    </HeaderMobileContainer>
  );
};

export default HeaderMobile;
