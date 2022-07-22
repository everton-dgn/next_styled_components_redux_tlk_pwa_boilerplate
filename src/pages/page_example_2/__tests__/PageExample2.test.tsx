import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithProviders } from 'testHelpers/providers'
import { mockedPush, mockedPrefetch } from 'testHelpers/mocks'
import PageExample2 from '../index.page'

describe('[Page] PageExample2', () => {
  it('should go to another page by clicking the button', async () => {
    const user = userEvent.setup({ delay: null })

    renderWithProviders(<PageExample2 />)

    const btn = screen.getByRole('button', { name: 'Return' })

    await user.click(btn)
    await user.hover(btn)

    expect(mockedPush).toHaveBeenCalledTimes(1)
    expect(mockedPrefetch).toHaveBeenCalledTimes(1)
    expect(mockedPush).toHaveBeenCalledWith('/')
    expect(mockedPrefetch).toHaveBeenCalledWith('/')
  })
})
