import { useEffect, useState } from "react";

export const useLocalStorage = (key, initial = null) => {
  const item = window.localStorage.getItem(key);
  const [value, setValue] = useState(item || initial);

  useEffect(() => {
    window.localStorage.setItem(key, value);
  }, [value, key]);

  return {
    value,
    setValue,
  };
};
