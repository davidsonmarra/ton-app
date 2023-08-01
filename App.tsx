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
import { createServer } from 'miragejs';

import StorybookUIRoot from './.storybook';
import { theme } from './src/global/styles';
import { productsApi } from './src/helpers';
import { Routes } from './src/routes';

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
    this.get('/api/products/:id', (_, request) => {
      const id: string = request.params.id;
      return productsApi.find(product => product.id === Number(id)) || {};
    });
  }
});

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
