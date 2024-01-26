import { bffWebInstance } from '@/application/data-source/bff-web-instance';
import { Product } from '@cencosud-ds/easy-design-system';
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
    //console.log('>>> ids <<:', ids);
    return bffWebInstance.get(`/products/list?productIds=${ids}`);
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
