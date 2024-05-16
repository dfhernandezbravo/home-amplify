import React, { ReactNode } from 'react';
import { DesktopContainer } from './styles';

interface Props {
  children: ReactNode;
}

const Desktop: React.FC<Props> = ({ children }) => {
  return <DesktopContainer className="fade-in">{children}</DesktopContainer>;
};

export default Desktop;
