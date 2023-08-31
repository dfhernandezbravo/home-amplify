import { Product } from '@/presentation/store/products/product.type';
import { AxiosResponse } from 'axios';

export default interface AwsPersonalizeServiceInterface {
  getSkus(request: AwsPersonalizeBody): Promise<AxiosResponse<string[]>>;
  getProductsBySkus(skus: string[]): Promise<AxiosResponse<Product[]>>;
}
