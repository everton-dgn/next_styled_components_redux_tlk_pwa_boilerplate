import { screen } from '@testing-library/react'
import { renderWithProviders } from 'utils'
import ErrorBoundary from '..'

const ChildWithError = () => {
  throw new Error()
}

describe('[Components] ErrorBoundary', () => {
  let spy: jest.SpyInstance<void, [message?: any, ...optionalParams: any[]]>
  beforeAll(() => {
    spy = jest.spyOn(console, 'error').mockImplementation(() => {})
  })
  afterAll(() => spy.mockRestore())

  test('should render an error message', () => {
    renderWithProviders(
      <ErrorBoundary>
        <ChildWithError />
      </ErrorBoundary>
    )

    expect(screen.queryByText('Algo deu errado.')).toBeInTheDocument()
  })
})
