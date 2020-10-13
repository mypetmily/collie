import { createAction } from 'typesafe-actions';
import userActionTypes from './actionTypes';

const userAction = {
  logIn: createAction(userActionTypes.LOG_IN, resolve => (email: string, password: string) => resolve(email, password)),
  logOut: createAction(userActionTypes.LOG_OUT, resolve => () => resolve()),
};

export type UserAction = ReturnType<ReturnType<typeof userAction[keyof typeof userAction]>>;

export default userAction;
