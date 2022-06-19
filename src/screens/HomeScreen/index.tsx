import React from 'react';

import {TextInput} from 'react-native-paper';
import {Container} from '../../components/Container';
import {Text} from '../../components/Text';
import {RootStackScreenProps} from '../../navigation/types';
import {useTheme} from '../../theme';
import {useLogicHome} from './hooks/useLogicHome';

export const HomeScreen = ({}: RootStackScreenProps<'HomeScreen'>) => {
  const {text, setText, goToTimerScreen} = useLogicHome();

  const {colors} = useTheme();

  return (
    <Container justifyContent={'center'}>
      <Text
        variant={'title'}
        fontWeight={'700'}
        textAlign={'center'}
        marginBottom={'$16'}>
        ¿En qué deseas enfocar tu tiempo?
      </Text>
      <TextInput
        activeUnderlineColor={colors.foreground}
        underlineColor={colors.foreground}
        selectionColor={colors.foreground}
        onSubmitEditing={goToTimerScreen}
        autoFocus
        value={text}
        onChangeText={v => setText(v)}
      />
    </Container>
  );
};
