import { InstallmentOptionsEntity } from './installments';
import { PaymentSystemsEntity } from './payment-system';

export type PaymentOptions = {
  installmentOptions?: InstallmentOptionsEntity[];
  paymentSystems?: PaymentSystemsEntity[];
  payments?: null[];
  giftCards?: null[];
  giftCardMessages?: null[];
  availableAccounts?: null[];
  availableTokens?: null[];
};
