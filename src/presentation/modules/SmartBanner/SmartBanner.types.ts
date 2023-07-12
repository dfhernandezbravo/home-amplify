export type SmartBannerStruct = {
  hideTime: number;
  android: {
    avalible: boolean;
    link: string;
  };
  ios: {
    link: string;
    avalible: boolean;
  };
};
