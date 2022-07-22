import { screen } from '@testing-library/react'
import { renderWithProviders } from 'testHelpers/providers'
import CustomError from '../index.page'

describe('[Page] CustomError', () => {
  it('should the following section title: Page not found!', () => {
    renderWithProviders(<CustomError />)
    const titleSection = screen.getByRole('heading', {
      name: 'Page not found!'
    })
    expect(titleSection).toBeInTheDocument()
  })
})
