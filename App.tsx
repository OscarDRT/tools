import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SwitchTheme} from './src/components/SwitchTheme';
import Navigation from './src/navigation';
import {ThemeProvider} from './src/theme';

export default function App() {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);

  return (
    <ThemeProvider isDarkTheme={isDarkTheme}>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar hidden />
        <SwitchTheme
          isDarkTheme={isDarkTheme}
          setIsDarkTheme={setIsDarkTheme}
        />
        <Navigation />
      </SafeAreaView>
    </ThemeProvider>
  );
}
