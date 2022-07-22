import { useCallback } from 'react'
import { useRenderingByWindowSize } from 'hooks'
import * as S from './styles'

const RenderTextByBreakpoint = () => {
  const { windowSize } = useRenderingByWindowSize()

  const renderTextByBreakpoint: () => string = useCallback(() => {
    if (windowSize.lg) return 'Breakpoint Desktop, "lg": 1024px - ∞px'
    if (windowSize.md) return 'Breakpoint Tablet, "md": 600px - 1023px'
    return 'Breakpoint Mobile, "sm": 0px - 599px'
  }, [windowSize.lg, windowSize.md])

  return (
    <S.Wrapper>
      <h2>
        Resize the browser window to view the rendered text for each breakpoint!
      </h2>
      <br />
      <h3>{renderTextByBreakpoint()}</h3>
    </S.Wrapper>
  )
}

export default RenderTextByBreakpoint
