import React from 'react'
import { useCookie } from '../../Hooks'

const Cookie = () => {
  const { stateCookie, setStateCookie } = useCookie("theme")
  return (
    <div>
      <h1>Theme: {stateCookie || "Unset"}</h1>
      <input type="text" onChange={handleChange} />
    </div>
  )

  function handleChange(e) {
    setStateCookie(e.target.value);
  }
}

export default Cookie
