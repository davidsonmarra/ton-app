import { ImageDetails } from '../../src/components';
import { matchSnapshotWithProviders, render, fireEvent } from '../test-utils';

const props = (images = ['url1', 'url2', 'url3']) => ({
  images
});

describe('ImageDetails', () => {
  it('should match a snapshot', () => {
    matchSnapshotWithProviders(<ImageDetails {...props()} />);
  });

  it('should set image correctly on press card', () => {
    const { getAllByTestId, getByTestId } = render(<ImageDetails {...props()} />);
    const image = getByTestId('image');
    const cardButton = getAllByTestId('image-card-select-button');
    expect(image.props.source.uri).toEqual('url1');
    fireEvent.press(cardButton[2]);
    expect(image.props.source.uri).toEqual('url3');
  });
});
