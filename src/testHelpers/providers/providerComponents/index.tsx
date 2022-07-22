import { render, RenderResult } from '@testing-library/react'
import { ReactNode } from 'react'
import { MainProviders } from 'ui/providers'

type RenderWithProvidersProps = 'light' | 'dark'

export const renderWithProviders = (
  children: ReactNode,
  setTheme?: RenderWithProvidersProps
): RenderResult =>
  render(<MainProviders setTheme={setTheme}>{children}</MainProviders>)
