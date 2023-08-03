import { productDetailsApi } from '../../src/helpers';
import { ProductDetails } from '../../src/presentational';
import { matchSnapshotWithProviders, render } from '../test-utils';

describe('ProductDetails', () => {
  it('should match a snapshot', () => {
    matchSnapshotWithProviders(
      <ProductDetails
        isLoadingApi={false}
        item={productDetailsApi[0]}
        handlePressLeftIcon={jest.fn}
      />
    );
  });

  it('should render a loading indicator', () => {
    const { getByTestId } = render(
      <ProductDetails
        isLoadingApi={true}
        item={productDetailsApi[0]}
        handlePressLeftIcon={jest.fn}
      />
    );
    expect(getByTestId('loading-indicator')).toBeTruthy();
  });

  it('should render a product details', () => {
    const { getByText } = render(
      <ProductDetails
        isLoadingApi={false}
        item={productDetailsApi[0]}
        handlePressLeftIcon={jest.fn}
      />
    );
    expect(getByText(productDetailsApi[0].title)).toBeTruthy();
    expect(getByText(productDetailsApi[0].subTitle)).toBeTruthy();
  });
});
