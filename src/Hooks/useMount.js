import { useEffect } from "react"

export const useMount = (fn) => {
  useEffect(fn, []);
}

export const useUnmount = (fn) => {
  useEffect(() => {
    return fn;
  });
}