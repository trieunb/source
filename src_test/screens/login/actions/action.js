/**
*| Component      : Action
*| Author       	: ANS806 - trieunb@ans-asia.com
*| Created date 	: 2018-06-11
*| Description   	:
*/
/*============================================================================*/
//import library
import { LOGIN, LOGOUT } from './actionTypes';

export const login = (username, password) => {
  return {
    type: LOGIN,
    username: username,
    password: password,
  }
};

export const logout = () => {
  return {
    type: LOGOUT
  };
}
