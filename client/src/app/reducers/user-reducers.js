import actionTypes from "../actions/constants";

const initialState = {
  isLoggedIn: false,
  userObject: {},
  reservations: {},
  orders: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_MY_RESERVATIONS_SUCCESS: {
      const { reservations } = action;
      return { ...state, reservations: reservations };
    }

    case actionTypes.LOGIN_USER_SUCCESS: {
      const { userObject } = action;
      return { ...state, userObject: userObject, isLoggedIn: true };
    }

    default:
      return state;
  }
};

export default userReducer;
