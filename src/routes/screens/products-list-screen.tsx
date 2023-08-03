import React, { useCallback, useLayoutEffect, useState } from 'react';
import { ProductsList } from '../../presentational';
import { ProductDTO, ProductsStackParamList } from '../../@types';
import { NavigationProp, useNavigation } from '@react-navigation/native';

export const ProductsListScreen = () => {
  const [products, setProducts] = useState<ProductDTO[]>([]);
  const { navigate } =
    useNavigation<NavigationProp<ProductsStackParamList, 'ProductsListScreen'>>();

  const getProducts = useCallback(async () => {
    const response = await fetch('api/products');
    const data = await response.json();
    setProducts(data.products);
  }, []);

  const handlePressProduct = useCallback((id: number) => {
    navigate('ProductDetailsScreen', { id });
  }, []);

  useLayoutEffect(() => {
    getProducts();
  }, []);

  return <ProductsList products={products} handlePressProduct={handlePressProduct} />;
};
