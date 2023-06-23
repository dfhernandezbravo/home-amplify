import { Number } from './CountdownNumber.styles';
import { CountNumberProps } from './CountdownNumber.types';

const CountdownNumber = (props: CountNumberProps) => {
  const { number } = props;

  return <Number>{number}</Number>;
};

export default CountdownNumber;
