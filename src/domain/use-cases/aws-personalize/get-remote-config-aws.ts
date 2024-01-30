import cmsService from '@/application/services/cms/cms-service';
import { AwsPersonalizeResponseCMS } from '@/domain/entities/aws-personalize/aws-personalize.entity';
import { HttpError } from '@/domain/entities/http/http-error.entity';

const getRemoteConfigAwsPersonalize = async () => {
  try {
    const { data } =
      await cmsService.getRemoteConfig<AwsPersonalizeResponseCMS>(
        'Products',
        'aws-personalize',
      );
    return data.value;
  } catch (error) {
    const httpError = error as HttpError;
    throw new Error(httpError.message);
  }
};

export default getRemoteConfigAwsPersonalize;
