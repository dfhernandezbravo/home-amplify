import getRemoteConfigAwsPersonalize from '@/domain/use-cases/aws-personalize/get-remote-config-aws';
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
  extraReducers: (builder) => {
    builder.addCase(
      getRemoteConfigAwsPersonalize.fulfilled,
      (state, { payload }) => {
        state.awsPersonalize = payload;
      },
    );
  },
});

export default cmsSlice;
