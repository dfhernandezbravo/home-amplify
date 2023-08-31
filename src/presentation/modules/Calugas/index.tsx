import { ContentBody } from '@/domain/entities/content/content.types';
import { Fragment } from 'react';
import CardMultipleRows from './CardMultipleRows';
import CardSingleRow from './CardSingleRow';

const Cards = ({ items, ...rest }: ContentBody) => {
  const isMultiple = items.some((i) => i.rows > 1);
  return (
    <Fragment>
      {isMultiple ? (
        <CardMultipleRows {...rest} items={items} />
      ) : (
        <CardSingleRow {...rest} items={items} />
      )}
    </Fragment>
  );
};
export default Cards;
