import React from 'react';
import { AddCartButtonProps } from './addCartButton.types';
import { AddCartButtonContainer, AddButton } from './addCartButton.styles';

const AddCartButton = (props: AddCartButtonProps) => {

  const {
    enable,
    remove,
    addExisting,
    addNew,
    quantity
  } = props;

  return (
    <React.Fragment>
      { enable ? (
      <AddCartButtonContainer>
        <div className='remove' onClick={remove}>-</div>
        <div className='quantity'>{quantity}</div>
        <div className='add' onClick={addExisting}>+</div>
      </AddCartButtonContainer>
      ) : (
        <AddButton onClick={addNew}>
          Agregar al carrito
        </AddButton>
      )}
    </React.Fragment>
  )
};
export default AddCartButton;