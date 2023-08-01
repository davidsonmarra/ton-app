import React from 'react';
import { TouchableOpacityProps } from 'react-native/types';
import styled from 'styled-components/native';

interface ButtonProps extends TouchableOpacityProps {
  label: string;
}

export const Button = ({ label, onPress }: ButtonProps) => {
  return (
    <StyledContainer onPress={onPress}>
      <StyledText>{label}</StyledText>
    </StyledContainer>
  );
};

const StyledContainer = styled.TouchableOpacity`
  width: 100%;
  padding: 12px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 50px;
`;

const StyledText = styled.Text`
  text-align: center;
  font-family: ${({ theme: { fonts } }) => fonts.primary.bold};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.md};
  color: ${({ theme: { colors } }) => colors.secondary};
`;
