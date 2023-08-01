import React from 'react';
import styled, { useTheme } from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface BenefitItemDetails {
  icon: string;
  description: string;
}

export const BenefitItemDetails = ({ icon, description }: BenefitItemDetails) => {
  const { colors } = useTheme();

  return (
    <StyledContainer>
      <Icon name={icon} size={24} color={colors.primary} />
      <StyledDescription>{description}</StyledDescription>
    </StyledContainer>
  );
};

const StyledContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
`;

const StyledDescription = styled.Text`
  flex: 1;
  margin-left: 8px;
  font-family: ${({ theme: { fonts } }) => fonts.primary.regular};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.md};
  color: ${({ theme: { colors } }) => colors.text};
`;
