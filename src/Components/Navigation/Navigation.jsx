import React from 'react'
import { useAppState } from "../../State"

const Navigation = () => {
  const { isMenuOpen, toggleMenu } = useAppState()
  if (!isMenuOpen) return null;
  return (
    <nav>
      <h1>Hello</h1>
      <button onClick={toggleMenu}>close</button>
    </nav>
  )
}

export default Navigation
