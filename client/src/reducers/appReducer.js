import { SIGNUP_SUCCESS, LOGIN_SUCCESS } from "./types";

// Reducer
export default (state, action) => {
  // console.log(token, user);
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
