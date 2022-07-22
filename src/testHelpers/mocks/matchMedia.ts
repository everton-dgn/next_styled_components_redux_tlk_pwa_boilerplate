export const size = (size: number) => {
  window.matchMedia = jest.fn().mockImplementation(query => ({
    matches: query === `(min-width: ${size}px)`,
    media: '',
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    dispatchEvent: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn()
  }))
}

const object = {
  writable: true,
  value: jest.fn().mockImplementation(() => ({}))
}

Object.defineProperty(window, 'matchMedia', object)
