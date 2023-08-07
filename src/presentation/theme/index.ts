import { Border, border } from './tokens/border';
import { Color, colors } from './tokens/color';
import { Elevation, elevation } from './tokens/elevation';
import { FontFamily, fontFamily } from './tokens/font-family';
import { FontSize, fontSize } from './tokens/font-size';
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
};

export const themeStyled: ThemeEasy = {
  radius,
  border,
  elevation,
  colors,
  spacing,
  fontSize,
  fontFamily,
};
