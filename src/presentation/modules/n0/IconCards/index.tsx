import React, { Fragment } from 'react';
import { IconCardStruct } from './IconCard.types';
import { isDateInRange } from '@/presentation/hooks/useTimeValidator';
import N0Title from '../N0Title';
import { Subtitle, Wrapper } from './IconCard.styles';
import CardButton from './components/CardButton';
import CardText from './components/CardText';
import { ContainerStruct } from '../Calugas/Calugas.types';

const IconCard = (props: IconCardStruct) => {
  const {
    title,
    subtitle,
    container,
    itemsPerRow,
    isActive,
    startDate,
    endDate,
  } = props;

  if (!isActive || !isDateInRange(startDate, endDate)) {
    return null;
  }

  const typeButton = (item: ContainerStruct) => {
    return item.variant === '1';
  };

  const typeText = (item: ContainerStruct) => {
    return item.variant === '2';
  };
  return (
    <>
      {title && <N0Title text={title} />}
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
      <Wrapper $itemsPerRow={itemsPerRow}>
        {container.map((card: ContainerStruct, i: number) => (
          <Fragment key={`${card.title}-${i}`}>
            {typeButton(card) ? <CardButton {...card} /> : null}
            {typeText(card) ? <CardText {...card} /> : null}
          </Fragment>
        ))}
      </Wrapper>
    </>
  );
};

export default IconCard;
