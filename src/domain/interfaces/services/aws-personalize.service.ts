import { AwsPersonalizeBody } from '@/domain/entities/aws-personalize/aws-personalize.entity';
import { Product } from '@cencosud-ds/easy-design-system';
import { AxiosResponse } from 'axios';

export default interface AwsPersonalizeServiceInterface {
  getSkus(request: AwsPersonalizeBody): Promise<AxiosResponse<string[]>>;
  getProductsBySkus(skus: string[]): Promise<AxiosResponse<Product[]>>;
}
