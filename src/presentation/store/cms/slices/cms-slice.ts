import { AwsPersonalizeResponseCMS } from '@/domain/entities/aws-personalize/aws-personalize.entity';
import { createSlice } from '@reduxjs/toolkit';

type InitialStateCms = {
  awsPersonalize: AwsPersonalizeResponseCMS | null;
};

const initialState: InitialStateCms = {
  awsPersonalize: null,
};

const cmsSlice = createSlice({
  name: 'cms',
  initialState,
  reducers: {},
});

export default cmsSlice;
