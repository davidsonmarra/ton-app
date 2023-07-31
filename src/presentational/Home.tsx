import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Home = () => {
  return <StyledContainer />;
};

export const StyledContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme: { colors } }) => colors.background};
`;
