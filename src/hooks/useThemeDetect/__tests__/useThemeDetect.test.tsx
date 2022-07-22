import { act } from '@testing-library/react'
import { renderHooksProvider } from 'testHelpers/providers'
import { useThemeDetect } from '..'
import * as store from 'infra/store/theme/useAdapter'

const mockedUseExampleTheme = {
  isPrefersColorSchemeDark: true,
  isPrefersColorScheme: true,
  isDarkMode: true,
  setIsPrefersColorSchemeDark: jest.fn(),
  setChangeTheme: jest.fn(),
  setIsPrefersColorScheme: jest.fn()
}

describe('[Hooks] useThemeDetect', () => {
  it('should switch theme between dark and light when calling setTheme and toggle data-theme attribute in body', () => {
    const { result } = renderHooksProvider(() => useThemeDetect())

    expect(result.current.showThemeToSelect).toBe('dark')
    expect(document.body.dataset.theme).toBe('light')

    act(() => {
      result.current.setTheme()
    })

    expect(result.current.showThemeToSelect).toBe('light')
    expect(document.body.dataset.theme).toBe('dark')

    act(() => {
      result.current.setTheme()
    })

    expect(result.current.showThemeToSelect).toBe('dark')
    expect(document.body.dataset.theme).toBe('light')
  })

  it('should start in light theme with data-theme="light" attribute in body, if isPrefersColorSchemeDark is false and return dark text in showThemeToSelect', () => {
    jest.spyOn(store, 'useTheme').mockReturnValue({
      ...mockedUseExampleTheme,
      isPrefersColorSchemeDark: false,
      isDarkMode: false
    })

    const { result } = renderHooksProvider(() => useThemeDetect())

    expect(result.current.showThemeToSelect).toBe('dark')
    expect(document.body.dataset.theme).toBe('light')
  })

  it('should start in dark theme with data-theme="dark" attribute in body, if isPrefersColorSchemeDark is true and return light text in showThemeToSelect', () => {
    jest.spyOn(store, 'useTheme').mockReturnValue({
      ...mockedUseExampleTheme,
      isDarkMode: false
    })

    const { result } = renderHooksProvider(() => useThemeDetect())

    expect(result.current.showThemeToSelect).toBe('light')
    expect(document.body.dataset.theme).toBe('dark')
  })

  it('should switch theme between dark and light when isPrefersColorScheme is true when calling setTheme and toggle data-theme attribute in body', () => {
    jest.spyOn(store, 'useTheme').mockReturnValue(mockedUseExampleTheme)

    const { result } = renderHooksProvider(() => useThemeDetect())

    act(() => {
      result.current.setTheme()
    })

    expect(result.current.showThemeToSelect).toBe('light')
    expect(document.body.dataset.theme).toBe('dark')
  })
})
