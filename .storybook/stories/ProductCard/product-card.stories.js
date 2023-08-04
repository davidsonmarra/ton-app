import React from 'react';
import { View } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { ProductCard } from '../../../src/components';
import { productsApi } from '../../../__mocks__';
import { theme } from '../../../src/global/styles';
import { NavigationContainer } from '@react-navigation/native';

const ProductCardMeta = {
  title: 'Product Card',
  component: ProductCard,
  argTypes: {
    handlePressProduct: { action: 'pressed the button' }
  },
  args: {
    item: productsApi[0]
  },
  decorators: [
    Story => (
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
            <Story />
          </View>
        </NavigationContainer>
      </ThemeProvider>
    )
  ]
};

export default ProductCardMeta;

export const Basic = {};
