import React from 'react';
import { TouchableOpacityProps } from 'react-native/types';
import styled from 'styled-components/native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { ProductDTO, ProductsStackParamList } from '../@types';

interface ProductCardProps extends TouchableOpacityProps {
  item: ProductDTO;
}

export const ProductCard = ({ item: { id, name, img, promo } }: ProductCardProps) => {
  const { navigate } = useNavigation<NavigationProp<ProductsStackParamList, 'HomeScreen'>>();
  return (
    <StyledContainer onPress={() => navigate('ProductDetailsScreen', { id })}>
      <StyledImage source={{ uri: img }} resizeMode='contain' />
      <StyledInfoContainer>
        <StyledName>Maquininha {name}</StyledName>
        <StyledPromo>À partir de {promo}</StyledPromo>
      </StyledInfoContainer>
    </StyledContainer>
  );
};

const StyledContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const StyledImage = styled.Image`
  width: 60px;
  height: 100px;
  margin-right: 16px;
`;

export const StyledInfoContainer = styled.View``;

export const StyledName = styled.Text`
  font-family: ${({ theme: { fonts } }) => fonts.primary.medium};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.md};
  color: ${({ theme: { colors } }) => colors.text};
  margin-bottom: 8px;
`;

export const StyledPromo = styled.Text`
  font-family: ${({ theme: { fonts } }) => fonts.primary.regular};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.md};
  color: ${({ theme: { colors } }) => colors.label};
`;
