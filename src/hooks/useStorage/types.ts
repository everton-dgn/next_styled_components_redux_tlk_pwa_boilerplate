export type useStorageProps = {
  key: string
  initialValue?: any
  storage?: 'sessionStorage'
}

export type UseStorageType = {
  getStorage: unknown
  setStorageState: (value: any) => void
}
