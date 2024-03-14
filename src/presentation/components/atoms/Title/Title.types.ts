import { TitleTag } from '@/domain/entities/content/content.types';
import { CSSProperties } from 'styled-components';

export type TitleStruct = {
  text?: string;
  titleTag?: TitleTag;
  style?: CSSProperties;
};
