import { awsPersonalizeInstance } from '@/application/data-source/aws-personalize-instance';
import AwsPersonalizeServiceInterface from '@/domain/interfaces/services/aws-personalize.service';

const AwsPersonalizeService: AwsPersonalizeServiceInterface = {
  getSkus: (request) =>
    awsPersonalizeInstance.post('/recommendations', request),
  getProductsBySkus: (skus) => awsPersonalizeInstance.post('/bySkus', skus),
};

export default AwsPersonalizeService;
