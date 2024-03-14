/* eslint-disable */
import { bffWebInstance } from '@/application/data-source/bff-web-instance';
import { Product } from '@cencosud-ds/easy-design-system';
import { AxiosResponse } from 'axios';

const ProductService = {
  getProductsByClusterId: async (
    clusterId: string,
    maxItems: number,
  ): Promise<AxiosResponse<Product[]> | null> => {
    if (typeof clusterId !== 'undefined') {
      const response = await bffWebInstance.get(
        `/search/home/clusters/${clusterId}?count=${maxItems}`,
      );
      if (response) return response?.data;
      throw new Error('Error getting products by cluster');
    }
    return null;
  },

  getProductsByIds: async (
    ids: string,
  ): Promise<AxiosResponse<Product[]> | any> => {
    if (typeof ids !== 'undefined') {
      const response = await bffWebInstance.get(
        `/products/list?productIds=${ids}`,
      );
      if (response) return response?.data;
      else return null;
    }
    return null;
  },

  getProductsBySkuIds: async (
    skus: string,
  ): Promise<AxiosResponse<Product[]> | null> => {
    if (typeof skus !== 'undefined') {
      const response = await bffWebInstance(`/products/list?skuIds=${skus}`);
      if (response) return response?.data;
      throw new Error('Error getting products by sku');
    }
    return null;
  },
};
export default ProductService;
