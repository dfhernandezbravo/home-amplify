import { Input, TextFieldContainer } from './textfield.styles';
import { TextfieldProps } from './textfield.types';

const Textfield = (props: TextfieldProps) => {
  const {
    type,
    placeholder,
    value,
    onChange,
    name
  } = props;

  return (
    <TextFieldContainer>
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
      />
    </TextFieldContainer>
  )
};
export default Textfield;