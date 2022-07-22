import { useState } from 'react'
import { storageAdapter } from 'infra/adapters/storage'
import { useStorageProps, UseStorageType } from './types'

export const useStorage = ({
  key,
  initialValue,
  storage
}: useStorageProps): UseStorageType => {
  const { getStorageAdapter, setStorageAdapter } = storageAdapter(storage)
  const [getStorage, setStorage] = useState<unknown>(
    getStorageAdapter(key, initialValue) ?? initialValue
  )

  const setStorageState = (value: any): void => {
    setStorageAdapter(key, value)
    setStorage(value)
  }

  return { getStorage, setStorageState }
}
