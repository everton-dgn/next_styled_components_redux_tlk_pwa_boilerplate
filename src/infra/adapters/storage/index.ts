import { StorageAdapterType } from './types'

export const storageAdapter = (
  storage?: 'sessionStorage'
): StorageAdapterType => {
  const isClientBrowser = typeof window === 'object'
  const setStorageLocation = () => {
    return isClientBrowser && storage === 'sessionStorage'
      ? sessionStorage
      : localStorage
  }

  const getStorageAdapter = <T>(
    key: string,
    initialValue?: T
  ): T | undefined => {
    const hasStorage = setStorageLocation().getItem(key)
    const hasValueValid = () => {
      if (!hasStorage) return
      return hasStorage === 'undefined' ? undefined : JSON.parse(hasStorage)
    }
    return (hasValueValid() as T) ?? initialValue
  }

  const setStorageAdapter = (key: string, value: any): void => {
    setStorageLocation().setItem(key, JSON.stringify(value))
  }

  const removeItemOfStorageAdapter = (key: string): void => {
    setStorageLocation().removeItem(key)
  }

  const clearStorageAdapter = (): void => setStorageLocation().clear()

  return {
    getStorageAdapter,
    setStorageAdapter,
    removeItemOfStorageAdapter,
    clearStorageAdapter
  }
}
