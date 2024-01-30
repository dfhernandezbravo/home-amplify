interface UndefinedEntity {
  [x: string]: string;
}

type SellerProductItem = {
  id: string;
};

type PriceProductItem = {
  currency: string;
  normalPrice: number;
  offerPrice: number | null;
  brandPrice: number | null;
};

type ProductItem = {
  id: string;
  sku: string;
  ean: string;
  description: string;
  availability: string;
  unit: string;
  unitValue: number;
  category: string;
  size: string;
  color: string;
  images: string;
  brand: string;
  options: UndefinedEntity[];
  sellers: SellerProductItem;
  prices: PriceProductItem;
};

export type Item = {
  itemId: string;
  quantity: number;
  product: ProductItem;
  adjustment: UndefinedEntity[];
  priceAfterDiscount: number;
};

export type Shipping = {
  grouping: UndefinedEntity[];
  selectedAddresses: UndefinedEntity[];
  whoWithdraw: UndefinedEntity | null;
  isAddressIncomplete: boolean;
  isShippingInfoComplete: boolean;
};

export type Customer = {
  documentType: string | null;
  document: string | null;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  phone: string | null;
  isCorporate: boolean;
  userId: string;
  isEmployee: boolean;
  companyName: string | null;
  companyPhone: string | null;
  companyRut: string | null;
  socialReason: string | null;
};

export type PaymentMethod = {
  paymentSystem: number;
  name: string;
  groupName: string;
  value: number;
  installments: {
    count: number;
    value: number;
    total: number;
  }[];
};

export type Totals = {
  subtotal: number;
  discount: number | null;
  shippingPrice: number | null;
  totalPrice: number;
  totalCardPrice: number;
};

export type MessagesErrors = {
  code: string;
  text: string;
  status: string;
  fields: {
    ean: string;
    itemIndex: string;
    skuName: string;
  };
};
