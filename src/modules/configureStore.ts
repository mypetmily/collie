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
  const middlewares = [routerMiddleware(history), sagaMiddleware];
  const enhancer =
    process.env.NODE_ENV === 'development'
      ? compose(applyMiddleware(...middlewares), window.__REDUX_DEVTOOLS_EXTENSION__())
      : compose(applyMiddleware(...middlewares));
  const store = createStore(rootReducer, enhancer);

  sagaMiddleware.run(rootSaga);

  return store;
}
