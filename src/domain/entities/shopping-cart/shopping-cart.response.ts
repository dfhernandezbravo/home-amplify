type ShoppingCart = {
  id: string;
  loggedIn: boolean;
  items: Item[];
  canEdit: boolean;
  currencyCode: string;
  adjustments: unknown[]; // valor desconocido
  shipping: Shipping;
  customer: Customer;
  payments: unknown[];
  paymentMethods: PaymentMethod[];
  taxes: unknown;
  totals: Totals;
  messagesErrors: MessagesErrors[];
};
