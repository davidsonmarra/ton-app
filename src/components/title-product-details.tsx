import React from 'react';
import { Platform } from 'react-native';
import styled from 'styled-components/native';

interface TitleProductDetailsProps {
  title: string;
  subTitle: string;
  bottomPadding?: number;
}

export const TitleProductDetails = ({
  title,
  subTitle,
  bottomPadding = Platform.OS === 'android' ? 36 : 32
}: TitleProductDetailsProps) => {
  return (
    <StyledContainer>
      <StyledTitle bottomPadding={bottomPadding}>{title}</StyledTitle>
      <StyledSubTitle> {subTitle}</StyledSubTitle>
    </StyledContainer>
  );
};

const StyledContainer = styled.View`
  flex-direction: row;
  justify-content: center;
`;

const StyledTitle = styled.Text<{ bottomPadding: number }>`
  font-family: ${({ theme: { fonts } }) => fonts.secondary.bold};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.xxl};
  color: ${({ theme: { colors } }) => colors.text};
  line-height: ${({ bottomPadding }) => bottomPadding}px;
  height: ${({ bottomPadding }) => bottomPadding}px;
`;

const StyledSubTitle = styled.Text`
  font-family: ${({ theme: { fonts } }) => fonts.tertiary.regular};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.xxl};
  color: ${({ theme: { colors } }) => colors.text};
  line-height: ${({ theme: { fontSizes } }) => fontSizes.xxl};
  height: ${({ theme: { fontSizes } }) => fontSizes.xxl};
`;
