import { all, fork, takeEvery } from 'redux-saga/effects';
import userActionTypes from './actionTypes';

function* logIn() {
  try {
  } catch (e) {}
}

export default [takeEvery(userActionTypes.LOG_IN, logIn)];
