import { combineReducers } from 'redux';

import { reducer as search } from './search';
import { reducer as cityForecast } from './city-forecast';

export default combineReducers({
  search,
  cityForecast,
});
