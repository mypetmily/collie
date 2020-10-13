import { applyMiddleware, compose, createStore } from 'redux';
import createSaga from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import { createRootReducer } from './reducer';
import rootSaga from './sagas';

export const history = createBrowserHistory();

const rootReducer = createRootReducer(history);

export default function configureStore() {
  const sagaMiddleware = createSaga();
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(routerMiddleware(history), sagaMiddleware),
      process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : () => {}
    )
  );

  sagaMiddleware.run(rootSaga);

  return store;
}
