import { useCallback, useEffect, useState } from 'react'
import { UseAnimationRenderType } from './types'

export const useAnimationRender = ({
  timeMilSecToRemoveComponent = 0
}): UseAnimationRenderType => {
  const [isRenderComponent, setIsRenderComponent] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(
    function changeComponentVisibility() {
      isRenderComponent && setIsVisible(true)
    },
    [isRenderComponent]
  )

  const changeVisibility = useCallback(() => {
    setIsVisible(false)
    setTimeout(() => setIsRenderComponent(false), timeMilSecToRemoveComponent)
  }, [timeMilSecToRemoveComponent])

  const changeStateComponent = useCallback(() => {
    setIsRenderComponent(true)
    isRenderComponent && changeVisibility()
  }, [changeVisibility, isRenderComponent])

  return {
    isRenderComponent,
    isVisible,
    changeStateComponent
  }
}
