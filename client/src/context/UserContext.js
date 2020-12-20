import React, { createContext, useReducer } from "react";

import { SIGNUP_SUCCESS, LOGIN_SUCCESS } from "../reducers/types";
import appReducer from "../reducers/appReducer";

// InitialStata
const initialState = {
  isAuthenticated: false,
  user: {
    id: "",
    name: "",
    email: "",
  },
};

// Create Context
export const UserContext = createContext(initialState);

// Provider Component
const UserProvider = ({ children }) => {
  // Reducer
  const [state, dispatch] = useReducer(appReducer, initialState);

  const login = (user) => {
    dispatch({
      type: LOGIN_SUCCESS,
      payload: user,
    });
  };
  const signup = (newUser) => {
    dispatch({
      type: SIGNUP_SUCCESS,
      payload: newUser,
    });
  };

  return (
    <UserContext.Provider value={{ globalUser: state, login, signup }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
