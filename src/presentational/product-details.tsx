import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import { ProductDetailsDTO } from '../@types';
import { Header, TitleProductDetails } from '../components';

interface ProductDetailsProps {
  isLoadingApi: boolean;
  item: ProductDetailsDTO;
}

export const ProductDetails = ({ isLoadingApi, item }: ProductDetailsProps) => {
  return (
    <StyledContainer>
      {!isLoadingApi ? (
        <>
          <Header title={`${item.title}  ${item.subTitle}`} />
          <StyledContent>
            <TitleProductDetails title={item.title} subTitle={item.subTitle} />
          </StyledContent>
        </>
      ) : (
        <StyledLoading size='large' />
      )}
    </StyledContainer>
  );
};

const StyledContainer = styled(SafeAreaView).attrs({
  edges: ['right', 'bottom', 'left']
})`
  flex: 1;
  background-color: ${({ theme: { colors } }) => colors.background};
`;

const StyledContent = styled.View`
  flex: 1;
  padding: 24px 24px 0;
`;

const StyledLoading = styled.ActivityIndicator.attrs(({ theme: { colors } }) => ({
  color: colors.primary
}))`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
