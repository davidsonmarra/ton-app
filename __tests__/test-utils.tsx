import { render } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';
import renderer from 'react-test-renderer';

import { theme } from '../src/global/styles';
import { SafeAreaProvider } from 'react-native-safe-area-context';

interface AllThemeProvidersProps {
  children: React.ReactElement;
}

const AllTheProviders = ({ children }: AllThemeProvidersProps) => (
  <ThemeProvider theme={theme}>
    <SafeAreaProvider>{children}</SafeAreaProvider>
  </ThemeProvider>
);

const customRender = (ui: React.ReactElement, options = {}) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export const matchSnapshotWithProviders = (component: React.ReactElement) => {
  const tree = renderer.create(<AllTheProviders>{component}</AllTheProviders>).toJSON();
  expect(tree).toMatchSnapshot();
};

export * from '@testing-library/react-native';

export { customRender as render };
