import { SIGNUP_SUCCESS, LOGIN_SUCCESS } from "./types";

// Reducer
const appReducer = (state, action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      return {
        isAuthenticated: true,
        loginStatus: true,
      };

    case LOGIN_SUCCESS:
      return {
        isAuthenticated: true,
        loginStatus: true,
      };

    default:
      return state;
  }
};

export default appReducer;
