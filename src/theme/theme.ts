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
    primary: palette.pLight,
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
  cardVariants: {
    primary: {
      backgroundColor: 'primary',
    },
    disabled: {
      backgroundColor: 'primary',
      opacity: 0.5,
    },
  },
  textVariants: {
    title: {
      color: 'text',
      fontSize: RFValue(24),
      lineHeight: RFValue(28),
      letterSpacing: RFValue(-0.1),
      fontWeight: '700',
    },
    subTitle: {
      color: 'text',
      fontSize: RFValue(18),
      lineHeight: RFValue(22),
      letterSpacing: RFValue(-0.1),
      fontWeight: '400',
    },
    timer: {
      color: 'text',
      fontSize: RFValue(100),
      lineHeight: RFValue(104),
      letterSpacing: RFValue(-0.1),
      fontWeight: 'bold',
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
    primary: palette.sLight,
  },
};

export type Theme = typeof lightTheme;
