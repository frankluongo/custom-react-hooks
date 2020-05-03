import React, { createContext, useContext } from "react";
import { useToggle } from "../Hooks";

const defaultValues = {
  isMenuOpen: false,
};

export const AppContext = createContext(defaultValues);

export const PageWrapper = ({ children }) => {
  const { isToggled, toggleFn } = useToggle(false);

  return (
    <AppContext.Provider
      value={{
        isMenuOpen: isToggled,
        toggleMenu: toggleFn,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppState = () => useContext(AppContext);
