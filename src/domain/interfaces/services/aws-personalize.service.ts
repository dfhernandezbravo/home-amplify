import { AwsPersonalizeBody } from '@/domain/entities/aws-personalize/aws-personalize.entity';
import { Product } from '@ccom-easy-design-system/molecules.product-card/dist/types';
import { AxiosResponse } from 'axios';

export default interface AwsPersonalizeServiceInterface {
  getSkus(request: AwsPersonalizeBody): Promise<AxiosResponse<string[]>>;
  getProductsBySkus(skus: string[]): Promise<AxiosResponse<Product[]>>;
}
