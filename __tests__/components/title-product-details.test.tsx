import { TitleProductDetails } from '../../src/components';
import { matchSnapshotWithProviders, render, fireEvent } from '../test-utils';

const props = (title = 'title', subTitle = 'subTitle') => ({
  title,
  subTitle
});

describe('ImageDetails', () => {
  beforeAll(() => {
    jest.mock('react-native/Libraries/Utilities/Platform', () => {
      const Platform = jest.requireActual('react-native/Libraries/Utilities/Platform');
      Platform.OS = 'android';
      return Platform;
    });
  });

  it('should match a snapshot', () => {
    matchSnapshotWithProviders(<TitleProductDetails {...props()} />);
  });

  it('should render correctly with Platform equals android', () => {
    const { getByText } = render(<TitleProductDetails {...props()} />);
    expect(getByText(props().title).props.bottomPadding).toEqual(36);
  });
});
