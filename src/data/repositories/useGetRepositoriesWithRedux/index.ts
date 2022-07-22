import { useExampleAsyncAdapter } from 'infra/store/exampleAsyncSlice/useAdapter'
import { useIsLoading } from 'infra/store/isLoading/useAdapter'
import { getClient } from 'infra/http'
import {
  GetClientRepositoriesType,
  UseGetRepositoriesWithReduxType
} from './types'

export const useGetRepositoriesWithRedux =
  (): UseGetRepositoriesWithReduxType => {
    const { setIsLoading } = useIsLoading()
    const { exampleAsyncSlice, setGetRepositories } = useExampleAsyncAdapter()

    const getFetchRepositories = async (user: string): Promise<void> => {
      setIsLoading()
      const { data, error }: GetClientRepositoriesType = await getClient(
        `/users/${user}/repos`
      )
      setGetRepositories({ data, error })
      setIsLoading()
    }

    return { exampleAsyncSlice, getFetchRepositories }
  }
