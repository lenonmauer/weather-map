import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import sagas from './sagas';
import reducers from './ducks';

const middlewares = [];

const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

middlewares.push(sagaMiddleware);

let store;

if (__DEV__) {
  store = createStore(
    reducers,
    compose(
      applyMiddleware(...middlewares),
      console.tron.createEnhancer(),
    ),
  );
} else {
  store = createStore(reducers, compose(applyMiddleware(...middlewares)));
}

sagaMiddleware.run(sagas);

export { store };
