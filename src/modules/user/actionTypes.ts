const userActionTypes = {
  LOG_IN: '@user/LOG_IN' as const,
  LOG_OUT: '@user/LOG_OUT' as const,
  SIGN_UP: '@user/SIGN_UP' as const,
};

export type UserActionTypes = typeof userActionTypes[keyof typeof userActionTypes];

export default userActionTypes;
