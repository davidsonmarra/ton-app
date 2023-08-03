/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StatusBar } from 'react-native';
import './environments';
import { ThemeProvider } from 'styled-components/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import StorybookUIRoot from './.storybook';
import { theme } from './src/global/styles';
import { Routes } from './src/routes';
import { makeServer } from './src/server';

if (window.server) {
  window.server.shutdown();
}

makeServer();

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor='transparent' translucent barStyle='light-content' />
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default RUN_STORYBOOK ? StorybookUIRoot : App;
