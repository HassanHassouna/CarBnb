import actionTypes from "../actions/constants"

const initialState = {
  isLoading: false,
  isError: false,
}

const viewReducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_MY_ORD_AND_RES_REQUEST:
    case actionTypes.FETCH_VEHICLES_REQUEST:
    case actionTypes.REMOVE_VEHICLE_REQUEST:
    case actionTypes.SEARCH_VEHICLES_REQUEST:
    case actionTypes.FETCH_VEHICLESHOMEPAGE_REQUEST:
    case actionTypes.LOGIN_USER_REQUEST:
    case actionTypes.ADD_VEHICLE_REQUEST: {
      return { ...state, isLoading: true }
    }

    case actionTypes.FETCH_MY_ORD_AND_RES_SUCCESS:
    case actionTypes.FETCH_VEHICLES_SUCCESS:
    case actionTypes.LOGIN_USER_SUCCESS:
    case actionTypes.REMOVE_VEHICLE_SUCCESS:
    case actionTypes.FETCH_VEHICLESHOMEPAGE_SUCCESS:
    case actionTypes.SEARCH_VEHICLES_SUCCESS:
    case actionTypes.ADD_VEHICLE_SUCCESS: {
      return { ...state, isError: false, isLoading: false }
    }
    
    case actionTypes.FETCH_MY_ORD_AND_RES_FAILURE:
    case actionTypes.SEARCH_VEHICLES_FAILURE:
    case actionTypes.FETCH_VEHICLES_FAILURE:
    case actionTypes.FETCH_VEHICLESHOMEPAGE_FAILURE:
    case actionTypes.REMOVE_VEHICLE_FAILURE:
    case actionTypes.LOGIN_USER_FAILURE:
    case actionTypes.ADD_VEHICLE_FAILURE: {
      return { ...state, isLoading: false, isErorr: true }
    }
    default:
      return state
  }
}

export default viewReducers
