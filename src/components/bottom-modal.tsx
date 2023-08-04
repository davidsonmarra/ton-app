import React from 'react';
import { ModalProps, View } from 'react-native';
import styled, { useTheme } from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface BottomModalProps extends ModalProps {
  children: React.ReactNode;
  title: string;
}

export const BottomModal = ({ children, title, ...rest }: BottomModalProps) => {
  const { colors } = useTheme();
  const { bottom } = useSafeAreaInsets();

  return (
    <StyledModal {...rest} animated animationType='fade' testID='bottom-modal'>
      <StyledContainer onPress={rest.onRequestClose}>
        <StyledContent bottomInset={bottom}>
          <StyledTitleContainer>
            <View />
            <StyledTitle>{title}</StyledTitle>
            <StyledIconButton onPress={rest.onRequestClose}>
              <Icon name='close' size={32} color={colors.text} />
            </StyledIconButton>
          </StyledTitleContainer>
          {children}
        </StyledContent>
      </StyledContainer>
    </StyledModal>
  );
};

const StyledModal = styled.Modal.attrs({
  transparent: true,
  animationType: 'fade'
})``;

const StyledContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 1
})`
  flex: 1;
  background-color: #00000055;
`;

const StyledContent = styled.View<{ bottomInset: number }>`
  position: absolute;
  width: 100%;
  padding: 24px 24px ${({ bottomInset }) => bottomInset + 12}px;
  bottom: 0;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme: { colors } }) => colors.background};
`;

const StyledTitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  width: 100%;
`;

const StyledTitle = styled.Text`
  font-family: ${({ theme: { fonts } }) => fonts.primary.semiBold};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.xl};
  color: ${({ theme: { colors } }) => colors.text};
`;

const StyledIconButton = styled.TouchableOpacity``;
