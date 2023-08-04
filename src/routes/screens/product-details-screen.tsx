import React, { useCallback, useLayoutEffect, useState } from 'react';
import { ProductDetailsDTO, ProductsStackParamList } from '../../@types';
import { ProductDetails } from '../../presentational';
import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { api } from '../../global/services';

export const ProductDetailsScreen = () => {
  const [product, setProduct] = useState({} as ProductDetailsDTO);
  const [isLoading, setIsLoading] = useState(true);

  const { bottom } = useSafeAreaInsets();
  const { goBack } =
    useNavigation<NavigationProp<ProductsStackParamList, 'ProductDetailsScreen'>>();
  const { id } = useRoute<RouteProp<ProductsStackParamList, 'ProductDetailsScreen'>>().params;

  const getProduct = useCallback(async () => {
    try {
      const { data } = await api.get(`products/${id}`);
      setProduct(data);
    } catch (error) {
      console.log(error);
      goBack();
    }
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
