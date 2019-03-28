import { createActions, createReducer } from 'reduxsauce';

const INITIAL_STATE = {
  data: [],
  currentForecast: {},
  loading: false,
  error: null,
};

const { Types, Creators } = createActions({
  getForecastRequest: ['city_id'],
  getForecastSuccess: ['data', 'current'],
  getForecastFailure: ['error'],
  setCurrentForecast: ['data'],
});

const request = (state = INITIAL_STATE) => ({
  ...state,
  loading: true,
});

const success = (state = INITIAL_STATE, action) => ({
  ...state,
  data: action.data,
  currentForecast: action.current,
  error: null,
  loading: false,
});

const failure = (state = INITIAL_STATE, action) => ({
  ...state,
  loading: false,
  error: action.error,
});

const setCurrentForecast = (state = INITIAL_STATE, action) => ({
  ...state,
  currentForecast: action.data,
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_FORECAST_REQUEST]: request,
  [Types.GET_FORECAST_SUCCESS]: success,
  [Types.GET_FORECAST_FAILURE]: failure,
  [Types.SET_CURRENT_FORECAST]: setCurrentForecast,
});

export const CityForecastTypes = Types;

export const CityForecastActions = Creators;
