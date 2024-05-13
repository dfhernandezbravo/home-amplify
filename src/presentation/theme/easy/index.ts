import { RuleSet } from 'styled-components';
import { Border, border } from './tokens/border';
import { Breakpoints, breakpoints } from './tokens/breakpoints';
import { Color, colors } from './tokens/color';
import { Elevation, elevation } from './tokens/elevation';
import { FontFamily, fontFamily } from './tokens/font-family';
import { FontSize, fontSize } from './tokens/font-size';
import { LineHeight, lineHeight } from './tokens/line-height';
import { Radius, radius } from './tokens/radius';
import { Spacing, spacing } from './tokens/spacing';

export type ThemeEasy = {
  radius: Radius;
  border: Border;
  elevation: Elevation;
  colors: Color;
  spacing: Spacing;
  fontSize: FontSize;
  fontFamily: FontFamily;
  lineHeight: LineHeight;
  breakpoints: Breakpoints;
};

export const theme: ThemeEasy = {
  radius,
  border,
  elevation,
  colors,
  spacing,
  fontSize,
  fontFamily,
  lineHeight,
  breakpoints,
};

export const mediaQueryStyled = {
  phone: (styles: RuleSet<object> | string) =>
    `@media screen and (max-width: ${breakpoints.sm}) { ${styles} }`,
  tablet: (styles: RuleSet<object> | string) =>
    `@media screen and (max-width: ${breakpoints.md}) { ${styles} }`,
  desktop: (styles: RuleSet<object> | string) =>
    `@media screen and (min-width: ${breakpoints.lg}) { ${styles} }`,
};

export const useTheme = () => theme;
