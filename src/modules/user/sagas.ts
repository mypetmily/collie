import { takeEvery } from 'redux-saga/effects';
import userActionTypes from './actionTypes';

function* logIn() {
  try {
    yield true;
  } catch (e) {}
}

export default [takeEvery(userActionTypes.LOG_IN, logIn)];
