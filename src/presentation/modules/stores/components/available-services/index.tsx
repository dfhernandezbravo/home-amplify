import Image from 'next/image';
import { ServicesStoreProps } from '@/domain/entities/content/content.types';
import { Container, ServiceContainer } from './styles';

interface Props {
  services: ServicesStoreProps[];
}

const AvailableServices = ({ services }: Props) => {
  return (
    <Container>
      <span className="title">Servicios:</span>
      {services.map((service, index) => {
        const pipe = index === services.length - 1 ? '' : '|';
        return (
          <ServiceContainer key={index}>
            <Image
              src={service.image}
              width={16}
              height={16}
              alt={service.name}
            />
            <span>
              {' '}
              {service.name} {pipe}{' '}
            </span>
          </ServiceContainer>
        );
      })}
    </Container>
  );
};

export default AvailableServices;
