import React from 'react';
import { View } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { TitleProductDetails } from '../../../src/components';
import { productDetailsApi } from '../../../src/helpers';
import { theme } from '../../../src/global/styles';
import { NavigationContainer } from '@react-navigation/native';

const TitleProductDetailsMeta = {
  title: 'Title Product Details',
  component: TitleProductDetails,
  args: {
    title: productDetailsApi[0].title,
    subTitle: productDetailsApi[0].subTitle
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

export default TitleProductDetailsMeta;

export const Basic = {};
