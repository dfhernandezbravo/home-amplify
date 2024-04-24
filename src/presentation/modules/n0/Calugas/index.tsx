import { Fragment } from 'react';
import { CalugaStruct, ContainerStruct } from './Calugas.types';
import N0Title from '../N0Title';
import { Subtitle, Wrapper } from './Calgugas.styles';
import ImageCard from './componets/ImageCard';
import TextCard from './componets/TextCard';
import ButtonCard from './componets/ButtonCard';
import { isDateInRange } from '@/presentation/hooks/useTimeValidator';

const Calugas = (props: CalugaStruct) => {
  const { title, subtitle, container, isActive, startDate, endDate } = props;

  if (!isActive || !isDateInRange(startDate, endDate)) {
    return null;
  }

  const typeImage = (item: ContainerStruct) => {
    return item.image[0].image?.length > 0;
  };

  const typeText = (item: ContainerStruct) => {
    return item.text[0].content?.length > 0;
  };

  const typeButton = (item: ContainerStruct) => {
    return item.button[0].textColor?.length > 0;
  };

  return (
    <Fragment>
      {title && <N0Title text={title} />}
      {subtitle && <Subtitle>{subtitle}</Subtitle>}

      <Wrapper>
        {container.map((item: ContainerStruct, index: number) => (
          <Fragment key={index}>
            {typeImage(item) ? <ImageCard container={item} /> : null}
            {typeText(item) ? <TextCard container={item} /> : null}
            {typeButton(item) ? <ButtonCard container={item} /> : null}
          </Fragment>
        ))}
      </Wrapper>
    </Fragment>
  );
};

export default Calugas;
