import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { FAILURE, REQUEST, SUCCESS } from '../actions/action';
import { AUTH_LOGIN, USER_LOAD } from '../constants/auth.constant';
import ApiService from '../../services/api.service';
import { AUTH_ACC_TOKEN, AUTH_ID_TOKEN, AUTH_REFRESH_TOKEN, AUTH_STORAGE } from '../../constants/AuthConstant';
import { authenticated, showLoading } from '../slices/authSlice';
import KeycloakInterceptor from '../../auth/keycloak.interceptor';
import { KEYCLOAK_REALM } from '../../configs/AppConfig';

export function* signIn() {
  yield takeEvery(REQUEST(AUTH_LOGIN), function* ({ payload }) {
    try {
      yield put(showLoading());
      /**
       * @type {{data: { refresh_token?: any, [k:string]: any}} | any}
       */
      const response = yield call(() => {
        return new Promise(resolve => {
          resolve(KeycloakInterceptor.get(`/realms/${KEYCLOAK_REALM}/protocol/openid-connect/userinfo`));
        });
      });

      console.log({ response });
      if (response?.code === 'SUCCESS_OK' && response.data?.access_token) {
        const search = new URLSearchParams(window.location.search);
        localStorage.setItem(AUTH_ACC_TOKEN, response.data?.access_token);
        localStorage.setItem(AUTH_ID_TOKEN, response.data?.id_token);
        localStorage.setItem(AUTH_REFRESH_TOKEN, response.data?.refresh_token);
        localStorage.setItem(AUTH_STORAGE, JSON.stringify(response.data));

        yield put(authenticated({ payload: response?.data?.access_token }));
        if (search.get('redirect')) {
          window.location.href = search.get('redirect');
        }

        yield put({
          type: SUCCESS(AUTH_LOGIN),
          payload: response.data,
        });
      } else {
        yield put({
          type: FAILURE(AUTH_LOGIN),
          payload: response?.data,
        });
      }
    } catch (err) {
      yield put({
        type: FAILURE(AUTH_LOGIN),
        payload: {
          ...err,
          message: err?.message,
        },
      });
    }
  });
}
export function* loadUser() {
  yield takeEvery(REQUEST(USER_LOAD), function* ({}) {
    try {
      const search = new URLSearchParams(window.location.search);
      const response = yield call(() => {
        return new Promise(resolve => {
          resolve(KeycloakInterceptor.get(`/realms/${KEYCLOAK_REALM}/protocol/openid-connect/userinfo`));
        });
      });
      if (response?.data) {
        yield put({
          type: SUCCESS(USER_LOAD),
          payload: response?.data,
        });
        if (search.get('redirect')) {
          window.location.href = search.get('redirect');
        }
      } else {
        yield put({
          type: FAILURE(USER_LOAD),
        });
      }
    } catch (err) {
      yield put({
        type: FAILURE(USER_LOAD),
      });
    }
  });
}
export default function* rootSaga() {
  yield all([fork(signIn), fork(loadUser)]);
}
