import {
  Customer,
  Item,
  MessagesErrors,
  PaymentMethod,
  Shipping,
  Totals,
} from './shopping-cart.entity';

export type ShoppingCart = {
  id: string;
  loggedIn: boolean;
  items: Item[];
  canEdit: boolean;
  currencyCode: string;
  adjustments: unknown[];
  shipping: Shipping;
  customer: Customer;
  payments: unknown[];
  paymentMethods: PaymentMethod[];
  taxes: unknown;
  totals: Totals;
  messagesErrors: MessagesErrors[];
};
