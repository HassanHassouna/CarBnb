import searchReducers from "../search-reducers";
import actionTypes from "../../actions/constants/index";
import { SORT_TYPES } from "../reducersConstans";

describe("userReducers", () => {
  const searchInitState = {
    searchedVehicles: [],
    activatedFilters: {
      sort: SORT_TYPES.EMPTY,
      gears: [],
      engines: [],
      brands: [],
      types: [],
      number_of_seats: [],
      minPrice: 0,
      maxPrice: 0,
    },
  };
  const CAR_1 = { id: 111, price_per_day: 100 };
  const CAR_2 = { id: 222, price_per_day: 200 };
  const RES_OBJ = { 1: CAR_1, 2: CAR_2 };
  test("should return the initial state", () => {
    expect(searchReducers(undefined, {})).toEqual(searchInitState);
  });

  test("should handle SEARCH_VEHICLES_SUCCESS", () => {
    expect(
      searchReducers(searchInitState, {
        type: actionTypes.SEARCH_VEHICLES_SUCCESS,
        searchData: RES_OBJ,
      })
    ).toEqual({
      searchedVehicles: Object.values(RES_OBJ),
      activatedFilters: {
        ...searchInitState.activatedFilters,
        minPrice: 100,
        maxPrice: 200,
      },
    });
  });

  test("should handle SET_SORT_LTH", () => {
    expect(
      searchReducers(searchInitState, {
        type: actionTypes.SET_SORT_LTH,
      })
    ).toEqual({
      ...searchInitState,
      activatedFilters: {
        ...searchInitState.activatedFilters,
        sort: SORT_TYPES.LOWER_TO_HIGHER,
      },
    });
  });

  test("should handle SET_SORT_HTL", () => {
    expect(
      searchReducers(searchInitState, {
        type: actionTypes.SET_SORT_HTL,
      })
    ).toEqual({
      ...searchInitState,
      activatedFilters: {
        ...searchInitState.activatedFilters,
        sort: SORT_TYPES.HIGHER_TO_LOWER,
      },
    });
  });

  test("should handle SET_PRICE_RANGE", () => {
    expect(
      searchReducers(searchInitState, {
        type: actionTypes.SET_PRICE_RANG,
        range: [100, 1000],
      })
    ).toEqual({
      ...searchInitState,
      activatedFilters: {
        ...searchInitState.activatedFilters,
        minPrice: 100,
        maxPrice: 1000,
      },
    });
  });

  test("should handle SET_FILTERS", () => {
    const FILTERS_TESTS = {
      gears: "AUTO",
      brands: "TESLA",
      types: "ELECTRIC",
      number_of_seats: 5,
      engines: undefined,
    };
    expect(
      searchReducers(searchInitState, {
        type: actionTypes.SET_FILTERS,
        ...FILTERS_TESTS,
      })
    ).toEqual({
      ...searchInitState,
      activatedFilters: {
        ...searchInitState.activatedFilters,
        ...FILTERS_TESTS,
      },
    });
  });

});
