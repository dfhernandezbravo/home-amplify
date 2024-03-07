import Image from 'next/image';
import { Container, Title, WrapperTitle } from './styles';
import { Description } from '@/presentation/modules/CountdownSection/CountdownSection.styles';

const Header = () => {
  return (
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
  );
};

export default Header;
