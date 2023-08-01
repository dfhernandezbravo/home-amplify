import { DimensionsInPx } from '../px-to-rem';

export type Spacing = {
  '50': string;
  '100': string;
  '200': string;
  '300': string;
  '400': string;
  '500': string;
  '600': string;
  '700': string;
  '800': string;
  '900': string;
};

export const spacing: Spacing = {
  '50': DimensionsInPx['4px'],
  '100': DimensionsInPx['8px'],
  '200': DimensionsInPx['16px'],
  '300': DimensionsInPx['24px'],
  '400': DimensionsInPx['32px'],
  '500': DimensionsInPx['40px'],
  '600': DimensionsInPx['48px'],
  '700': DimensionsInPx['56px'],
  '800': DimensionsInPx['64px'],
  '900': DimensionsInPx['72px'],
};
