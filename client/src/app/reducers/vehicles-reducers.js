import actionTypes from '../actions/constants';

const initialState = {
  myVehicles: {},
  mainPageVehicles: {},
};

const vehiclesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_VEHICLES_SUCCESS: {
      const { vehicles } = action;
      return { ...state, myVehicles: vehicles, mainPageVehicles: {} };
    }

    case actionTypes.ADD_VEHICLE_SUCCESS: {
      const { vehicle } = action;
      const myVehicles = state.myVehicles;
      return {
        ...state,
        myVehicles: { ...myVehicles, [vehicle.id]: vehicle },
      };
    }

    case actionTypes.REMOVE_VEHICLE_SUCCESS: {
      const { vehicleId } = action;
      const myVehicles = state.myVehicles;
      delete myVehicles[vehicleId];
      return { ...state, myVehicles: { ...myVehicles } };
    }

    case actionTypes.EDIT_VEHICLE_SUCCESS: {
      const { vehicle } = action;
      const myVehicles = state.myVehicles;
      return {
        ...state,
        myVehicles: { ...myVehicles, [vehicle.id]: vehicle },
      };
    }

    case actionTypes.FETCH_VEHICLESHOMEPAGE_SUCCESS: {
      const { vehicles } = action;
      return { ...state, mainPageVehicles: vehicles };
    }

    default:
      return state;
  }
};

export default vehiclesReducer;
