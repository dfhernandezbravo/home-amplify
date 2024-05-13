import { Container } from './styles';

interface Props {
  name: string;
  address: string;
}

const Address = ({ name, address }: Props) => {
  return (
    <Container>
      {' '}
      <span className="address-name">{name} / </span>
      {address}
    </Container>
  );
};

export default Address;
