import { useState } from "react"

export const useToggle = (initialValue) => {
 const [isToggled, setToggle] = useState(initialValue)
 function toggleFn() {
      setToggle(prevState => !prevState)
 }
 return {isToggled, toggleFn}
}