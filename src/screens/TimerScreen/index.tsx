import React from 'react';

import {TouchableOpacity, Vibration} from 'react-native';

import {RFValue} from 'react-native-responsive-fontsize';
import {Countdown} from '../../components/Countdown';

import {ProgressBar} from 'react-native-paper';
import {RootStackScreenProps} from '../../navigation/types';
import {useLogicTimer} from './hooks/useLogicTimer';
import {Container} from '../../components/Container';
import {Text} from '../../components/Text';
import {useTheme} from '../../theme';
import {MinuteButtons} from './components/MinuteButtons';
import {Card} from '../../components/Card';

export const TimerScreen = ({route}: RootStackScreenProps<'TimerScreen'>) => {
  const {title} = route.params ?? {};

  const {minutes, setMinutes, isPaused, progress, onProgress, onStart, onEnd} =
    useLogicTimer();

  const {colors, spacing} = useTheme();

  return (
    <Container justifyContent={'center'}>
      <Text variant={'title'} textAlign={'center'}>
        Enfocar mi tiempo en:
      </Text>

      <Text variant={'subTitle'} textAlign={'center'}>
        {title}
      </Text>

      <Countdown
        minutes={minutes}
        isPaused={isPaused}
        onProgress={onProgress}
        onEnd={onEnd}
      />

      <ProgressBar
        progress={progress}
        color={colors.foreground}
        style={{height: spacing.$16, marginBottom: spacing.$16}}
      />

      <MinuteButtons setMinutes={setMinutes} disabled={!isPaused} />

      <TouchableOpacity
        style={{alignItems: 'center', borderRadius: 8}}
        disabled={!minutes || !isPaused}
        onPress={onStart}>
        <Card
          variant={'primary'}
          height={RFValue(100)}
          width={RFValue(100)}
          borderRadius={RFValue(50)}
          justifyContent={'center'}
          alignItems={'center'}
          opacity={!minutes || !isPaused ? 0 : 1}>
          <Text variant={'subTitle'} color={'background'}>
            Empezar
          </Text>
        </Card>
      </TouchableOpacity>
    </Container>
  );
};
