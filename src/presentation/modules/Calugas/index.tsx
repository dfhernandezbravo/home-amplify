import Container from '@/presentation/components/atoms/Container';
import { Section } from './Calugas.styles';
import { CalugaStruct, Items } from './Calugas.types';
import Caluga from './components/Caluga';
import { IsMobile } from '@/presentation/hooks/utils';

const ContainerCaluga = ({ items }: CalugaStruct) => {
  return (
    <Container>
      <Section>
        {items?.map((item: Items, index: number) => (
          <Caluga
            key={`${index}`}
            image= {IsMobile() ? item['image-mobile'] : item['image']}
            description={item.description}
            title={item.title}
            link={item.link}
            width={item.width}
          />
        ))}
      </Section>
    </Container>
  );
};

export default ContainerCaluga;
