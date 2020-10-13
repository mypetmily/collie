import produce from 'immer';

import { createReducer } from '../redux-helper';
import { UserAction } from './actions';
import userActionTypes from './actionTypes';

const initialState = {
  info: null,
};

const userReducer = createReducer<typeof initialState, UserAction>(initialState, {
  [userActionTypes.LOG_IN]: (state: typeof initialState, action: UserAction) => {
    return state;
  },
});

export default userReducer;
