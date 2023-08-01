import React from 'react';
import { View } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { ProductCard } from '../../../src/components';
import { productsApi } from '../../../src/helpers';
import { theme } from '../../../src/global/styles';

const ProductCardMeta = {
  title: 'Product Card',
  component: ProductCard,
  argTypes: {
    onPress: { action: 'pressed the button' }
  },
  args: {
    item: productsApi[0]
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
