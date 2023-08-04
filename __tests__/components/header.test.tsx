import { Header } from '../../src/components';
import { matchSnapshotWithProviders, render, fireEvent } from '../test-utils';

const mockHandlePressLeftIcon = jest.fn();
const mockHandlePressRightIcon = jest.fn();

const props = (
  title?: string,
  leftIcon = '',
  rightIcon = '',
  handlePressLeftIcon = mockHandlePressLeftIcon,
  handlePressRightIcon = mockHandlePressRightIcon
) => ({
  title,
  leftIcon,
  rightIcon,
  handlePressLeftIcon,
  handlePressRightIcon
});

describe('Header', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should match a snapshot', () => {
    matchSnapshotWithProviders(<Header {...props()} />);
  });

  it('should render correctly with no icons', () => {
    const { queryByTestId } = render(<Header {...props()} />);
    expect(queryByTestId('header-left-icon')).toBeNull();
    expect(queryByTestId('header-right-icon')).toBeNull();
  });

  it('should render correctly with left icon and call function on press', () => {
    const { getByTestId } = render(<Header {...props('title', 'arrow-left')} />);
    expect(getByTestId('header-left-icon')).toBeTruthy();
    fireEvent.press(getByTestId('header-left-button'));
    expect(mockHandlePressLeftIcon).toHaveBeenCalledTimes(1);
  });

  it('should render correctly with right icon and call function on press', () => {
    const { getByTestId } = render(<Header {...props('title', '', 'arrow-right')} />);
    expect(getByTestId('header-right-icon')).toBeTruthy();
    fireEvent.press(getByTestId('header-button-right'));
    expect(mockHandlePressRightIcon).toHaveBeenCalledTimes(1);
  });

  it('should render correctly with both icons and call functions on press', () => {
    const { getByTestId } = render(<Header {...props('title', 'arrow-left', 'arrow-right')} />);
    expect(getByTestId('header-left-icon')).toBeTruthy();
    expect(getByTestId('header-right-icon')).toBeTruthy();
    fireEvent.press(getByTestId('header-left-button'));
    fireEvent.press(getByTestId('header-button-right'));
    expect(mockHandlePressLeftIcon).toHaveBeenCalledTimes(1);
    expect(mockHandlePressRightIcon).toHaveBeenCalledTimes(1);
  });
});
