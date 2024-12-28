import { REQUEST } from './action';
import { AUTH_LOGIN, USER_LOAD } from '../constants/auth.constant';

export function _signIn(payload) {
  return {
    type: REQUEST(AUTH_LOGIN),
    payload,
  };
}

export function _userLoad() {
  return {
    type: REQUEST(USER_LOAD),
    payload: null,
  };
}
