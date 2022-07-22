import { screen } from '@testing-library/react'
import { renderWithProviders } from 'testHelpers/providers'
import ErrorTemplate from '..'

describe('[Template] Error', () => {
  it('should render a children and a title', () => {
    renderWithProviders(
      <ErrorTemplate>
        <p data-testid="select_template">Test Template</p>
      </ErrorTemplate>
    )

    const title = screen.getByRole('banner')
    const children = screen.getByTestId('select_template')

    expect(children).toBeInTheDocument()
    expect(title).toHaveTextContent('Template Error')
  })
})
