import {HttpStatusCode} from 'axios';
import KeycloakInterceptor from '../auth/keycloak.interceptor';
import store from '../store';

const api = KeycloakInterceptor;

const allowStatus = [
  HttpStatusCode.Ok,
  HttpStatusCode.Created,
  HttpStatusCode.Accepted,
  HttpStatusCode.NonAuthoritativeInformation,
  HttpStatusCode.NoContent,
  HttpStatusCode.ResetContent,
  HttpStatusCode.PartialContent,
  HttpStatusCode.MultiStatus,
  HttpStatusCode.AlreadyReported,
  HttpStatusCode.ImUsed,
];

export default class RequestHandler {

  api = api;

  // eslint-disable-next-line no-useless-constructor,no-empty-function,no-unused-vars
  constructor(url) {
    this.url = url;
    this.api = api;
  }

  /**
   * @param params
   * @param {{ headers: any } | any} opt
   * @return {Promise<unknown>}
   */
  get(params, opt = {}) {
    return new Promise((resolve, reject) => {
      api.get(this.url, {
        ...opt,
        params,
        state: localStorage.getItem('is_mock') ? 'mock' : 'default'
      })
        .then((response) => {
          if (allowStatus.includes(response.status)) {
            resolve(response.data);
          } else {
            if (response.status === HttpStatusCode.Forbidden) {
              store.dispatch({
                type: 'error/forbidden',
                payload: response?.data?.error ?? response?.data?.error_description ?? response?.data ?? null
              });
            }
            reject(response?.data ?? response);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  /**
   * # Find
   * @param {any} param
   * @return {Promise<unknown>}
   */
  find(param) {
    return new Promise((resolve, reject) => {
      this.api
        .get([this.url, param].join('/'), {
          state: localStorage.getItem('is_mock') ? 'mock' : 'default'
        })
        .then((response) => {
          if (allowStatus.includes(response.status)) {
            resolve(response.data);
          } else {
            if (response.status === HttpStatusCode.Forbidden) {
              store.dispatch({
                type: 'error/forbidden',
                payload: response?.data?.error ?? response?.data?.error_description ?? response?.data ?? null
              });
            }
            reject(response?.data ?? response);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });

  }

  /**
   * @template T
   * @param {T|object} body
   * @return {Promise<unknown>}
   */
  store(body){
    return new Promise((resolve, reject) => {
      this.api.post(this.url, body, {
        params: {
          state: localStorage.getItem('is_mock') ? 'mock' : 'default'
        }
      })
        .then((response) => {
          if (allowStatus.includes(response.status)) {
            resolve(response.data);
          } else {
            if (response.status === HttpStatusCode.Forbidden) {
              store.dispatch({
                type: 'error/forbidden',
                payload: response?.data?.error ?? response?.data?.error_description ?? response?.data ?? null
              });
            }
            reject(response?.data ?? response);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  /**
   * @template T
   * @param {string|number} id
   * @param {T|object} body
   * @return {Promise<unknown>}
   */
  update(id, body){
    return new Promise((resolve, reject) => {
      this.api.put([this.url,id].join('/'), body, {
        params: {
          state: localStorage.getItem('is_mock') ? 'mock' : 'default'
        }
      })
        .then((response) => {
          if (allowStatus.includes(response.status)) {
            resolve(response.data);
          } else {
            if (response.status === HttpStatusCode.Forbidden) {
              store.dispatch({
                type: 'error/forbidden',
                payload: response?.data?.error ?? response?.data?.error_description ?? response?.data ?? null
              });
            }
            reject(response?.data ?? response);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  /**
   * @param {string|number} id
   * @return {Promise<unknown>}
   */
  delete(id){
    return new Promise((resolve, reject) => {
      this.api.delete([this.url,id].join('/'), {
        params: {
          state: localStorage.getItem('is_mock') ? 'mock' : 'default'
        }
      })
        .then((response) => {
          if (allowStatus.includes(response.status)) {
            resolve(response.data);
          } else {
            if (response.status === HttpStatusCode.Forbidden) {
              store.dispatch({
                type: 'error/forbidden',
                payload: response?.data?.error ?? response?.data?.error_description ?? response?.data ?? null
              });
            }
            reject(response?.data ?? response);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}
