import { ProductImage } from './product-image';
import { ReferenceIdEntity } from './reference-id';
import { SellersEntity } from './sellers';

export type ProductItems = {
  itemId: string;
  name: string;
  nameComplete: string;
  complementName: string;
  ean: string;
  referenceId?: ReferenceIdEntity[];
  measurementUnit: string;
  unitMultiplier: number;
  modalType: string;
  isKit: boolean;
  images: ProductImage[];
  sellers: SellersEntity[];
  Videos?: unknown[];
  estimatedDateArrival?: null;
};
