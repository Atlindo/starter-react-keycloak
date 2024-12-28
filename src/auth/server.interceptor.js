import axios from 'axios';
import { API_BASE_URL } from 'configs/AppConfig';
import { message, notification } from 'antd';
import qs from 'qs';
import { AUTH_ACC_TOKEN, AUTH_ID_TOKEN, AUTH_REFRESH_TOKEN, AUTH_STORAGE } from '../constants/AuthConstant';
import store from '../store';
import UserService from '../services/user.service';

const ServerInterceptor = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000,
  paramsSerializer: param => {
    return qs.stringify(param);
  },
  withCredentials: true,
});

ServerInterceptor.interceptors.request.use(
  config => {
    // //if using headers
    config.headers.Authorization = `Bearer ${localStorage.getItem(AUTH_ACC_TOKEN)}` || null;
    config.params = {
      // realm: KEYCLOAK_REALM,
      // clientId: KEYCLOAK_CLIENT_ID,
      ...config.params,
    };
    config.withCredentials = config?.withCredentials ?? true;
    return config;
  },
  error => {
    notification.error({
      message: 'Error',
    });
    return Promise.reject(error).then(r => r);
  }
);

ServerInterceptor.interceptors.response.use(
  res =>
    new Promise((resolve, reject) => {
      if (res?.data?.error === 'Unauthorized') {
        reject(res?.data?.error);
      } else {
        resolve(res);
      }
    }),

  err => {
    if (!err.response) {
      if (err?.isAxiosError) {
        message.error({
          key: 'error-axios',
          content: `${err.toJSON()?.message}`,
          duration: 4,
        });
      }

      return new Promise((resolve, reject) => {
        reject({ ...err });
      });
    }
    if (err.response.status === 401) {
      UserService.getToken();
      localStorage.removeItem(AUTH_ACC_TOKEN);
      localStorage.removeItem(AUTH_ID_TOKEN);
      localStorage.removeItem(AUTH_REFRESH_TOKEN);
      localStorage.removeItem(AUTH_STORAGE);
      store.dispatch({
        type: 'auth/logout',
      });
      return new Promise((resolve, reject) => {
        reject({ ...err });
      });
      // store.dispatch(signOut())
    }
    return new Promise((resolve, reject) => {
      reject({ ...err?.response?.data });
    });
  }
);
export default ServerInterceptor;
