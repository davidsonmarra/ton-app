import React from 'react';
import styled from 'styled-components/native';

interface ImageCardSelectProps {
  img: string;
  isSelected: boolean;
  handlePressCard: (img: string) => void;
}

export const ImageCardSelect = ({ img, isSelected, handlePressCard }: ImageCardSelectProps) => {
  return (
    <StyledContainer
      style={{
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 4
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9
      }}
      isSelected={isSelected}
      onPress={() => handlePressCard(img)}
    >
      <StyledImage source={{ uri: img }} resizeMode='contain' />
    </StyledContainer>
  );
};

const StyledContainer = styled.TouchableOpacity<{ isSelected: boolean }>`
  padding: 12px;
  width: ${250 / 3.5}px;
  height: ${350 / 3.5}px;
  background-color: ${({ theme: { colors } }) => colors.secondary};

  border-radius: 8px;
  border: 2px solid
    ${({ theme: { colors }, isSelected }) => (isSelected ? colors.primary : 'transparent')};
`;

const StyledImage = styled.Image`
  flex: 1;
`;
