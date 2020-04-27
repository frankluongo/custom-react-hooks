import { useEffect, useState } from "react"
import Cookies from "js-cookie"

export const useCookie = (key = "theme") => {
  const [stateCookie, setStateCookie] = useState(Cookies.get(key))

  useEffect(() => {
    Cookies.set(key, stateCookie)
  }, [stateCookie, key])

  return {
    stateCookie,
    setStateCookie
  }
}

