/**
*| Component      : Action
*| Author       	: ANS806 - trieunb@ans-asia.com
*| Created date 	: 2018-06-11
*| Description   	:
*/
/*============================================================================*/
//import library
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './types';

export const login = (user_id, password) => ({
  type: LOGIN_REQUEST,
  payload: { user_id, password }
});
