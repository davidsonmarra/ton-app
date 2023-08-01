import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import { Header } from '../components';

export const Home = () => {
  return (
    <StyledContainer>
      <Header title='Maquininhas' />
    </StyledContainer>
  );
};

export const StyledContainer = styled(SafeAreaView).attrs({
  edges: ['right', 'bottom', 'left']
})`
  flex: 1;
  background-color: ${({ theme: { colors } }) => colors.background};
`;
