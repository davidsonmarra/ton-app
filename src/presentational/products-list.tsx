import React, { useCallback, useLayoutEffect, useState } from 'react';
import { FlatList, FlatListProps } from 'react-native';
import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, NavigationProp } from '@react-navigation/native';

import { ProductDTO, ProductsStackParamList } from '../@types';
import { Header, ProductCard } from '../components';

export const ProductsList = () => {
  const [products, setProducts] = useState([]);
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

  const renderItem = useCallback(
    ({ item }: { item: ProductDTO }) => (
      <ProductCard item={item} handlePressProduct={handlePressProduct} />
    ),
    []
  );

  useLayoutEffect(() => {
    getProducts();
  }, []);

  return (
    <StyledContainer>
      <Header title='Maquininhas' />
      <StyledContent>
        <StyledList
          data={products}
          keyExtractor={(item: ProductDTO) => `${item.id}`}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
          ListHeaderComponent={listHeaderComponent}
          ItemSeparatorComponent={StyledSeparator}
          scrollEventThrottle={16}
        />
      </StyledContent>
    </StyledContainer>
  );
};

const listHeaderComponent = () => (
  <>
    <StyledText>Escolha uma opção</StyledText>
    <StyledDescription>Descubra a melhor opção para o seu negócio.</StyledDescription>
  </>
);

export const StyledContainer = styled(SafeAreaView).attrs({
  edges: ['right', 'bottom', 'left']
})`
  flex: 1;
  background-color: ${({ theme: { colors } }) => colors.background};
`;

const StyledContent = styled.View`
  flex: 1;
  padding: 24px 24px 0;
`;

const StyledText = styled.Text`
  font-family: ${({ theme: { fonts } }) => fonts.primary.semiBold};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.lg};
  color: ${({ theme: { colors } }) => colors.text};
  margin-bottom: 8px;
`;

const StyledDescription = styled.Text`
  font-family: ${({ theme: { fonts } }) => fonts.primary.regular};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.lg};
  color: ${({ theme: { colors } }) => colors.label};
  margin-bottom: 24px;
`;

const StyledList = styled(
  FlatList as new (props: FlatListProps<ProductDTO>) => FlatList<ProductDTO>
).attrs({
  contentContainerStyle: {
    paddingBottom: 24
  }
})``;

const StyledSeparator = styled.View`
  height: 16px;
`;