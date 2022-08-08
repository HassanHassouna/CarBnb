import ListApiService from '../../services/list-api-service';
import actionTypes from './constants';

const removeVehicleRequestAction = () => ({
  type: actionTypes.REMOVE_VEHICLE_REQUEST,
});

const removeVehicleSuccessAction = (vehicleId) => ({
  type: actionTypes.REMOVE_VEHICLE_SUCCESS,
  vehicleId,
});

const removeVehicleFailureAction = () => ({
  type: actionTypes.REMOVE_VEHICLE_FAILURE,
});

export const removeVehicle = (id) => {
  return async (dispatch) => {
    dispatch(removeVehicleRequestAction());
    try {
      const response = await ListApiService.deleteCar(id);
      dispatch(removeVehicleSuccessAction(id));
    } catch (error) {
      dispatch(removeVehicleFailureAction());
    }
  };
};
