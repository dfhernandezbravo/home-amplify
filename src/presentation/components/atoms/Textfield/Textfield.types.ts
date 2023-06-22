import { ChangeEvent, InputHTMLAttributes } from 'react';

export interface TextfieldStruct extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  placeholder: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  name: string;
}
