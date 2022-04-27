import { fireEvent, screen } from '@testing-library/react'
import { renderWithProviders } from 'utils'
import PageExample1 from '../index.page'
import { mockedPush, mockedPrefetch } from '__mocks__'

describe('[Page] PageExample1', () => {
  it('should an Home page', () => {
    const { container } = renderWithProviders(<PageExample1 />)
    expect(container).toBeInTheDocument()
  })

  it('should go to another page by clicking the button', () => {
    renderWithProviders(<PageExample1 />)

    const btn = screen.getByRole('button', { name: 'Voltar' })

    fireEvent.click(btn)
    fireEvent.mouseEnter(btn)

    expect(mockedPush).toBeCalledTimes(1)
    expect(mockedPrefetch).toBeCalledTimes(1)
    expect(mockedPush).toHaveBeenCalledWith('/')
    expect(mockedPrefetch).toHaveBeenCalledWith('/')
  })
})