import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styled, { useTheme } from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface HeaderProps {
  title: string;
  leftIcon?: string;
  rightIcon?: string;
  handlePressLeftIcon?: () => void;
  handlePressRightIcon?: () => void;
}

export const Header = ({
  title,
  leftIcon,
  rightIcon,
  handlePressLeftIcon,
  handlePressRightIcon
}: HeaderProps) => {
  const { colors } = useTheme();
  const { top } = useSafeAreaInsets();

  return (
    <StyledContainer topInset={top}>
      <StyledButtonIcon onPress={handlePressLeftIcon} disabled={!leftIcon}>
        {leftIcon && <Icon name={leftIcon} color={colors.secondary} size={24} />}
      </StyledButtonIcon>
      <StyledTitle>{title}</StyledTitle>
      <StyledButtonIcon onPress={handlePressRightIcon} disabled={!rightIcon}>
        {rightIcon && <Icon name={rightIcon} color={colors.secondary} size={24} />}
      </StyledButtonIcon>
    </StyledContainer>
  );
};

const StyledContainer = styled.View<{ topInset: number }>`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${({ topInset }) => topInset + 12}px 12px 12px;
  background-color: ${({ theme: { colors } }) => colors.primary};
`;

const StyledTitle = styled.Text`
  text-align: center;
  font-family: ${({ theme: { fonts } }) => fonts.primary.bold};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.lg};
  color: ${({ theme: { colors } }) => colors.secondary};
`;

const StyledButtonIcon = styled.TouchableOpacity`
  width: 32px;
`;
