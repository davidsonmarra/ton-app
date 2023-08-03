import { ExampleScreen } from '../../../src/routes/screens';
import { matchSnapshotWithProviders, render, act } from '../../test-utils';


describe('ProductDetailsScreen', () => {
  it('should match a snapshot', async () => {
    await act(() => {
      matchSnapshotWithProviders(<ExampleScreen />);
    });
  });

  it('should render correctly', () => {
      const { getByText } = render(<ExampleScreen />);
      expect(getByText('Página de Exemplo')).toBeTruthy();
  });
});
