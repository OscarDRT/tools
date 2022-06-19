import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {RootStackParamList} from '../../../navigation/types';

export const useLogicHome = () => {
  const [text, setText] = React.useState('');

  const {navigate} =
    useNavigation<StackNavigationProp<RootStackParamList, 'HomeScreen'>>();

  const goToTimerScreen = () => {
    navigate('TimerScreen', {title: text});
  };

  return {text, setText, goToTimerScreen};
};
