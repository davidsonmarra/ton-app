import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import { ProductDetailsDTO } from '../@types';
import { Header, ImageDetails, PriceDetails, TitleProductDetails } from '../components';
import { BenefitItemDetails } from '../components';

interface ProductDetailsProps {
  isLoadingApi: boolean;
  item: ProductDetailsDTO;
  handlePressLeftIcon: () => void;
}

export const ProductDetails = ({
  isLoadingApi,
  item,
  handlePressLeftIcon
}: ProductDetailsProps) => {
  return (
    <StyledContainer>
      {!isLoadingApi ? (
        <>
          <Header
            title={`${item.title}  ${item.subTitle}`}
            leftIcon='arrow-back'
            handlePressLeftIcon={handlePressLeftIcon}
          />
          <StyledContent>
            <TitleProductDetails title={item.title} subTitle={item.subTitle} />
            <ImageDetails images={item.images} />
            <StyledBenefitsContainer>
              {item.benefits.map((benefit, index) => (
                <BenefitItemDetails
                  key={index}
                  icon={benefit.icon}
                  description={benefit.description}
                />
              ))}
              <StyledPriceDetailsContainer>
                <PriceDetails
                  currentPrice={item.currentPrice}
                  oldPrice={item.oldPrice}
                  installmentsValue={item.installmentsValue}
                  installmentsValueCents={item.installmentsValueCents}
                />
              </StyledPriceDetailsContainer>
            </StyledBenefitsContainer>
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

const StyledContent = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingVertical: 24,
    paddingHorizontal: 24
  }
})``;

const StyledBenefitsContainer = styled.View`
  margin-top: 24px;
`;

const StyledPriceDetailsContainer = styled.View`
  margin: 24px auto;
`;

const StyledLoading = styled.ActivityIndicator.attrs(({ theme: { colors } }) => ({
  color: colors.primary
}))`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
