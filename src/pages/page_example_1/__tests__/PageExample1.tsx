import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithProviders } from 'testHelpers/providers'
import { mockedPush, mockedPrefetch } from 'testHelpers/mocks'
import PageExample1 from '../index.page'

describe('[Page] PageExample1', () => {
  it('should go to another page by clicking the button', async () => {
    const user = userEvent.setup({ delay: null })

    renderWithProviders(<PageExample1 />)

    const btn = screen.getByRole('button', { name: 'Return' })

    await user.click(btn)
    await user.hover(btn)

    expect(mockedPush).toHaveBeenCalledTimes(1)
    expect(mockedPrefetch).toHaveBeenCalledTimes(1)
    expect(mockedPush).toHaveBeenCalledWith('/')
    expect(mockedPrefetch).toHaveBeenCalledWith('/')
  })
})
