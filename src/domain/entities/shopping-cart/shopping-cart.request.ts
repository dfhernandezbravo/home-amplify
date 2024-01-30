export type SaveShoppingCartItemsRequest = {
  orderItems: {
    id: string;
    quantity: number;
  }[];
};

export type SetShoppingCartItemsRequest = {
  orderItems: {
    index: number;
    quantity: number;
  }[];
};
