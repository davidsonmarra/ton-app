import { useState } from 'react';
import styled from 'styled-components/native';
import { ImageCardSelect } from './image-card-select';

interface ImageDetailsProps {
  images: string[];
}

export const ImageDetails = ({ images = [] }: ImageDetailsProps) => {
  const [img, setImg] = useState(images[0]);
  return (
    <>
      <StyledImage source={{ uri: img }} resizeMode='contain' testID='image' />
      <StyledSelectContainer>
        {images.map(item => (
          <ImageCardSelect
            key={item}
            img={item}
            isSelected={img === item}
            handlePressCard={setImg}
          />
        ))}
      </StyledSelectContainer>
    </>
  );
};

const StyledImage = styled.Image`
  width: 250px;
  height: 250px;
  margin: 0 auto 24px;
`;

const StyledSelectContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 250px;
  margin: 0 auto;
`;
