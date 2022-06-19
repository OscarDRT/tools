import React from 'react';
import {Switch} from 'react-native';
import {Box} from './Box';

export type SwitchThemeProps = {
  isDarkTheme: boolean;
  setIsDarkTheme: (s: boolean) => void;
};

export const SwitchTheme = ({
  isDarkTheme,
  setIsDarkTheme,
}: SwitchThemeProps) => {
  const onValueChange = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <Box backgroundColor={'background'} padding={'$16'}>
      <Switch value={isDarkTheme} onValueChange={onValueChange} />
    </Box>
  );
};
