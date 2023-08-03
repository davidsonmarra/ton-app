import { ImageCardSelect } from '../../src/components';
import { matchSnapshotWithProviders, render, fireEvent } from '../test-utils';

const mockHandlePressCard = jest.fn();

const props = (img = 'url1', isSelected = false, handlePressCard = mockHandlePressCard) => ({
  img,
  isSelected,
  handlePressCard
});

describe('ImageCardSelect', () => {
  it('should match a snapshot', () => {
    matchSnapshotWithProviders(<ImageCardSelect {...props()} />);
  });

  it('should call function when press button card', () => {
    const { getByTestId } = render(<ImageCardSelect {...props()} />);
    const cardButton = getByTestId('image-card-select-button');
    fireEvent.press(cardButton);
    expect(mockHandlePressCard).toHaveBeenCalledWith('url1');
  });
});
