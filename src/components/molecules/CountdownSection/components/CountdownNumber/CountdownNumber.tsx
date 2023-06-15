import { Number } from './CountdownNumber.styles';
import { CountNumberProps } from './CountdownNumber.types';

export const CountdownNumber = (props: CountNumberProps) => {
  const { number } = props;

  return <Number>{number}</Number>;
};
