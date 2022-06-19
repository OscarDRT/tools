import React from 'react';
import {TouchableOpacity, Dimensions} from 'react-native';
import {Card} from './Card';
import {Text} from './Text';

const {width} = Dimensions.get('screen');

const size = (width * 20) / 100;

export type MinuteButtonProps = {
  minutes: number;
  setMinutes: (s: number) => void;
  disabled: boolean;
};

export const MinuteButton = ({
  minutes = 0,
  setMinutes,
  disabled,
}: MinuteButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => setMinutes(minutes)}
      disabled={disabled}>
      <Card
        variant={disabled ? 'disabled' : 'primary'}
        height={size}
        width={size}
        borderRadius={size}
        justifyContent={'center'}
        alignItems={'center'}>
        <Text variant={'title'} color={'background'}>
          {minutes}
        </Text>
      </Card>
    </TouchableOpacity>
  );
};
