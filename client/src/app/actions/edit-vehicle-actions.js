import ListApiService from '../../services/list-api-service';
import actionTypes from './constants';

const editVehicleRequestAction = () => ({
  type: actionTypes.EDIT_VEHICLE_REQUEST,
});

const editVehicleSuccessAction = (vehicleData) => ({
  type: actionTypes.EDIT_VEHICLE_SUCCESS,
  vehicle: vehicleData,
});

const editVehicleFailureAction = () => ({
  type: actionTypes.EDIT_VEHICLE_FAILURE,
});

export const editVehicle = (vehicleData) => {
  return async (dispatch) => {
    dispatch(editVehicleRequestAction());
    try {
      const vehicle = await ListApiService.editVehicle(vehicleData);
      dispatch(editVehicleSuccessAction(vehicle));
      return vehicle;
    } catch (error) {
      console.error(error.message);
      dispatch(editVehicleFailureAction());
    }
  };
};
