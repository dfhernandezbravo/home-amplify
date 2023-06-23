import { SectionTitle } from './Title.styles';
import { TitleStruct } from './Title.types';

const Title = ({ text }: TitleStruct) => {
  return <SectionTitle>{text}</SectionTitle>;
};

export default Title;
