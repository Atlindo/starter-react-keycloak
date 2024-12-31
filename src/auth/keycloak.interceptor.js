import axios from 'axios';
import qs from 'qs';
import keycloak from '../keycloak';

const KeycloakInterceptor = axios.create({
  baseURL: keycloak.authServerUrl,
  timeout: 30000,
  paramsSerializer(param) {
    return qs.stringify(param);
  },
  withCredentials: true,
});

KeycloakInterceptor.interceptors.response.use(
  // eslint-disable-next-line func-names
  function (res) {
    return new Promise((resolve, reject) => {
      if (res?.data?.error === 'Unauthorized') {
        reject(res?.data?.error);
      } else {
        resolve(res);
      }
    });
  },
  function (error) {
    return new Promise((resolve, reject) => {
      resolve(error?.response);
    });
  }
);

export default KeycloakInterceptor;
