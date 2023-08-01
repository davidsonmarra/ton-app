import React from 'react';
import { TouchableOpacityProps } from 'react-native/types';
import styled from 'styled-components/native';
import { ProductDTO } from '../@types';

interface ProductCardProps extends TouchableOpacityProps {
  item: ProductDTO;
  handlePressProduct: (id: number) => void;
}

export const ProductCard = ({
  item: { id, name, img, promo },
  handlePressProduct
}: ProductCardProps) => {
  return (
    <StyledContainer onPress={() => handlePressProduct(id)}>
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

const StyledImage = styled.Image`
  width: 60px;
  height: 100px;
  margin-right: 16px;
`;

const StyledInfoContainer = styled.View``;

const StyledName = styled.Text`
  font-family: ${({ theme: { fonts } }) => fonts.primary.medium};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.md};
  color: ${({ theme: { colors } }) => colors.text};
  margin-bottom: 8px;
`;

const StyledPromo = styled.Text`
  font-family: ${({ theme: { fonts } }) => fonts.primary.regular};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.md};
  color: ${({ theme: { colors } }) => colors.label};
`;
