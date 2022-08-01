import actionTypes from "../actions/constants"

const initialState = {}

const vehiclesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_VEHICLES_SUCCESS: {
      const { vehicles } = action
      return { ...vehicles }
    }

    case actionTypes.ADD_VEHICLE_SUCCESS: {
      const { vehicle } = action
      return { ...state, [vehicle.id]: vehicle }
    }

    case actionTypes.REMOVE_VEHICLE_SUCCESS: {
      const { vehicle } = action
      const vehicles = { ...state }
      delete vehicles[vehicle.id]
      return vehicles
    }

    default:
      return state
  }
}

export default vehiclesReducer
