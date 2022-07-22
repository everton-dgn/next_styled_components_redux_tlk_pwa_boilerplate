import { screen } from '@testing-library/react'
import { renderWithProviders } from 'testHelpers/providers'
import ErrorBoundary from '..'

const ChildWithError = () => {
  throw new Error()
}

describe('[Component] ErrorBoundary', () => {
  test('should render an error message', () => {
    const spy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => ({ message: '' }))

    renderWithProviders(
      <ErrorBoundary>
        <ChildWithError />
      </ErrorBoundary>
    )

    expect(screen.getByText('Something went wrong.')).toBeInTheDocument()

    spy.mockRestore()
  })
})
