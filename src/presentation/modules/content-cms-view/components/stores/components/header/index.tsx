import Image from 'next/image';
import StoreFilter from './components/store-filter';
import { Container, Description, Title, Wrapper, WrapperTitle } from './styles';

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <WrapperTitle>
          <Title>Encuentra una Tienda Easy</Title>
          <Description>
            Ingreasa tu zona para encontrar una tienda cercana.
          </Description>
        </WrapperTitle>
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
