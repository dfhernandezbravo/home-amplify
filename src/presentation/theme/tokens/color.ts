type ColorProperty = {
  main: string;
  variant: string;
};

type ColorNeutralProperty = {
  high: string;
  medium: string;
  low: string;
  main: string;
};

export type Color = {
  primary: ColorProperty;
  info: ColorProperty;
  success: ColorProperty;
  warning: ColorProperty;
  error: ColorProperty;
  neutral: ColorNeutralProperty;
};

export const colors: Color = {
  primary: {
    main: '#AF1212',
    variant: '#FFE6E6',
  },
  info: {
    main: '#1479B8',
    variant: '#BAE0F7',
  },
  success: {
    main: '#146441',
    variant: '#E9F6F0',
  },
  warning: {
    main: '#C54B16',
    variant: '#F7CCBA',
  },
  error: {
    main: '#79110D',
    variant: '#F8BCBA',
  },
  neutral: {
    main: '#8B9CA7',
    high: '#363F45',
    medium: '#485760',
    low: '#626262',
  },
};
