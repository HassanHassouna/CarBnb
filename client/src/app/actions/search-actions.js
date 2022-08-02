import actionTypes from "./constants";
import ListApiService from "../../services/list-api-service";

const searchRequestAction = () => ({
  type: actionTypes.SEARCH_VEHICLES_REQUEST,
});

const searchSuccessAction = (searchData) => ({
  type: actionTypes.SEARCH_VEHICLES_SUCCESS,
  searchData,
});

const searchFailureAction = () => ({
  type: actionTypes.SEARCH_VEHICLES_FAILURE,
});

const setSortHTLAction = () => ({
  type: actionTypes.SET_SORT_HTL,
});

const setSortLTHAction = () => ({
  type: actionTypes.SET_SORT_LTH,
});

const setPriceRangeAction = (range) => ({
  type: actionTypes.SET_PRICE_RANG,
  range,
});

export const search = (searchData) => {
  console.log("search", searchData);
  return async (dispatch) => {
    dispatch(searchRequestAction());
    try {
      const vehicles = await ListApiService.getSearchResult(searchData);
      console.log("vehicles", vehicles);
      const vehiclesById = vehicles.reduce((acc, vehicle) => {
        acc[vehicle.id] = vehicle;
        return acc;
      }, {});
      console.log("vehiclesById", vehiclesById);
      dispatch(searchSuccessAction(vehiclesById));
    } catch (error) {
      dispatch(searchFailureAction());
    }
  };
};

export const setPriceHTL = () => {
  return (dispatch) => {
    dispatch(setSortHTLAction());
  };
};

export const setPriceLTH = () => {
  return (dispatch) => {
    dispatch(setSortLTHAction());
  };
};

export const setPriceRange = (range) => {
  return (dispatch) => {
    dispatch(setPriceRangeAction(range));
  };
};
