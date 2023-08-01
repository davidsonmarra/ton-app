import React from 'react';
import styled from 'styled-components/native';

interface TitleProductDetailsProps {
  title: string;
  subTitle: string;
}

export const TitleProductDetails = ({ title, subTitle }: TitleProductDetailsProps) => {
  return (
    <StyledContainer>
      <StyledTitle>{title}</StyledTitle>
      <StyledSubTitle> {subTitle}</StyledSubTitle>
    </StyledContainer>
  );
};

const StyledContainer = styled.View`
  flex-direction: row;
  justify-content: center;
`;

const StyledTitle = styled.Text`
  font-family: ${({ theme: { fonts } }) => fonts.primary.bold};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.xl};
  color: ${({ theme: { colors } }) => colors.text};
`;

const StyledSubTitle = styled.Text`
  font-family: ${({ theme: { fonts } }) => fonts.primary.medium};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.xl};
  color: ${({ theme: { colors } }) => colors.text};
`;
