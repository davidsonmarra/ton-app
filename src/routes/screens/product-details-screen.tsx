import React, { useCallback, useLayoutEffect, useState } from 'react';
import { ProductDetailsDTO, ProductsStackParamList } from '../../@types';
import { ProductDetails } from '../../presentational';
import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const ProductDetailsScreen = () => {
  const [product, setProduct] = useState({} as ProductDetailsDTO);
  const [isLoading, setIsLoading] = useState(true);

  const { bottom } = useSafeAreaInsets();
  const { goBack } =
    useNavigation<NavigationProp<ProductsStackParamList, 'ProductDetailsScreen'>>();
  const { id } = useRoute<RouteProp<ProductsStackParamList, 'ProductDetailsScreen'>>().params;

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
      bottomInset={bottom}
    />
  );
};
