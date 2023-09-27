import {
  Customer,
  Item,
  MessagesErrors,
  PaymentMethod,
  Shipping,
  Totals,
} from './shopping-cart.entity';

interface UndefinedEntity {
  [x: string]: string;
}

export type ShoppingCart = {
  id: string;
  loggedIn: boolean;
  items: Item[];
  canEdit: boolean;
  currencyCode: string;
  adjustments: UndefinedEntity[];
  shipping: Shipping;
  customer: Customer;
  payments: UndefinedEntity[];
  paymentMethods: PaymentMethod[];
  taxes: UndefinedEntity;
  totals: Totals;
  messagesErrors: MessagesErrors[];
};
