import { theme } from '@/presentation/theme/easy';
import React from 'react';
import { ThemeProvider } from 'styled-components';
interface Props {
  children: React.ReactNode;
}

const EasyThemeProvider: React.FC<Props> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default EasyThemeProvider;
