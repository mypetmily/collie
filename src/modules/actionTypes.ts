import * as userActionTypes from './user/actionTypes';

export type RootActionType = typeof userActionTypes;

const rootActionTypes = {
  userActionTypes,
};
export default rootActionTypes;
