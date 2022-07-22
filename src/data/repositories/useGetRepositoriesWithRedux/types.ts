export type GetClientRepositoriesType = {
  data: { name: string }[]
  error: string
}

export type UseGetRepositoriesWithReduxType = {
  exampleAsyncSlice: GetClientRepositoriesType
  getFetchRepositories: (user: string) => Promise<void>
}
