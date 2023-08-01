import React from 'react';
import styled from 'styled-components/native';

interface PriceDetailsProps {
  oldPrice: string;
  currentPrice: string;
  installmentsValue: string;
  installmentsValueCents: string;
}

export const PriceDetails = ({
  oldPrice,
  currentPrice,
  installmentsValue,
  installmentsValueCents
}: PriceDetailsProps) => {
  return (
    <StyledContainer>
      <StyledLeftContainer>
        <StyledOldPrice>R$ {oldPrice}</StyledOldPrice>
        <StyledCurrentPrice>R$ {currentPrice}</StyledCurrentPrice>
        <StyledLabel>à vista ou</StyledLabel>
      </StyledLeftContainer>
      <StyledRightContainer>
        <StyledRightInstallmentsContainer>
          <StyledInstallments>12x</StyledInstallments>
          <StyledCipher>R$</StyledCipher>
        </StyledRightInstallmentsContainer>
        <StyledPriceContainer>
          <StyledPrice>{installmentsValue}</StyledPrice>
          <StyledCents>{installmentsValueCents}</StyledCents>
        </StyledPriceContainer>
      </StyledRightContainer>
    </StyledContainer>
  );
};

const StyledContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const StyledLeftContainer = styled.View`
  margin-right: 24px;
`;

const StyledOldPrice = styled.Text`
  text-decoration: line-through;
  font-family: ${({ theme: { fonts } }) => fonts.primary.regular};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.sm};
  color: ${({ theme: { colors } }) => colors.label};
`;

const StyledCurrentPrice = styled.Text`
  font-family: ${({ theme: { fonts } }) => fonts.primary.semiBold};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.md};
  color: ${({ theme: { colors } }) => colors.text};
`;

const StyledLabel = styled.Text`
  font-family: ${({ theme: { fonts } }) => fonts.primary.regular};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.sm};
  color: ${({ theme: { colors } }) => colors.label};
`;

const StyledRightContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const StyledRightInstallmentsContainer = styled.View``;

const StyledInstallments = styled.Text`
  font-family: ${({ theme: { fonts } }) => fonts.primary.semiBold};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.sm};
  color: ${({ theme: { colors } }) => colors.text};
`;

const StyledCipher = styled.Text`
  font-family: ${({ theme: { fonts } }) => fonts.primary.semiBold};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.sm};
  color: ${({ theme: { colors } }) => colors.primary};
`;

const StyledPriceContainer = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;

const StyledPrice = styled.Text`
  font-family: ${({ theme: { fonts } }) => fonts.primary.bold};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.xxxl};
  color: ${({ theme: { colors } }) => colors.primary};
`;

const StyledCents = styled.Text`
  font-family: ${({ theme: { fonts } }) => fonts.primary.semiBold};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.md};
  color: ${({ theme: { colors } }) => colors.primary};
`;
