import React from 'react';
import { View } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { ImageCardSelect } from '../../../src/components';
import { productDetailsApi } from '../../../src/helpers';
import { theme } from '../../../src/global/styles';
import { NavigationContainer } from '@react-navigation/native';

const ImageCardSelectMeta = {
  title: 'Image Card Select',
  component: ImageCardSelect,
  argTypes: {
    handlePressCard: { action: 'pressed the button' }
  },
  args: {
    img: productDetailsApi[0].images[0],
    isSelected: false
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

export default ImageCardSelectMeta;

export const Basic = {};

export const Selected = {
  args: {
    isSelected: true
  }
};
