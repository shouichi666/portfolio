import { createContext, useReducer } from "react";
import reducer from "./reducer";

export const AppContext = createContext();

const initialState = {
  item: [],
  id: "",
  height: 0,
};

const AppWapprer = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppWapprer;
