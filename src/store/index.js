import { useReducer, useContext, createContext } from "react";
import { reducer, initialState } from "./reducer";
export const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const combineReducer = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={combineReducer}>
      {children}
    </StateContext.Provider>
  );
};

export const useStore = () => useContext(StateContext);

export * from "./selector";
