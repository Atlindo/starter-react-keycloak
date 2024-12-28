import { combineReducers } from 'redux';
import theme from './slices/themeSlice';
import auth from './slices/authSlice';
import { FAILURE, REQUEST, SUCCESS } from './actions/action';
import { AUTH_LOGIN, USER_LOAD } from './constants/auth.constant';
import keycloak from './reducers/keycloak';

const rootReducer = asyncReducers => (state, action) => {
  const combinedReducer = combineReducers({
    theme,
    auth,
    keycloak,
    ...asyncReducers,
  });
  return combinedReducer(state, action);
};

export default rootReducer;
