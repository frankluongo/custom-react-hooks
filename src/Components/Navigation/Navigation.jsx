import React from 'react'
import { useAppState } from "../../State"
import { useScrollFreeze } from "../../Hooks"


const NavWrapper = () => {
  const { isMenuOpen, toggleMenu } = useAppState()
  if (!isMenuOpen) return null;
  return (
    <Navigation toggleMenu={toggleMenu} />
  )
}


const Navigation = ({ toggleMenu }) => {
  useScrollFreeze()
  return (
    <nav>
      <h1>Hello</h1>
      <button onClick={toggleMenu}>close</button>
    </nav>
  )
}

export default NavWrapper
