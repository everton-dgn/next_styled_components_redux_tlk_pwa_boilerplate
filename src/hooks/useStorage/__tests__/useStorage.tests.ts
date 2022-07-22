import { act } from '@testing-library/react'
import { renderHooksProvider } from 'testHelpers/providers'
import { useStorage } from '..'

describe('[Hooks] useStorage', () => {
  afterEach(() => {
    localStorage.clear()
    sessionStorage.clear()
  })

  it('should to return the existing value in the storage if it exists and not overwrite with initialValue', () => {
    localStorage.setItem('keyExample', JSON.stringify('prevValue'))
    const { result } = renderHooksProvider(() =>
      useStorage({ key: 'keyExample', initialValue: 'initialValueExample' })
    )
    expect(result.current.getStorage).toBe('prevValue')
  })

  it('should to return initialValue', () => {
    const { result } = renderHooksProvider(() =>
      useStorage({ key: 'keyExample', initialValue: 'initialValueExample' })
    )
    expect(result.current.getStorage).toBe('initialValueExample')
  })

  it('should to return initialValue and after the value of storage', () => {
    const { result } = renderHooksProvider(() =>
      useStorage({ key: 'keyExample', initialValue: 'initialValueExample' })
    )
    expect(result.current.getStorage).toBe('initialValueExample')
    act(() => {
      result.current.setStorageState('valueExample')
    })
    expect(result.current.getStorage).toBe('valueExample')
  })

  it('should to return undefined', () => {
    const { result } = renderHooksProvider(() =>
      useStorage({ key: 'keyExample' })
    )
    expect(result.current.getStorage).toBeUndefined()
  })

  it('should to save data in localStorage', () => {
    const { result } = renderHooksProvider(() =>
      useStorage({ key: 'keyExample' })
    )
    expect(result.current.getStorage).toBeUndefined()
    act(() => {
      result.current.setStorageState('valueExample')
    })
    expect(result.current.getStorage).toBe('valueExample')
  })

  it('should to save data in sessionStorage', () => {
    const { result } = renderHooksProvider(() =>
      useStorage({ key: 'keyExample', storage: 'sessionStorage' })
    )
    expect(result.current.getStorage).toBeUndefined()
    act(() => {
      result.current.setStorageState('valueExample')
    })
    expect(result.current.getStorage).toBe('valueExample')
    expect(JSON.parse(sessionStorage.getItem('keyExample')!)).toBe(
      'valueExample'
    )
  })
})
