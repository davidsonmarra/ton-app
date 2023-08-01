import React from 'react';
import { View } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { Button } from '../../../src/components';
import { theme } from '../../../src/global/styles';
import { NavigationContainer } from '@react-navigation/native';

const ButtonMeta = {
  title: 'Button',
  component: Button,
  argTypes: {
    onPress: { action: 'pressed the button' }
  },
  args: {
    label: 'Comprar'
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

export default ButtonMeta;

export const Basic = {};
