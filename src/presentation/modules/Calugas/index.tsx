import { Fragment } from 'react';
import { CalugaStruct } from './Calugas.types';
import CardSingleRow from './CardSingleRow';
import CardMultipleRows from './CardMultipleRows';

const Cards = (props: CalugaStruct) => {
  const isMultiple = props?.items?.some((i) => i.rows > 1);
  return (
    <Fragment>
      {isMultiple ? (
        <CardMultipleRows {...props} />
      ) : (
        <CardSingleRow {...props} />
      )}
    </Fragment>
  );
};
export default Cards;
