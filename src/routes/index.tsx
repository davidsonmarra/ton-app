import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ProductsRoutes } from './stacks/products.routes';

export function Routes() {
  return (
    <NavigationContainer>
      <ProductsRoutes />
    </NavigationContainer>
  );
}
