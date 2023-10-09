export type PaymentSystemsEntity = {
  id: number;
  name: string;
  groupName: string;
  validator?: null;
  stringId: string;
  template: string;
  requiresDocument: boolean;
  isCustom: boolean;
  description?: null;
  requiresAuthentication: boolean;
  dueDate: string;
  availablePayments?: null;
};
