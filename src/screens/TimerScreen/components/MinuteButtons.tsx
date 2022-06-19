import React from 'react';
import {Box} from '../../../components/Box';
import {MinuteButton} from '../../../components/MinuteButton';

export type MinuteButtonsProps = {
  setMinutes: (s: number) => void;
  disabled: boolean;
};

export const MinuteButtons = ({setMinutes, disabled}: MinuteButtonsProps) => {
  return (
    <Box
      flexDirection={'row'}
      flexWrap={'wrap'}
      justifyContent={'space-evenly'}
      paddingHorizontal={'$16'}>
      {[10, 15, 30, 45, 50].map((item, idx) => {
        return (
          <Box margin={'$8'} key={idx}>
            <MinuteButton
              minutes={item}
              setMinutes={setMinutes}
              disabled={disabled}
            />
          </Box>
        );
      })}
    </Box>
  );
};
