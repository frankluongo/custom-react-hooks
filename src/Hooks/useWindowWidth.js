import { useEffect, useState } from "react"

export const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(getWidth);

  function getWidth() {
    const handleResize = () => {
      setWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }


  return {
    width
  }
}