import AwsPersonalizeService from '@/application/services/aws-personalize';

const getSkusAws = async (request: AwsPersonalizeBody) => {
  try {
    const { data } = await AwsPersonalizeService.getSkus(request);
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default getSkusAws;
