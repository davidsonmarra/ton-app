import React from 'react';
import { View } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { ImageDetails } from '../../../src/components';
import { productDetailsApi } from '../../../src/helpers';
import { theme } from '../../../src/global/styles';
import { NavigationContainer } from '@react-navigation/native';

const ImageDetailsMeta = {
  title: 'Image Details',
  component: ImageDetails,
  args: {
    images: productDetailsApi[0].images
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

export default ImageDetailsMeta;

export const Basic = {};
