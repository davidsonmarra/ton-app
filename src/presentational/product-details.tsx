import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import { ProductDetailsDTO } from '../@types';
import { Header, ImageDetails, PriceDetails, TitleProductDetails } from '../components';
import { BenefitItemDetails } from '../components';
import { Button } from '../components';

interface ProductDetailsProps {
  isLoadingApi: boolean;
  item: ProductDetailsDTO;
  handlePressLeftIcon: () => void;
  bottomInset: number;
}

export const ProductDetails = ({
  isLoadingApi,
  item,
  handlePressLeftIcon,
  bottomInset
}: ProductDetailsProps) => (
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
          <StyledSection />
          <ImageDetails images={item.images} />
          <StyledSection>
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
          </StyledSection>
        </StyledContent>
        <StyledButtonContainer bottomInset={bottomInset}>
          <Button label='Comprar' />
        </StyledButtonContainer>
      </>
    ) : (
      <>
        <Header title='' leftIcon='arrow-back' handlePressLeftIcon={handlePressLeftIcon} />
        <StyledLoading testID='loading-indicator' size='large' />
      </>
    )}
  </StyledContainer>
);

const StyledContainer = styled(SafeAreaView).attrs({
  edges: ['right', 'bottom', 'left']
})`
  flex: 1;
  background-color: ${({ theme: { colors } }) => colors.background};
`;

const StyledContent = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingTop: 24,
    paddingHorizontal: 24,
    paddingBottom: 32
  }
})``;

const StyledSection = styled.View`
  margin-top: 24px;
`;

const StyledPriceDetailsContainer = styled.View`
  margin: 24px auto;
`;

const StyledButtonContainer = styled.View<{ bottomInset: number }>`
  width: 100%;
  position: absolute;
  bottom: ${({ bottomInset }) => bottomInset}px;
  padding: 0 24px 12px;
  background-color: ${({ theme: { colors } }) => colors.background};
`;

const StyledLoading = styled.ActivityIndicator.attrs(({ theme: { colors } }) => ({
  color: colors.primary
}))`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme: { colors } }) => colors.background};
`;
