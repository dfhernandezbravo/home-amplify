import { Fragment } from 'react';
import { SectionTitle } from './Title.styles';
import { TitleStruct } from './Title.types';

const Title = ({ text }: TitleStruct) => {
  return (
    <Fragment>
      {text && text !== '' && <SectionTitle>{text}</SectionTitle>}
    </Fragment>
  );
};

export default Title;
