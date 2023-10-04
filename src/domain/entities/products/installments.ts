import { SellerMerchantInstallmentsEntity } from './seller-merchant';

export type InstallmentsEntity = {
  Value: number;
  InterestRate: number;
  TotalValuePlusInterestRate: number;
  NumberOfInstallments: number;
  PaymentSystemName: string;
  PaymentSystemGroupName: string;
  Name: string;
  count: number;
  hasInterestRate: boolean;
  interestRate: number;
  value: number;
  total: number;
  sellerMerchantInstallments?: SellerMerchantInstallmentsEntity[];
};

export type InstallmentOptionsEntity = {
  paymentSystem: string;
  bin?: null;
  paymentName: string;
  paymentGroupName: string;
  value: number;
  installments?: InstallmentsEntity[];
};
