import Keycloak from 'keycloak-js';

// eslint-disable-next-line import/no-mutable-exports
let keycloak;

if (localStorage.getItem('@keycloak.config')) {
  try {
    const _keycloak = JSON.parse(localStorage.getItem('@keycloak'));
    keycloak = new Keycloak({
      onLoad: 'login-required',
      checkLoginIframe: false,
      url: _keycloak?.url ?? process.env.REACT_APP_AUTH_SERVER_URL,
      realm: _keycloak?.realm ?? process.env.REACT_APP_KEYCLOAK_REALM,
      clientId: _keycloak?.clientId ?? process.env.REACT_APP_KEYCLOAK_CLIENT_ID,
    });
  } catch (e) {
    keycloak = new Keycloak({
      onLoad: 'login-required',
      checkLoginIframe: false,
      url: process.env.REACT_APP_AUTH_SERVER_URL,
      realm: process.env.REACT_APP_KEYCLOAK_REALM,
      clientId: process.env.REACT_APP_KEYCLOAK_CLIENT_ID,
    });
  }

} else if (process.env.REACT_APP_ENV === 'production') {
  keycloak = new Keycloak('/keycloak-json');
} else {
  keycloak = new Keycloak({
    onLoad: 'login-required',
    checkLoginIframe: false,
    url: process.env.REACT_APP_AUTH_SERVER_URL,
    realm: process.env.REACT_APP_KEYCLOAK_REALM,
    clientId: process.env.REACT_APP_KEYCLOAK_CLIENT_ID,
  });
}

export default keycloak;
