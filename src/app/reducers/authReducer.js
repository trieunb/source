/**
*| Component      : Reducer
*| Author       	: ANS806 - trieunb@ans-asia.com
*| Created date 	: 2018-06-11
*| Description   	:
*/
/*============================================================================*/
//import library
import { LOGIN, LOGOUT } from '../actions/types';

const defaultState = {
    isLoggedIn: false,
    username: '',
    password: ''
};

const  authReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        isLoggedIn: true,
        username: action.username,
        password: action.password,
      };
      break;
    case LOGOUT:
      return {
        isLoggedIn: false,
      };
      break;
    default:
      return state
  }
}

export default authReducer;
