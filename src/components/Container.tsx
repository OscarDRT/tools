import React from 'react';
import {Box, BoxProps} from './Box';

export type ContainerProps = {
  children: React.ReactNode;
} & React.ComponentProps<BoxProps>;

export const Container = ({children, ...props}: ContainerProps) => {
  return (
    <Box flex={1} backgroundColor={'background'} padding={'$16'} {...props}>
      {children}
    </Box>
  );
};
