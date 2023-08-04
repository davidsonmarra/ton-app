import App from '../App';
import { productDetailsApi } from '../__mocks__';
import { matchSnapshotWithProviders, act } from './test-utils';

jest.mock('../.storybook');

const fetch: any = async () => ({
  json: async () => productDetailsApi[0]
});

global.fetch = fetch;

describe('App', () => {
  it('should match a snapshot', async () => {
    await act(() => {
      matchSnapshotWithProviders(<App />);
    });
  });
});
