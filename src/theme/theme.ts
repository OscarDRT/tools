import {createTheme} from '@shopify/restyle';
import {RFValue} from 'react-native-responsive-fontsize';

const palette = {
  purpleLight: '#8C6FF7',
  purplePrimary: '#5A31F4',
  purpleDark: '#3F22AB',

  greenLight: '#56DCBA',
  greenPrimary: '#0ECD9D',
  greenDark: '#0A906E',

  black: '#0B0B0B',
  white: '#F0F2F3',

  primary: '#263238',
  pLight: '#4f5b62',
  pDark: '#000a12',
  pText: '#ffffff',

  secondary: '#cfd8dc',
  sLight: '#ffffff',
  sDark: '#9ea7aa',
  sText: '#000000',
};

export const lightTheme = createTheme({
  colors: {
    background: palette.secondary,
    foreground: palette.sDark,
    text: palette.sText,
  },
  spacing: {
    $8: 8,
    $16: 16,
    $24: 24,
    $40: 40,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  textVariants: {
    title: {
      color: 'text',
      fontSize: RFValue(18),
      lineHeight: RFValue(22),
      letterSpacing: RFValue(-0.1),
    },
  },
});

export const darkTheme: Theme = {
  ...lightTheme,
  colors: {
    ...lightTheme.colors,
    background: palette.primary,
    foreground: palette.pDark,
    text: palette.pText,
  },
};

export type Theme = typeof lightTheme;
