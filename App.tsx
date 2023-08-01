/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import './environments';
import { ThemeProvider } from 'styled-components/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import StorybookUIRoot from './.storybook';
import { theme } from './src/global/styles';
import { Home } from './src/presentational';
import { createServer } from 'miragejs';
import { productsApi } from './src/helpers';

if (window.server) {
  window.server.shutdown();
}

window.server = createServer({
  routes() {
    this.get('/api/products', () => {
      return {
        products: productsApi
      };
    });
  }
});

const App = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default RUN_STORYBOOK ? StorybookUIRoot : App;
