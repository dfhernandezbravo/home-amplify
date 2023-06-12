import React from 'react';
import { AddCartButtonProps } from './AddCartButton.types';
import { AddButton } from './AddCartButton.styles';

export const AddCartButton = (props: AddCartButtonProps) => {
  const { addNew } = props;

  return (
    <AddButton name='' onClick={addNew}>
      Añadir al carro
    </AddButton>
  );
};
