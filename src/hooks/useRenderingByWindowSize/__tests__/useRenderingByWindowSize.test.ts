import { act } from '@testing-library/react'
import { renderHooksProvider } from 'testHelpers/providers'
import { size } from 'testHelpers/mocks'
import { useRenderingByWindowSize } from '..'
import T from 'ui/theme'

describe('[Hooks] useRenderingByWindowSize', () => {
  it('should return xs to screen size up until T.windowSizes.sm', () => {
    size(T.windowSizes.sm)
    const { result } = renderHooksProvider(() => useRenderingByWindowSize())

    act(() => {
      window.dispatchEvent(new Event('resize'))
    })
    expect(result.current.windowSize.sm).toBeTruthy()
  })

  it('should return sm to screen size up until T.windowSizes.md', () => {
    size(T.windowSizes.md)
    const { result } = renderHooksProvider(() => useRenderingByWindowSize())

    act(() => {
      window.dispatchEvent(new Event('resize'))
    })
    expect(result.current.windowSize.md).toBeTruthy()
  })

  it('should return md to screen size up until T.windowSizes.lg', () => {
    size(T.windowSizes.lg)
    const { result } = renderHooksProvider(() => useRenderingByWindowSize())

    act(() => {
      window.dispatchEvent(new Event('resize'))
    })
    expect(result.current.windowSize.lg).toBeTruthy()
  })
})
