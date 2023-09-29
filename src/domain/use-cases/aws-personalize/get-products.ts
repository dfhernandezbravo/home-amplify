import AwsPersonalizeService from '@/application/services/aws-personalize';

const getProductsAws = async (skus: string[]) => {
  try {
    const { data } = await AwsPersonalizeService.getProductsBySkus(skus);
    return data;
  } catch (error) {
    return [];
  }
};

export default getProductsAws;
