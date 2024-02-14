import { ComponentType } from 'react';
import TermsAndConditions from '../terms-and-conditions';

export type LegalsPaths = 'terms-and-conditions';

export type LegalsComponentObj = {
  [key in LegalsPaths]: ComponentType;
};

const LegalsComponents: LegalsComponentObj = {
  'terms-and-conditions': TermsAndConditions,
};

export default LegalsComponents;
