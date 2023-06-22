import { ContainerStruct } from './Container.types';
import { Wrapper } from './Container.styles';

const Container = ({ children, direction }: ContainerStruct) => {
  return <Wrapper direction={direction}>{children}</Wrapper>;
};

export default Container;
