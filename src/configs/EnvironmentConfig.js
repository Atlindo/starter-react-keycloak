const dev = {
    API_ENDPOINT_URL: process.env.REACT_APP_API_ENDPOINT,
    REALM: process.env.REACT_APP_KEYCLOAK_REALM,
    KEYCLOAK_CLIENT_ID: process.env.REACT_APP_KEYCLOAK_CLIENT_ID,
};

const prod = {
    API_ENDPOINT_URL: process.env.REACT_APP_API_ENDPOINT,
    REALM: process.env.REACT_APP_KEYCLOAK_REALM,
    KEYCLOAK_CLIENT_ID: process.env.REACT_APP_KEYCLOAK_CLIENT_ID,
};

const test = {
    API_ENDPOINT_URL: process.env.REACT_APP_API_ENDPOINT,
    REALM: process.env.REACT_APP_KEYCLOAK_REALM,
    KEYCLOAK_CLIENT_ID: process.env.REACT_APP_KEYCLOAK_CLIENT_ID,
};

const getEnv = () => {
    switch (process.env.NODE_ENV) {
        case 'development':
            return dev
        case 'production':
            return prod
        case 'test':
            return test
        default:
            break;
    }
}

export const env = getEnv()
