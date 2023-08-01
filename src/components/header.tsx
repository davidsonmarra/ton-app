import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

interface HeaderProps {
  title: string;
}

export const Header = ({ title }: HeaderProps) => {
  const { top } = useSafeAreaInsets();

  return (
    <StyledContainer topInset={top}>
      <StyledTitle>{title}</StyledTitle>
    </StyledContainer>
  );
};

const StyledContainer = styled.View<{ topInset: number }>`
  padding: ${({ topInset }) => topInset + 12}px 12px 12px;
  background-color: ${({ theme: { colors } }) => colors.primary};
`;

const StyledTitle = styled.Text`
  text-align: center;
  font-family: ${({ theme: { fonts } }) => fonts.primary.bold};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.lg};
  color: ${({ theme: { colors } }) => colors.secondary};
`;
