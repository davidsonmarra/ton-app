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

if (window.server) {
  window.server.shutdown();
}

window.server = createServer({
  routes() {
    this.get('/api/products', () => {
      return {
        products: [
          {
            id: 1,
            name: 'T1',
            promo: '12x de R$ 1,90',
            img: 'https://assets.lojastonemais.com.br/images/products/TON_D150/medium.png'
          },
          {
            id: 2,
            name: 'T1 Chip',
            promo: '12x de R$ 11,90',
            img: 'https://res.cloudinary.com/dunz5zfpt/fl_progressive/f_auto,c_limit,w_384,q_auto/site-ton/maquininhas/machine-t1-chip-1'
          },
          {
            id: 3,
            name: 'T2+',
            promo: '12x de R$ 9,90',
            img: 'https://res.cloudinary.com/dunz5zfpt/fl_progressive/f_auto,c_limit,w_384,q_auto/site-ton/maquininhas/machine-t2-1'
          },
          {
            id: 4,
            name: 'T3',
            promo: '12x de R$ 19,90',
            img: 'https://res.cloudinary.com/dunz5zfpt/fl_progressive/f_auto,c_limit,w_384,q_auto/site-ton/maquininhas/machine-t3-1'
          },
          {
            id: 5,
            name: 'T3 Smart',
            promo: '12x de R$ 29,90',
            img: 'https://res.cloudinary.com/dunz5zfpt/site-ton/t3-smart-1'
          }
        ]
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
