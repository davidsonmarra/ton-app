import React, { useCallback, useLayoutEffect, useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ProductDetailsDTO, ProductsStackParamList } from '../../@types';
import { ProductDetails } from '../../presentational';

type ProductDetailsScreenProps = NativeStackScreenProps<
  ProductsStackParamList,
  'ProductDetailsScreen'
>;

export const ProductDetailsScreen = ({
  navigation: { goBack },
  route: { params }
}: ProductDetailsScreenProps) => {
  const [product, setProduct] = useState({} as ProductDetailsDTO);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = params;

  const getProduct = useCallback(async () => {
    const response = await fetch('api/products/' + id);
    const data = await response.json();
    setProduct(data);
    setIsLoading(false);
  }, [product]);

  const handlePressLeftIcon = useCallback(() => {
    goBack();
  }, []);

  useLayoutEffect(() => {
    getProduct();
  }, []);

  return (
    <ProductDetails
      isLoadingApi={isLoading}
      item={product}
      handlePressLeftIcon={handlePressLeftIcon}
    />
  );
};
