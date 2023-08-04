import { productsApi } from '../../../__mocks__';
import { ProductsListScreen } from '../../../src/routes/screens';
import { matchSnapshotWithProviders, render, act, waitFor, fireEvent } from '../../test-utils';

const mockFetch: any = jest.fn(() => ({
  json: async () => ({ products: productsApi })
}));
global.fetch = mockFetch;

const mockNavigate = jest.fn();
jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({
    navigate: mockNavigate,
    goBack: jest.fn()
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
      matchSnapshotWithProviders(<ProductsListScreen />);
    });
  });

  it('should render list correctly', async () => {
    await waitFor(async () => {
      const { findByText } = render(<ProductsListScreen />);
      expect(await findByText('Maquininha ' + productsApi[0].name)).toBeTruthy();
      expect(await findByText('Maquininha ' + productsApi[1].name)).toBeTruthy();
      expect(await findByText('Maquininha ' + productsApi[2].name)).toBeTruthy();
      expect(await findByText('Maquininha ' + productsApi[3].name)).toBeTruthy();
      expect(await findByText('Maquininha ' + productsApi[4].name)).toBeTruthy();
    });
  });

  it('should navigate to ProductDetailsScreen when click on product', async () => {
    await waitFor(async () => {
      const { findByText } = render(<ProductsListScreen />);
      const product = await findByText('Maquininha ' + productsApi[0].name);
      expect(mockNavigate).not.toHaveBeenCalled();
      fireEvent.press(product);
      expect(mockNavigate).toBeCalled();
    });
  });
});
