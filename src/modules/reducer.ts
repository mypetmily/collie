import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { combineReducers } from 'redux';

import userReducer from './user/reducers';

export const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    user: userReducer,
  });

export type RootState = ReturnType<ReturnType<typeof createRootReducer>>;
