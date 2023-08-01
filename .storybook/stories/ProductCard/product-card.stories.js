import React from 'react';
import { View } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { ProductCard } from '../../../src/components';
import { theme } from '../../../src/global/styles';

const ProductCardMeta = {
  title: 'Product Card',
  component: ProductCard,
  argTypes: {
    onPress: { action: 'pressed the button' }
  },
  args: {
    item: {
      id: 1,
      name: 'T1',
      promo: '12x de R$ 1,90',
      img: 'https://assets.lojastonemais.com.br/images/products/TON_D150/medium.png'
    }
  },
  decorators: [
    Story => (
      <ThemeProvider theme={theme}>
        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
          <Story />
        </View>
      </ThemeProvider>
    )
  ]
};

export default ProductCardMeta;

export const Basic = {};
