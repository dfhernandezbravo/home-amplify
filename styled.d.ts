import 'styled-components';
import { ThemeEasy } from '@cencosud-ds/easy-design-system';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeEasy {}
}
