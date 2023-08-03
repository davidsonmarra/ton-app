import React, { useCallback, useLayoutEffect, useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ProductsList } from '../../presentational';
import { ProductDTO, ProductsStackParamList } from '../../@types';

type ProductsListScreenProps = NativeStackScreenProps<ProductsStackParamList, 'ProductsListScreen'>;

export const ProductsListScreen = ({ navigation: { navigate } }: ProductsListScreenProps) => {
  const [products, setProducts] = useState<ProductDTO[]>([]);

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
