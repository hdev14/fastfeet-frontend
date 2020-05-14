import {
  all, takeLatest, call, put,
} from 'redux-saga/effects';

import api from '../../../services/api';
import history from '../../../services/history';

import { authTypes } from '../actionsTypes';

import { signInSuccess } from './actions';

function* signIn({ payload }) {
  try {
    const { email, password } = payload;
    const response = yield call(api.post, '/sessions', { email, password });

    const { token } = response.data;

    api.defaults.headers.Authorization = `Baerer ${token}`;

    yield put(signInSuccess(token));
    history.push('/order');
  } catch (error) {
    console.tron.log('ERROR -> ', error);
    return;
  }
}

function signOut() {
  history.push('/');
}

function setToken({ payload }) {
  const { token } = payload.auth;
  api.defaults.headers.Authorization = `Baerer ${token}`;
}

export default all([
  takeLatest(authTypes.SIGN_IN_REQUEST, signIn),
  takeLatest(authTypes.SIGN_OUT, signOut),
  takeLatest('persist/REHYDRATE', setToken),
]);
