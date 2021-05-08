import { useCallback, useState } from 'react'

export type UseToggle = (defaultState: boolean) => [boolean, (nextValue?: boolean) => void]

const useToggle: UseToggle = defaultState => {
  const [state, setState] = useState(defaultState)

  const toggle = useCallback((nextValue?: boolean) => {
    if (typeof nextValue !== 'undefined') {
      setState(!!nextValue)
      return
    }
    setState(newValue => !newValue)
  }, [setState])

  return [state, toggle]
}

export default useToggle
