import { renderHook, act } from '@testing-library/react-hooks'

import useCounter from '../../hooks/useCounter'

describe('should use counter', () => {
  it('check state in hooks', () => {
    const { result } = renderHook(() => useCounter())
    expect(result.current.count).toBe(0)
    expect(typeof result.current.increment).toBe('function')
  })

  it('increment count', () => {
    const { result } = renderHook(() => useCounter())
    act(() => {
      result.current.increment()
    })
    expect(result.current.count).toBe(1)
  })

  it('should reset counter to updated initial value', () => {
    let initialValue = 0
    const { result, rerender } = renderHook(() => useCounter(initialValue))

    initialValue = 10
    rerender()

    act(() => {
      result.current.reset()
    })

    expect(result.current.count).toBe(10)
  })
})
