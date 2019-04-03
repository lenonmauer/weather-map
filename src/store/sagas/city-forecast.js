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

  return yield put(CityForecastActions.getForecastSuccess(response.data));
}
