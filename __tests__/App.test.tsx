import App from '../App';
import { matchSnapshotWithProviders, act } from './test-utils';

jest.mock('../.storybook');

describe('App', () => {
  it('should match a snapshot', async () => {
    await act(() => {
      matchSnapshotWithProviders(<App />);
    });
  });
});
