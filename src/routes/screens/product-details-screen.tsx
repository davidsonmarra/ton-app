import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text } from 'react-native';
import { ProductsStackParamList } from '../../@types';

type ProductDetailsScreenProps = NativeStackScreenProps<
  ProductsStackParamList,
  'ProductDetailsScreen'
>;

export const ProductDetailsScreen = ({ route }: ProductDetailsScreenProps) => {
  console.log(route.params);
  return <Text>Tese</Text>;
};
