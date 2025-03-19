import React, { createContext, useReducer } from "react";
const initialState = {
  isMenuOpen: false,
};

// Reducer Function
const globalReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_NAV":
      return {
        ...state,
        isMenuOpen: state.isMenuOpen === false ? true : false,
      };
    default:
      return state;
  }
};

// eslint-disable-next-line react-refresh/only-export-components
export const GlobalContext = createContext();

// Context Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
