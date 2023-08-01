import { DimensionsInPx } from '../px-to-rem';

export type FontSize = {
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

export const fontSize: FontSize = {
  '50': DimensionsInPx['8px'],
  '100': DimensionsInPx['12px'],
  '200': DimensionsInPx['14px'],
  '300': DimensionsInPx['16px'],
  '400': DimensionsInPx['18px'],
  '500': DimensionsInPx['20px'],
  '600': DimensionsInPx['24px'],
  '700': DimensionsInPx['32px'],
  '800': DimensionsInPx['40px'],
  '900': DimensionsInPx['48px'],
};
