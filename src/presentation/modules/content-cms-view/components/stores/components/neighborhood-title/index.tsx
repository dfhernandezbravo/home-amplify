import React from 'react';
import { Container } from './styles';

interface Props {
  title: string;
}

const NeighborhoodTitle = ({ title }: Props) => {
  return <Container>{title}</Container>;
};

export default NeighborhoodTitle;
