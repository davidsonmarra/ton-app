module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
  testPathIgnorePatterns: [
    './node_modules',
    './lib/',
    '<rootDir>/__tests__/jest.setup.ts',
    '<rootDir>/__tests__/test-utils.test.tsx'
  ],
  moduleDirectories: ['node_modules', 'utils', 'src'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@?react-native|@react-native-community|@react-navigation)'
  ],
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80
    }
  },
  collectCoverageFrom: ['src/**/*.[jt]s?(x)', '!src/**/*.d.[jt]s?(x)', '!src/@types/**'],
  coverageReporters: ['text', 'lcov', 'clover', 'html'],
  coveragePathIgnorePatterns: ['/node_modules/', 'src/server/'],
  moduleNameMapper: {
    '\\.svg': '<rootDir>/__mocks__/svgMock.js'
  },
  setupFilesAfterEnv: [
    '<rootDir>/__tests__/jest.setup.js',
    '@testing-library/jest-native/extend-expect'
  ],
  modulePathIgnorePatterns: ['node_modules', 'jest-test-results.json']
};
