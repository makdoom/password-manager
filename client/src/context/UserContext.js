import React, { createContext, useReducer } from "react";
import appReducer from "../reducers/appReducer";

// InitialStata
const initialState = {
  isAuthenticated: false,
  loginStatus: false,
};

// Create Context
export const UserContext = createContext(initialState);

// Provider Component
const UserProvider = ({ children }) => {
  // Reducer
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <UserContext.Provider value={{ user: state }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
