import AwsPersonalizeService from '@/application/services/aws-personalize';
import { AwsPersonalizeBody } from '@/domain/entities/aws-personalize/aws-personalize.entity';
import { HttpError } from '@/domain/entities/http/http-error.entity';

const getSkusAws = async (request: AwsPersonalizeBody) => {
  try {
    const { data } = await AwsPersonalizeService.getSkus(request);
    return data;
  } catch (error) {
    const httpError = error as HttpError;
    throw new Error(httpError.message);
  }
};

export default getSkusAws;
