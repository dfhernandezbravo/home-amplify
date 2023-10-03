import { Product } from '@/presentation/store/products/product.type';
import axios, { AxiosResponse } from 'axios';

const ProductService = {
  getProductsByClusterId: async (
    clusterId: string,
    maxItems: number,
  ): Promise<AxiosResponse<Product[]>> => {
    return axios.get(
      `/api/catalog/products/byClusterId/${encodeURIComponent(
        `${clusterId}&_from=0&_to=${maxItems - 1}`,
      )}`,
    );
  },

  getProductsByIds: async (ids: string): Promise<AxiosResponse<Product[]>> => {
    return axios.get(`/api/catalog/products/byIds/${encodeURIComponent(ids)}`);
  },

  getProductsBySkuIds: async (
    skus: string,
  ): Promise<AxiosResponse<Product[]>> => {
    return axios.get(
      `/api/catalog/products/bySkus/${encodeURIComponent(skus)}`,
    );
  },
};
export default ProductService;
