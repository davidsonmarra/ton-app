import React, { useCallback, useLayoutEffect, useState } from 'react';
import { ProductsList } from '../../presentational';
import { ProductDTO, ProductsStackParamList } from '../../@types';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { api } from '../../global/services';

export const ProductsListScreen = () => {
  const [products, setProducts] = useState<ProductDTO[]>([]);
  const { navigate } =
    useNavigation<NavigationProp<ProductsStackParamList, 'ProductsListScreen'>>();

  const getProducts = useCallback(async () => {
    try {
      const { data } = await api.get('products');
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handlePressProduct = useCallback((id: number) => {
    navigate('ProductDetailsScreen', { id });
  }, []);

  useLayoutEffect(() => {
    getProducts();
  }, []);

  return <ProductsList products={products} handlePressProduct={handlePressProduct} />;
};
