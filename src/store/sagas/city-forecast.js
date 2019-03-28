import { put, call } from 'redux-saga/effects';
import moment from 'moment';
import 'moment/locale/pt-br';
import NetInfo from '@react-native-community/netinfo';

import api from '~/services/api';
import { CityForecastActions } from '~/store/ducks/city-forecast';

moment.locale('pt');

export function* getForecast(action) {
  const isConnected = yield call(NetInfo.isConnected.fetch);

  if (!isConnected) {
    return yield put(
      CityForecastActions.getForecastFailure(
        'É necessário estar conectado à internet para esta ação.',
      ),
    );
  }

  const response = yield call(api.get, `/forecast?id=${action.city_id}`);

  const forecasts = response.data.list.map((item) => {
    const date = moment(item.dt * 1000);

    return {
      dayOfWeek: date.format('dddd'),
      time: date.format('HH'),
      city: response.data.city.name,
      weatherIcon: item.weather[0].icon,
      weatherDescription: item.weather[0].description,
      date: date.format('DD-MM-YYYY'),
      temp: parseInt(item.main.temp, 10),
    };
  });

  const forecastsPerDay = Object.values(
    forecasts.reduce((result, item) => {
      if (!result[item.date]) {
        return {
          ...result,
          [item.date]: [item],
        };
      }

      result[item.date].push(item);
      return result;
    }, {}),
  );

  const current = forecastsPerDay[1];

  return yield put(CityForecastActions.getForecastSuccess(forecastsPerDay, current));
}
