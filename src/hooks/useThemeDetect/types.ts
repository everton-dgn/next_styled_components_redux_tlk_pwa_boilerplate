export type SetThemeType = { payload: undefined; type: string } | undefined

export type UseThemeDetectType = {
  setTheme: () => void
  showThemeToSelect: string
}
