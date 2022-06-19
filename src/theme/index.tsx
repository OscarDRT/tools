import * as React from 'react';
import {
  ThemeProvider as ThemeProviderRS,
  useTheme as useReTheme,
} from '@shopify/restyle';

import {lightTheme, Theme, darkTheme} from './theme';

interface ThemeProviderProps {
  children?: React.ReactElement;
}

export const useTheme = () => useReTheme<Theme>();

export const ThemeProvider = ({children}: ThemeProviderProps) => {
  return <ThemeProviderRS theme={darkTheme}>{children}</ThemeProviderRS>;
};
