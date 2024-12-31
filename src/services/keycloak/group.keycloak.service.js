import KeycloakService from './keycloak.service';
import keycloak from '../../keycloak';
import * as CONST from '../../constants';

export default class GroupKeycloakService extends KeycloakService{
  // eslint-disable-next-line no-useless-constructor
  constructor(url = null) {
    super();
    this.realms = keycloak.realm;
    this.url = url ?? `/admin/realms/${this.realm}/${CONST.ENDPOINT_KEYCLOAK.GROUP}`;
  }

  /**
   * @param {string} id
   * @param {{ name: string; }} body
   * @return {Promise<unknown>}
   */
  createChildren(id, body){
    this.url = [this.url, id,'children'].join('/');
    return new Promise((resolve) => {
      resolve(this.store(body));
    });
  }

  findChildren(id){
    return new Promise((resolve) => {
      resolve(this.find(`${id}/children`));
    });
  }

  getMember(id, params){
    this.url = [this.url,id, 'members'].join('/');
    return new Promise((resolve) => {
      resolve(this.get(params));
    });
  }
}
