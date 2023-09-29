import cmsService from '@/application/services/cms/cms-service';
import { AwsPersonalizeResponseCMS } from '@/domain/entities/aws-personalize/aws-personalize.entity';
import { createAsyncThunk } from '@reduxjs/toolkit';

const getRemoteConfigAwsPersonalize = createAsyncThunk(
  'get/remote-config/aws-personalize',
  async (_, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { data } =
        await cmsService.getRemoteConfig<AwsPersonalizeResponseCMS>(
          'Products',
          'aws-personalize',
        );
      return fulfillWithValue(data.value);
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export default getRemoteConfigAwsPersonalize;
