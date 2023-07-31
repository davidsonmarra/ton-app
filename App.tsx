/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { theme } from './src/global/styles';
import { Home } from './src/presentational';

const App = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;
