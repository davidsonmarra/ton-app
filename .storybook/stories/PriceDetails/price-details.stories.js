import React from 'react';
import { View } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { PriceDetails } from '../../../src/components';
import { theme } from '../../../src/global/styles';
import { productDetailsApi } from '../../../__mocks__';

const PriceDetailsMeta = {
  title: 'Price Details',
  component: PriceDetails,
  args: {
    currentPrice: productDetailsApi[0].currentPrice,
    oldPrice: productDetailsApi[0].oldPrice,
    installmentsValue: productDetailsApi[0].installmentsValue,
    installmentsValueCents: productDetailsApi[0].installmentsValueCents
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

export default PriceDetailsMeta;

export const Basic = {};
