export type Campaigns = 'user-pers-easy-cl';

export type AwsPersonalizeBody = {
  campainArn?: string;
  filterArn?: string;
  account?: string;
  numberResult?: string;
  enabled?: string;
  userId?: string;
};

export type AwsPersonalizeResponseCMS = {
  [key in Campaigns]: AwsPersonalizeBody;
};
