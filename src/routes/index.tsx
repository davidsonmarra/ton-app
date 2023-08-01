import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { TabBarRoutes } from './stacks/tab-bar.routes';

export function Routes() {
  return (
    <NavigationContainer>
      <TabBarRoutes />
    </NavigationContainer>
  );
}
