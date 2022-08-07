import actionTypes from "../../actions/constants/index";
import vehiclesReducer from "../vehicles-reducers";
describe("vehicleReducers", () => {
  const vehiclesInitState = {
    myVehicles: {},
    mainPageVehicles: {},
  };

  const VEHICLE_1 = {
    brand: "JEEP",
    id: 2,
    location: "New York, USA",
    model: "Wrangler",
  };
  const VEHICLE_2 = {
    brand: "Seat",
    id: 3,
    location: "Tel Aviv, Israel",
    model: "Ibiza",
  };

  const VEHICLES_OBJ = { [VEHICLE_1.id]: VEHICLE_1, [VEHICLE_2.id]: VEHICLE_2 };
  test("should return the initial state", () => {
    expect(vehiclesReducer(undefined, {})).toEqual(vehiclesInitState);
  });

  test("should handle FETCH_VEHICLES_SUCCESS", () => {
    expect(
      vehiclesReducer(vehiclesInitState, {
        type: actionTypes.FETCH_VEHICLES_SUCCESS,
        vehicles: VEHICLES_OBJ,
      })
    ).toEqual({
      ...vehiclesInitState,
      myVehicles: VEHICLES_OBJ,
    });
  });

  test("should handle ADD_VEHICLE_SUCCESS", () => {
    const previousState = { ...vehiclesInitState, myVehicles: VEHICLES_OBJ };
    const VEHICLE_TO_ADD = {
      brand: "Tesla",
      id: 5,
      location: "Tel Aviv, Israel",
      model: "Y",
    };
    expect(
      vehiclesReducer(previousState, {
        type: actionTypes.ADD_VEHICLE_SUCCESS,
        vehicle: VEHICLE_TO_ADD,
      })
    ).toEqual({
      ...previousState,
      myVehicles: {
        ...previousState.myVehicles,
        [VEHICLE_TO_ADD.id]: VEHICLE_TO_ADD,
      },
    });
  });
});
