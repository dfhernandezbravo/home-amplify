import { ContainerProps } from './Container.types';
import { Wrapper } from './Container.styles';

const Container = ({ children, direction }: ContainerProps) => {
  return <Wrapper direction={direction}>{children}</Wrapper>;
};

export default Container;
