import { all } from 'redux-saga/effects';
import auth from './auth.saga';

export default function* rootSaga(getState) {
  yield all([auth()]);
}
