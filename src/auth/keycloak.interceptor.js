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
  function (res) {
    return new Promise((resolve, reject) => {
      if (res?.data?.error === 'Unauthorized') {
        reject(res?.data?.error);
      } else {
        resolve(res);
      }
    });
  },
  function () {}
);

export default KeycloakInterceptor;
