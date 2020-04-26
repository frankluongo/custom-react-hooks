import React from 'react'
import { useMount, useUnmount, useToggle } from "../../Hooks"

export const UnMount = () => {
  useMount(() => {
    console.log('mounted');
  })
  useUnmount(() => {
    console.log('unmounted')
  })
  return (
  <div>
    Unmount me
  </div>
  )
}

const Mount = () => {
  const { isToggled, toggleFn } = useToggle();

  return (
    <div>
      <button onClick={toggleFn}>Toggle Mount</button>
      { isToggled && <UnMount />}
    </div>
  )
}

export default Mount
