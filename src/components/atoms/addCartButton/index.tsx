import React from 'react';
import { AddCartButtonProps } from './addCartButton.types';
import { AddButton } from './addCartButton.styles';

const AddCartButton = (props: AddCartButtonProps) => {

  const {
    addNew,
  } = props;

  return (
    <React.Fragment>
      <AddButton onClick={addNew}>
        <div className='text'>Añadir al carro</div>
      </AddButton>
    </React.Fragment>
  )
};
export default AddCartButton;