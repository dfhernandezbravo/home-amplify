import useBreakpoints from '@/presentation/hooks/useBreakpoints';
import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Mobile: React.FC<Props> = ({ children }) => {
  const { isSm, isXs } = useBreakpoints();

  return isSm || isXs ? <>{children}</> : null;
};

export default Mobile;
