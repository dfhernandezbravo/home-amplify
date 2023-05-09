import React from "react";
import { AddCartButtonProps } from "./addCartButton.types";
import { AddButton } from "./addCartButton.styles";

const AddCartButton = (props: AddCartButtonProps) => {
  const { addNew } = props;

  return (
    <AddButton name="" onClick={addNew}>
      Añadir al carro
    </AddButton>
  );
};
export default AddCartButton;
