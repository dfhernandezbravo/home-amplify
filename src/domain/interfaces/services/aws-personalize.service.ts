import { AwsPersonalizeBody } from '@/domain/entities/aws-personalize/aws-personalize.entity';
import { Product } from '@/domain/entities/products/product.type';
import { AxiosResponse } from 'axios';

export default interface AwsPersonalizeServiceInterface {
  getSkus(request: AwsPersonalizeBody): Promise<AxiosResponse<string[]>>;
  getProductsBySkus(skus: string[]): Promise<AxiosResponse<Product[]>>;
}
