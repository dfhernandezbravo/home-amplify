type SaveShoppingCartItemsRequest = {
  orderItems: {
    id: string;
    quantity: number;
  }[];
};

type SetShoppingCartItemsRequest = {
  orderItems: {
    index: number;
    quantity: number;
  }[];
};
