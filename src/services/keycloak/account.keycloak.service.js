import KeycloakService from './keycloak.service';
import keycloak from '../../keycloak';
import * as CONST from '../../constants';

export default class AccountKeycloakService extends KeycloakService{
  // eslint-disable-next-line no-useless-constructor
  constructor(url = null) {
    super();
    this.realms = keycloak.realm;
    this.url = url ?? `/realms/${this.realm}/${CONST.ENDPOINT_KEYCLOAK.ACCOUNT}`;
  }

  /**
   * @param {object}params
   * @return {Promise<unknown>}
   */
  getSessionDevice(params){
    this.url = [this.url,'sessions/devices'].join('/');
    return new Promise((resolve) => {
      resolve(this.get(params));
    });
  }

}
