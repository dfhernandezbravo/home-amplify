export type CountdownProducts = {
  image: string;
  item: string;
};

export type CountdownStruct = {
  backgroundImage: string;
  backgroundColor: string;
  component: string;
  endDate: string;
  headerColor: string;
  startDate: string;
  subtitle: string;
  title: string;
  type: string;
  productList: CountdownProducts[]
  fieldName: string;
};

export enum FieldNameType {
  SKU = "sku",
  PRODUCT_ID = "productId"
}
