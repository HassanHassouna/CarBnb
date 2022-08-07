import userReducer from "../user-reducers";
import actionTypes from "../../actions/constants/index";
describe("userReducers", () => {
  const userInitState = {
    isLoggedIn: false,
    userObject: {},
    reservations: {},
    orders: {},
  };
  test("should return the initial state", () => {
    expect(userReducer(undefined, {})).toEqual(userInitState);
  });

  test("should handle LOGIN_USER_SUCCESS", () => {
    const USER_ITEM_TO_ADD = { id: 111, name: "test" };
    expect(
      userReducer(userInitState, {
        type: actionTypes.LOGIN_USER_SUCCESS,
        userObject: USER_ITEM_TO_ADD,
      })
    ).toEqual({
      ...userInitState,
      userObject: USER_ITEM_TO_ADD,
      isLoggedIn: true,
    });
  });

  test("should handle FETCH_MY_ORD_AND_RES_SUCCESS", () => {
    const testOrder = { id: 222, car_id: 444 };
    const testReservation = { id: 333, user_id: 555 };
    expect(
      userReducer(userInitState, {
        type: actionTypes.FETCH_MY_ORD_AND_RES_SUCCESS,
        results: [testOrder, testReservation],
      })
    ).toEqual({
      ...userInitState,
      orders: testOrder,
      reservations: testReservation,
    });
  });
});
