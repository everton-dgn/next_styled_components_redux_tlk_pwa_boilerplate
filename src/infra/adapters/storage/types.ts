export type StorageAdapterType = {
  setStorageAdapter: (key: string, value: any) => void
  getStorageAdapter: <T>(key: string, initialValue?: T) => T | undefined
  removeItemOfStorageAdapter: (key: string) => void
  clearStorageAdapter: () => void
}
