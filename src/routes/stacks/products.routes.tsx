import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProductsListScreen, ProductDetailsScreen } from '../screens';
import { ProductsStackParamList } from '../../@types';

const { Navigator, Screen } = createNativeStackNavigator<ProductsStackParamList>();

export const ProductsRoutes = () => {
  return (
    <Navigator
      initialRouteName='ProductsListScreen'
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen name='ProductsListScreen' component={ProductsListScreen} />
      <Screen name='ProductDetailsScreen' component={ProductDetailsScreen} />
    </Navigator>
  );
};
