import {useKeepAwake} from '@sayem314/react-native-keep-awake';
import React from 'react';
import {Vibration} from 'react-native';

const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
  2 * ONE_SECOND_IN_MS,
  3 * ONE_SECOND_IN_MS,
  4 * ONE_SECOND_IN_MS,
];

export const useLogicTimer = () => {
  useKeepAwake();

  const [minutes, setMinutes] = React.useState<number>(0);

  const [isPaused, setIsPaused] = React.useState<boolean>(true);

  const [progress, setProgress] = React.useState<number>(1);

  const onProgress = (prog: number) => {
    setProgress(prog);
  };

  const onStart = () => {
    setIsPaused(false);
  };

  const onEnd = () => {
    Vibration.vibrate(PATTERN);
    setMinutes(0);
    setIsPaused(true);
  };

  return {
    minutes,
    setMinutes,
    isPaused,
    setIsPaused,
    progress,
    setProgress,
    onProgress,
    onStart,
    onEnd,
  };
};
