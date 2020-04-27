import { useLayoutEffect } from "react"


export const useScrollFreeze = () => {
  const freezeOpts = {}
  
  useLayoutEffect(setScrollFreeze, [])
  
  function setScrollFreeze() {
    freezeOpts.original = window.getComputedStyle(document.body).overflow
    document.body.style.overflow = 'hidden';
    return scrollFreezeCleanup
  }

  function scrollFreezeCleanup() {
    document.body.style.overflow = freezeOpts.original;
  }
}
