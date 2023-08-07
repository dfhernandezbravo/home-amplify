import 'styled-components';
import { ThemeEasy } from './src/presentation/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeEasy {}
}
