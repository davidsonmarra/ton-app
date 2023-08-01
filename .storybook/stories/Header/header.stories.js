import React from 'react';
import { View } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { Header } from '../../../src/components';
import { theme } from '../../../src/global/styles';

const HeaderMeta = {
  title: 'Header',
  component: Header,
  args: {
    title: 'Maquininhas'
  },
  decorators: [
    Story => (
      <ThemeProvider theme={theme}>
        <View style={{ justifyContent: 'center', flex: 1 }}>
          <Story />
        </View>
      </ThemeProvider>
    )
  ]
};

export default HeaderMeta;

export const Basic = {};

export const LeftIcon = {
  args: {
    title: 'T3 Smart Promo',
    leftIcon: 'arrow-back'
  },
  argTypes: {
    handlePressLeftIcon: { action: 'pressed the left button' }
  }
};

export const RightIcon = {
  args: {
    title: 'T3 Smart Promo',
    rightIcon: 'info-outline'
  },
  argTypes: {
    handlePressRightIcon: { action: 'pressed the right button' }
  }
};

export const LeftAndRightIcon = {
  args: {
    title: 'T3 Smart Promo',
    leftIcon: 'arrow-back',
    rightIcon: 'info-outline'
  },
  argTypes: {
    handlePressLeftIcon: { action: 'pressed the left button' },
    handlePressRightIcon: { action: 'pressed the right button' }
  }
};
