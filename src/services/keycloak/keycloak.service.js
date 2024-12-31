import KeycloakInterceptor from '../../auth/keycloak.interceptor';
import RequestHandler from '../request-handler';

export default class KeycloakService extends RequestHandler{
  realm = process.env.REACT_APP_KEYCLOAK_REALM;

  api = KeycloakInterceptor;

  // eslint-disable-next-line no-unused-vars,no-useless-constructor,no-empty-function
  constructor(url) {
    super(url);
    this.url = url;
  }

  whoAmI(params, token){
    this.url = '/admin/master/console/whoami';
    return new Promise((resolve)=> {
      resolve(this.get(params, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }));
    });
  }
}
