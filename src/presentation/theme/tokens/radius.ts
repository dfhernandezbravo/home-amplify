import { DimensionsInPx } from '../px-to-rem';

export type Radius = {
  xsm: string;
  sm: string;
  md: string;
  lg: string;
  xlg: string;
  '2xlg': string;
};

export const radius: Radius = {
  xsm: DimensionsInPx['4px'],
  sm: DimensionsInPx['8px'],
  md: DimensionsInPx['16px'],
  lg: DimensionsInPx['24px'],
  xlg: DimensionsInPx['28px'],
  '2xlg': DimensionsInPx['32px'],
};
