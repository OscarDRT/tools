import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Navigation from './src/navigation';
import {ThemeProvider} from './src/theme';

export default function App() {
  //const isLoadingComplete = useCachedResources();

  if (false) {
    return null;
  } else {
    return (
      <ThemeProvider>
        <SafeAreaView style={{flex: 1}}>
          <StatusBar hidden />
          <Navigation />
        </SafeAreaView>
      </ThemeProvider>
    );
  }
}
