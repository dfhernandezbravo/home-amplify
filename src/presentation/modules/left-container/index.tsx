import React from 'react';
import { Container } from './LeftContainer.styles';
import Sidebar from '../Sidebar';

const LeftContainer = ({ path }: { path: string }) => {
  return (
    <Container>
      <Sidebar currentPath={path} />
    </Container>
  );
};

export default LeftContainer;
