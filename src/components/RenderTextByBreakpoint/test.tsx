import { screen } from '@testing-library/react'
import T from 'theme'
import { renderWithTheme } from 'utils'
import RenderTextByBreakpoint from '.'

let size: number = T.windowSizes.xs
window.matchMedia = jest.fn().mockImplementation(query => ({
  matches: query === `(min-width: ${size}px)`
}))

describe('[Component] RenderTextByBreakpoint', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<RenderTextByBreakpoint />)
    expect(container).toBeInTheDocument()
  })

  it('should render the text específico para o breakpoint xs', () => {
    renderWithTheme(<RenderTextByBreakpoint />)

    const mobile = screen.queryByText('Breakpoint Mobile, "xs": 0px - 599px')
    expect(mobile).toBeInTheDocument()
  })

  it('should render the text específico para o breakpoint sm', () => {
    size = T.windowSizes.sm
    renderWithTheme(<RenderTextByBreakpoint />)

    const tablet = screen.queryByText('Breakpoint Tablet, "sm": 600px - 1023px')
    expect(tablet).toBeInTheDocument()
  })

  it('should render the text específico para o breakpoint md', () => {
    size = T.windowSizes.md
    renderWithTheme(<RenderTextByBreakpoint />)

    const desktop = screen.queryByText('Breakpoint Desktop, "md": 1024px - ∞px')
    expect(desktop).toBeInTheDocument()
  })
})
