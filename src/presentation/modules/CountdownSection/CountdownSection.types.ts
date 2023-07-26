export type CountdownProducts = {
  image: string;
  skuId: string;
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
};
