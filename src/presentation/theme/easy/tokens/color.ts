type ColorProperty = {
  main: string;
  variant: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  1000: string;
};

type ColorNeutralProperty = {
  high: string;
  medium: string;
  low: string;
  main: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  1000: string;
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
    variant: '#670000',
    100: '#FFE6E6',
    200: '#FC9999',
    300: '#F14D4D',
    400: '#E00109',
    500: '#CC1515',
    600: '#AF1212',
    700: '#990707',
    800: '#670000',
    900: '#4E0808',
    1000: '#EFE7F1',
  },
  info: {
    main: '#1479B8',
    variant: '#BAE0F7',
    100: '#E8F5FC',
    200: '#BAE0F7',
    300: '#75C1F0',
    400: '#47ACEB',
    500: '#1998E5',
    600: '#1479B8',
    700: '#0F5B8A',
    800: '#0A3D5C',
    900: '#072A40',
    1000: '#DEECF7',
  },
  success: {
    main: '#0F8551',
    variant: '#BAF7DC',
    100: '#E8FCF3',
    200: '#BAF7DC',
    300: '#75F0BA',
    400: '#30E897',
    500: '#14B870',
    600: '#0F8551',
    700: '#0B603B',
    800: '#073C24',
    900: '#042516',
    1000: '#E4ECE0',
  },
  warning: {
    main: '#C54B16',
    variant: '#F7CCBA',
    100: '#FCEEE8',
    200: '#F7CCBA',
    300: '#F09A75',
    400: '#EB7847',
    500: '#E55719',
    600: '#C54B16',
    700: '#973911',
    800: '#6A280C',
    900: '#401807',
    1000: '#EDE7E6',
  },
  error: {
    main: '#79110D',
    variant: '#F8BCBA',
    100: '#FDE9E8',
    200: '#F8BCBA',
    300: '#F07975',
    400: '#E72922',
    500: '#B81A14',
    600: '#79110D',
    700: '#610E0A',
    800: '#450A07',
    900: '#2E0605',
    1000: '#F0E5DB',
  },
  neutral: {
    main: '#B4C2CB',
    high: '#363F45',
    medium: '#485760',
    low: '#6E8391',
    100: '#FFFFFF',
    200: '#F1F3F4',
    300: '#E1E6EA',
    400: '#B4C2CB',
    500: '#8B9CA7',
    600: '#6E8391',
    700: '#5C6E7A',
    800: '#485760',
    900: '#363F45',
    1000: '#000000',
  },
};
