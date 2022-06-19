import * as React from 'react';
import {
  ThemeProvider as ThemeProviderRS,
  useTheme as useReTheme,
} from '@shopify/restyle';

import {lightTheme, Theme, darkTheme} from './theme';

interface ThemeProviderProps {
  children?: React.ReactElement;
  isDarkTheme: boolean;
}

export const useTheme = () => useReTheme<Theme>();

export const ThemeProvider = ({children, isDarkTheme}: ThemeProviderProps) => {
  return (
    <ThemeProviderRS theme={isDarkTheme ? darkTheme : lightTheme}>
      {children}
    </ThemeProviderRS>
  );
};
