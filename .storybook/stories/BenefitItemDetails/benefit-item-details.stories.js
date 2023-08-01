import React from 'react';
import { View } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { BenefitItemDetails } from '../../../src/components';
import { theme } from '../../../src/global/styles';

const BenefitItemDetailsMeta = {
  title: 'Benefit Item Details',
  component: BenefitItemDetails,
  args: {
    icon: 'truck-outline',
    description: 'Frete grátis para todo o Brasil'
  },
  decorators: [
    Story => (
      <ThemeProvider theme={theme}>
        <View style={{ alignContent: 'center', justifyContent: 'center', flex: 1 }}>
          <Story />
        </View>
      </ThemeProvider>
    )
  ]
};

export default BenefitItemDetailsMeta;

export const Basic = {};
