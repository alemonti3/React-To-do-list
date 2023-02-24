import { createContext, useReducer } from "react";
import App from "./App";
import { initialState, reducer } from "./store";

export const Context = createContext(null);

const Wrapper = () => {
  return (
    <Context.Provider value={useReducer(reducer, initialState)}>
      <App />
    </Context.Provider>
  );
};

export default Wrapper;
