import { act } from '@testing-library/react'
import { renderHooksProvider } from 'testHelpers/providers'
import { useAnimationRender } from '..'

describe('[Hooks] useAnimationRender', () => {
  it('should return false', () => {
    const { result } = renderHooksProvider(() =>
      useAnimationRender({ timeMilSecToRemoveComponent: 1 })
    )
    expect(result.current.isRenderComponent).toBeFalsy()
    expect(result.current.isVisible).toBeFalsy()
  })

  it('should toggle state into true and false when changeStateComponent function is called', () => {
    const { result } = renderHooksProvider(() => useAnimationRender({}))

    expect(result.current.isRenderComponent).toBeFalsy()
    expect(result.current.isVisible).toBeFalsy()

    act(() => {
      result.current.changeStateComponent()
    })

    expect(result.current.isRenderComponent).toBeTruthy()
    expect(result.current.isVisible).toBeTruthy()
  })
})
