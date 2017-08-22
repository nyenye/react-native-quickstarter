jest.mock('ScrollView', () => jest.genMockFromModule('ScrollView'))

jest.mock('Linking', () => ({
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  openURL: jest.genMockFn().mockReturnValue(Promise.resolve()),
  canOpenURL: jest.genMockFn().mockReturnValue(Promise.resolve()),
  getInitialURL: jest.genMockFn().mockReturnValue(Promise.resolve())
}))
