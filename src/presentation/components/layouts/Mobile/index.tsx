import React, { ReactNode } from 'react';
import { MobileContainer } from './styles';

interface Props {
  children: ReactNode;
}

const Mobile: React.FC<Props> = ({ children }) => {
  return <MobileContainer className="fade-in">{children}</MobileContainer>;
};

export default Mobile;
