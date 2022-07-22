import { useEffect, useLayoutEffect } from 'react'
import { useTheme } from 'infra/store/theme/useAdapter'
import { SetThemeType, UseThemeDetectType } from './types'

export const useThemeDetect = (): UseThemeDetectType => {
  const {
    isPrefersColorSchemeDark,
    isPrefersColorScheme,
    isDarkMode,
    setIsPrefersColorSchemeDark,
    setChangeTheme,
    setIsPrefersColorScheme
  } = useTheme()

  useEffect(
    function setPrefersColorScheme() {
      isPrefersColorScheme && setIsPrefersColorSchemeDark()
    },
    [isPrefersColorScheme, setIsPrefersColorSchemeDark]
  )

  const prefersColorScheme: string = isPrefersColorSchemeDark ? 'dark' : 'light'
  const theme: string = isDarkMode ? 'dark' : 'light'

  const selectedTheme: string = isPrefersColorScheme
    ? prefersColorScheme
    : theme

  const showThemeToSelect: string = selectedTheme === 'dark' ? 'light' : 'dark'

  useLayoutEffect(
    function changeTheme() {
      document.body.dataset.theme = selectedTheme
    },
    [selectedTheme]
  )

  const setTheme = (): SetThemeType => {
    setIsPrefersColorScheme()

    if (isPrefersColorSchemeDark && isPrefersColorScheme) return

    return setChangeTheme()
  }

  return { setTheme, showThemeToSelect }
}
