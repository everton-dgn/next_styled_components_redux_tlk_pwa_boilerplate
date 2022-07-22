import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithProviders } from 'testHelpers/providers'
import { mockedPush, mockedPrefetch } from 'testHelpers/mocks'
import PageExample3 from '../index.page'
import * as mock from 'pages/page_example_3/mocks/mockedUseExampleAsyncSlice'
import * as store from 'infra/store/isLoading/useAdapter'

let mockedUseExampleAsyncSlice = mock.useExampleAsyncSlice1

jest.mock('data', () => ({
  useGetRepositoriesWithRedux: () => mockedUseExampleAsyncSlice
}))

const verifyCall = jest.spyOn(
  mockedUseExampleAsyncSlice,
  'getFetchRepositories'
)

describe('[Page] PageExample4', () => {
  const user = userEvent.setup({ delay: null })

  afterEach(() => jest.clearAllMocks())

  it('should render list of repositories when clicking "Search Repository" button if user in text field exists and if isLoading is false', async () => {
    renderWithProviders(<PageExample3 />)

    const btn = screen.getByRole('button', { name: /search repositories/i })
    const repositoryListText1 = screen.getByText('example1')
    const repositoryListText2 = screen.getByText('example2')
    const input = screen.getByRole('textbox')

    await user.type(input, 'everton-dgn')
    await user.click(btn)

    expect(verifyCall).toHaveBeenCalledTimes(1)
    expect(repositoryListText1).toBeInTheDocument()
    expect(repositoryListText2).toBeInTheDocument()
  })

  it('should go to another page by clicking the button', async () => {
    renderWithProviders(<PageExample3 />)

    const btn = screen.getByRole('button', { name: 'Return' })

    await user.click(btn)
    await user.hover(btn)

    expect(mockedPush).toHaveBeenCalledTimes(1)
    expect(mockedPrefetch).toHaveBeenCalledTimes(1)
    expect(mockedPush).toHaveBeenCalledWith('/')
    expect(mockedPrefetch).toHaveBeenCalledWith('/')
  })

  it('should render loading when clicking "Search Repository" button while isLoading for true', () => {
    mockedUseExampleAsyncSlice = mock.useExampleAsyncSlice3
    const spy = jest.spyOn(store, 'useIsLoading').mockReturnValue({
      isLoading: true,
      setIsLoading: jest.fn()
    })

    renderWithProviders(<PageExample3 />)

    const loading = screen.getByRole('heading', { name: 'loading...' })
    const repositoryListText1 = screen.queryByText('example1')
    const repositoryListText2 = screen.queryByText('example2')

    expect(loading).toBeInTheDocument()
    expect(repositoryListText1).not.toBeInTheDocument()
    expect(repositoryListText2).not.toBeInTheDocument()

    spy.mockRestore()
  })

  it('should render error message to clicking "Search Repository" button if user in text field not exists and if isLoading is false', async () => {
    mockedUseExampleAsyncSlice = mock.useExampleAsyncSlice2

    renderWithProviders(<PageExample3 />)

    const btn = screen.getByRole('button', { name: /search repositories/i })
    const error = screen.getByText(/not found/i)
    const repositoryListText1 = screen.queryByText('example1')
    const repositoryListText2 = screen.queryByText('example2')
    const input = screen.getByRole('textbox')

    await user.type(input, 'everton-dgn')
    await user.click(btn)

    expect(error).toBeInTheDocument()
    expect(verifyCall).toHaveBeenCalledTimes(1)
    expect(repositoryListText1).not.toBeInTheDocument()
    expect(repositoryListText2).not.toBeInTheDocument()
  })

  it('should not take any action if the text input is empty', async () => {
    renderWithProviders(<PageExample3 />)

    const btn = screen.getByRole('button', { name: /search repositories/i })
    const error = screen.getByText(/not found/i)
    const repositoryListText1 = screen.queryByText('example1')
    const repositoryListText2 = screen.queryByText('example2')

    await user.click(btn)

    expect(verifyCall).toHaveBeenCalledTimes(0)
    expect(repositoryListText1).not.toBeInTheDocument()
    expect(repositoryListText2).not.toBeInTheDocument()
    expect(error).toBeInTheDocument()
  })
})
