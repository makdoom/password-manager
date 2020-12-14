import React, { createContext, useReducer } from "react";

import { SIGNUP_SUCCESS, LOGIN_SUCCESS } from "../reducers/types";
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

  const login = () => {
    dispatch({
      type: LOGIN_SUCCESS,
    });
  };
  const signup = () => {
    dispatch({
      type: SIGNUP_SUCCESS,
    });
  };

  return (
    <UserContext.Provider value={{ globalUser: state, login, signup }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
