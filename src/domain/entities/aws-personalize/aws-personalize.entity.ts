type Campaigns = 'user-pers-easy-cl';

type AwsPersonalizeBody = {
  campainArn?: string;
  filterArn?: string;
  account?: string;
  numberResult?: string;
  enabled?: string;
  userId?: string;
};

type AwsPersonalizeResponseCMS = {
  [key in Campaigns]: AwsPersonalizeBody;
};
