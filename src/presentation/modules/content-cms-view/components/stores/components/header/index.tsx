import Image from 'next/image';
import StoreFilter from '../store-filter';
import { Container, Wrapper } from './styles';
import HeaderTitle from '../header-title';

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <HeaderTitle />
        <div className="image-container-header">
          <Image
            src="/icons/home/stores-list.svg"
            width={200}
            height={200}
            alt="stores-icon"
          />
        </div>
      </Container>
      <StoreFilter />
    </Wrapper>
  );
};

export default Header;
