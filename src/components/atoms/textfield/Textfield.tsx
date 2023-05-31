import { Input, TextFieldContainer } from './Textfield.styles';
import { TextfieldProps } from './Textfield.types';

export const Textfield = (props: TextfieldProps) => {
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