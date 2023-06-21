import { Section } from './Calugas.styles';
import { CalugaStruct, Items } from './Calugas.types';
import Caluga from './components/Caluga';

const ContainerCaluga = ({ items }: CalugaStruct) => {
  return (
    <Section>
      {items?.map((item: Items, index: number) => (
        <Caluga
          key={`${index}`}
          image={item.image}
          mobileImage={item['image-mobile']}
          description={item.description}
          title={item.title}
          link={item.link}
          width={item.width}
        />
      ))}
    </Section>
  );
};

export default ContainerCaluga;
