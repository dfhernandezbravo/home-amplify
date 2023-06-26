import Container from '@/presentation/components/atoms/Container';
import { Section } from './Calugas.styles';
import { CalugaStruct, ItemStruct } from './Calugas.types';
import Caluga from './components/Caluga';
import { IsMobile } from '@/presentation/hooks/utils';
import Title from '@/presentation/components/atoms/Title';
import { Fragment } from 'react';

const ContainerCaluga = ({ title, items }: CalugaStruct) => {
  return (
    <Fragment>
      <Title text={title} />
      <Container>
        <Section>
          {items.map((item: ItemStruct, index: number) => (
            <Caluga
              key={`${index}`}
              image={IsMobile() ? item['image-mobile'] : item['image']}
              description={item.description}
              title={item.title}
              link={item.link}
              width={item.width}
            />
          ))}
        </Section>
      </Container>
    </Fragment>
  );
};

export default ContainerCaluga;
