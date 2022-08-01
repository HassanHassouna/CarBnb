import ListApiService from "../../services/list-api-service"
import actionTypes from "./constants"

const fetchVehiclesRequestAction = () => ({
  type: actionTypes.FETCH_VEHICLES_REQUEST,
})

const fetchVehiclesSuccessAction = (vehicles) => ({
  type: actionTypes.FETCH_VEHICLES_SUCCESS,
  vehicles,
})

const fetchVehiclesFailureAction = () => ({
  type: actionTypes.FETCH_VEHICLES_FAILURE,
})

export const fetchVehicles = () => {
  return async (dispatch) => {
    dispatch(fetchVehiclesRequestAction())
    try {
      const vehicles = await ListApiService.getCarsList()
      const vehiclesById = vehicles.reduce((acc, vehicle) => {
        acc[vehicle.id] = vehicle
        return acc
      }, {})
      dispatch(fetchVehiclesSuccessAction(vehiclesById))
    } catch (error) {
      dispatch(fetchVehiclesFailureAction())
    }
  }
}
