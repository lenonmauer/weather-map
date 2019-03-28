import { put, call } from 'redux-saga/effects';
import NetInfo from '@react-native-community/netinfo';

import api from '~/services/api';
import { SearchActions } from '~/store/ducks/search';

export function* getSearch(action) {
  if (action.term.length < 3) {
    return yield put(SearchActions.getSearchSuccess([]));
  }

  const isConnected = yield call(NetInfo.isConnected.fetch);

  if (!isConnected) {
    return yield put(
      SearchActions.getSearchFailure('É necessário estar conectado à internet para esta ação.'),
    );
  }

  const response = yield call(api.get, `/find?q=${action.term}&type=like`);

  if (!response.ok) {
    return yield put(SearchActions.getSearchFailure('Ocorreu um erro ao pesquisar as cidades.'));
  }

  return yield put(SearchActions.getSearchSuccess(response.data));
}
