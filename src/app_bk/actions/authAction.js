/**
*| Component      : Action
*| Author       	: ANS806 - trieunb@ans-asia.com
*| Created date 	: 2018-06-11
*| Description   	:
*/
/*============================================================================*/
//import library
import { LOGIN, LOGOUT, LOGIN_SUCCESS, LOGIN_FAILED } from './types';

export const login = ({username, password}) => {
  return {
    type: LOGIN,
    username,
    password
  }
};

export const logout = () => {
  return {
    type: LOGOUT
  };
}

export const loginSuccess = (payload) => {
  return {
    type: LOGIN_SUCCESS,
    payload
  }
};

export const loginFailed = (error) => {
  return {
    type: LOGIN_FAILED,
    error
  }
};
