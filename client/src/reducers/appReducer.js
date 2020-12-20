import { SIGNUP_SUCCESS, LOGIN_SUCCESS } from "./types";

// Reducer
const appReducer = (state, action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      const newUser = action.payload;
      return {
        isAuthenticated: true,
        user: {
          id: newUser._id,
          name: newUser.name,
          email: newUser.email,
        },
      };

    case LOGIN_SUCCESS:
      const user = action.payload;
      return {
        isAuthenticated: true,
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
        },
      };

    default:
      return state;
  }
};

export default appReducer;
