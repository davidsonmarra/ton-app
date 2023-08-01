import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/home-screen';
import { ProductDetailsScreen } from '../screens/product-details-screen';
import { ProductsStackParamList } from '../../@types';

const { Navigator, Screen } = createNativeStackNavigator<ProductsStackParamList>();

export const ProductsRoutes = () => {
  return (
    <Navigator
      initialRouteName='HomeScreen'
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen name='HomeScreen' component={HomeScreen} />
      <Screen name='ProductDetailsScreen' component={ProductDetailsScreen} />
    </Navigator>
  );
};
