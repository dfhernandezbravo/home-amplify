import { CSSProperties, ReactNode } from 'react';

// Definitions
export type ButtonType = 'button' | 'reset' | 'submit';

export type Variant = 'text' | 'contained' | 'outlined' | 'disabled';

export type ButtonAttr = {
  disabled?: boolean;
  variant?: Variant;
  loading?: boolean;
};

export interface Props extends ButtonAttr {
  type: ButtonType;
  onClick?: () => void;
  className?: string;
  loading?: boolean;
  style?: CSSProperties;
  children?: ReactNode;
}
