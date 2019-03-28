import { all, takeLatest } from 'redux-saga/effects';

import { SearchTypes } from '~/store/ducks/search';
import { CityForecastTypes } from '~/store/ducks/city-forecast';

import { getForecast } from './city-forecast';
import { getSearch } from './search';

export default function* rootSaga() {
  yield all([
    takeLatest(SearchTypes.GET_SEARCH_REQUEST, getSearch),
    takeLatest(CityForecastTypes.GET_FORECAST_REQUEST, getForecast),
  ]);
}
