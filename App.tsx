/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { View } from 'react-native';
import { ThemeProvider } from 'styled-components/native';

import { theme } from './src/global/styles';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <View />
    </ThemeProvider>
  );
};

export default App;
