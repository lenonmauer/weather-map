import { createActions, createReducer } from 'reduxsauce';

const INITIAL_STATE = {
  data: null,
  currentDayIndex: 0,
  loading: false,
  error: null,
};

const { Types, Creators } = createActions({
  getForecastRequest: ['city_id'],
  getForecastSuccess: ['data', 'current'],
  getForecastFailure: ['error'],
  setCurrentDayIndex: ['index'],
});

const request = (state = INITIAL_STATE) => ({
  ...state,
  loading: true,
});

const success = (state = INITIAL_STATE, action) => ({
  ...state,
  data: action.data,
  setCurrentDayIndex: 0,
  error: null,
  loading: false,
});

const failure = (state = INITIAL_STATE, action) => ({
  ...state,
  loading: false,
  error: action.error,
});

const setCurrentDayIndex = (state = INITIAL_STATE, action) => ({
  ...state,
  currentDayIndex: action.index,
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_FORECAST_REQUEST]: request,
  [Types.GET_FORECAST_SUCCESS]: success,
  [Types.GET_FORECAST_FAILURE]: failure,
  [Types.SET_CURRENT_DAY_INDEX]: setCurrentDayIndex,
});

export const CityForecastTypes = Types;

export const CityForecastActions = Creators;
