import { productDetailsApi } from '../../../__mocks__';
import { ProductDetailsScreen } from '../../../src/routes/screens';
import { matchSnapshotWithProviders, render, act, waitFor, fireEvent } from '../../test-utils';

const mockFetch = jest.fn().mockResolvedValue({
  data: productDetailsApi[0]
});

jest.mock('../../../src/global/services', () => ({
  api: {
    get: async () => mockFetch()
  }
}));

const mockGoBack = jest.fn();
jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({
    navigate: jest.fn(),
    goBack: mockGoBack
  }),
  useRoute: () => ({
    params: {
      id: 1
    }
  })
}));

describe('ProductDetailsScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should match a snapshot', async () => {
    await act(() => {
      matchSnapshotWithProviders(<ProductDetailsScreen />);
    });
  });

  it('should call api', async () => {
    await waitFor(async () => {
      render(<ProductDetailsScreen />);
      await waitFor(() => expect(mockFetch).toHaveBeenCalledTimes(1));
    });
  });

  it('should render a product details', async () => {
    await waitFor(async () => {
      const { findByText } = render(<ProductDetailsScreen />);
      expect(await findByText(productDetailsApi[0].title)).toBeTruthy();
      expect(await findByText(productDetailsApi[0].subTitle)).toBeTruthy();
    });
  });

  it('should press go back on header', async () => {
    await waitFor(async () => {
      const { findByTestId } = render(<ProductDetailsScreen />);
      const goBackButton = await findByTestId('header-left-button');
      expect(mockGoBack).toHaveBeenCalledTimes(0);
      fireEvent.press(goBackButton);
      expect(mockGoBack).toHaveBeenCalledTimes(1);
    });
  });

  it('should back to previous screen when api returns error', async () => {
    mockFetch.mockRejectedValueOnce({ message: 'error' });

    await waitFor(async () => {
      render(<ProductDetailsScreen />);
      expect(mockGoBack).toHaveBeenCalledTimes(1);
    });
  });
});
