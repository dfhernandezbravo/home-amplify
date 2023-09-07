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
  productList: CountdownProducts[];
  fieldName: string;
};

export enum FieldNameType {
  SKU_ID = 'skuId',
  CLUSTER_ID = 'clusterId',
  PRODUCT_ID = 'productId',
}
