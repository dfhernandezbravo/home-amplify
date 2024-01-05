import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
} from './Title.styles';
import { TitleStruct } from './Title.types';

const renderComponent = {
  h1: Heading1,
  h2: Heading2,
  h3: Heading3,
  h4: Heading4,
  h5: Heading5,
};

const Title = ({ text, titleTag = 'h2' }: TitleStruct) => {
  const Component = renderComponent[titleTag];
  return text ? <Component>{text}</Component> : null;
};

export default Title;
