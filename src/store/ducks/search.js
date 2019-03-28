import { createActions, createReducer } from 'reduxsauce';

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: null,
};

const { Types, Creators } = createActions({
  getSearchRequest: ['term'],
  getSearchSuccess: ['data'],
  getSearchFailure: ['error'],
});

const request = (state = INITIAL_STATE) => ({
  ...state,
  loading: true,
});

const success = (state = INITIAL_STATE, action) => ({
  ...state,
  data: action.data,
  error: null,
  loading: false,
});

const failure = (state = INITIAL_STATE, action) => ({
  ...state,
  loading: false,
  error: action.error,
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_SEARCH_REQUEST]: request,
  [Types.GET_SEARCH_SUCCESS]: success,
  [Types.GET_SEARCH_FAILURE]: failure,
});

export const SearchTypes = Types;

export const SearchActions = Creators;
