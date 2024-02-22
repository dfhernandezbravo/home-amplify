import { ComponentType } from 'react';
import TermsAndConditions from '../terms-and-conditions';
import PrivacyPolicyContent from '../privacy-content';
import AssistedSaleContent from '../assisted-sale';

export type LegalsPaths =
  | 'terms-and-conditions'
  | 'privacy-policy-and-data-processing'
  | 'terms-and-conditions-of-assisted-sale';

export type LegalsComponentObj = {
  [key in LegalsPaths]: ComponentType;
};

const LegalsComponents: LegalsComponentObj = {
  'terms-and-conditions': TermsAndConditions,
  'privacy-policy-and-data-processing': PrivacyPolicyContent,
  'terms-and-conditions-of-assisted-sale': AssistedSaleContent,
};

export default LegalsComponents;
