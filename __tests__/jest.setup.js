import '@testing-library/jest-native/extend-expect';
import 'jest-styled-components';
import 'jest-styled-components/native';

import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock';
import { XMLHttpRequest } from 'xmlhttprequest';

jest.useFakeTimers();

jest.mock('../.storybook', () => null);

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

jest.mock('react-native-safe-area-context', () => mockSafeAreaContext);

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

global.self = global;
global.fetch = jest.fn;

jest.mock('../src/server');
global.XMLHttpRequest = XMLHttpRequest;

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({
    navigate: jest.fn(),
    goBack: jest.fn()
  }),
  useRoute: () => ({
    params: {
      id: 1
    }
  })
}));
