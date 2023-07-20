import { SectionTitle } from './N0Title.styles';
import { TitleStruct } from './NoTitle.types';

const N0Title = ({ text }: TitleStruct) => {
  return <SectionTitle>{text}</SectionTitle>;
};

export default N0Title;
