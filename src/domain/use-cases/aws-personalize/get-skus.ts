import AwsPersonalizeService from '@/application/services/aws-personalize';
import { AwsPersonalizeBody } from '@/domain/entities/aws-personalize/aws-personalize.entity';

const getSkusAws = async (request: AwsPersonalizeBody) => {
  try {
    const { data } = await AwsPersonalizeService.getSkus(request);
    return data;
  } catch (error) {
    return [];
  }
};

export default getSkusAws;
