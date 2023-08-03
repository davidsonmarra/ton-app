import { Button } from '../../src/components';
import { matchSnapshotWithProviders, render, fireEvent } from '../test-utils';

const mockOnPress = jest.fn();

const props = (label = 'Label', onPress = mockOnPress) => ({
  label,
  onPress
});

describe('ImageDetails', () => {
  it('should match a snapshot', () => {
    matchSnapshotWithProviders(<Button {...props()} />);
  });

  it('should call onPress function', () => {
    const { getByText } = render(<Button {...props()} />);
    const button = getByText('Label');
    expect(mockOnPress).not.toHaveBeenCalled();
    fireEvent.press(button);
    expect(mockOnPress).toHaveBeenCalled();
  });
});
