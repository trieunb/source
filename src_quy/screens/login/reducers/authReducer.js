/**
*| Component      : Reducer
*| Author       	: ANS806 - trieunb@ans-asia.com
*| Created date 	: 2018-06-11
*| Description   	:
*/
/*============================================================================*/
//import library
import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILED, LOGOUT } from '../actions/types';

const defaultState = {
    isLoggedIn : false,
    infoLogin : {
    }
};

const  authReducer = (state = {}, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                isLoggedIn: true,
                infoLogin: action.payload
            }
            break;

        case LOGIN_FAILED:
            return {
                isLoggedIn: false
            }
            break;

        case LOGOUT:
            return {
                isLoggedIn: null,
            };
        break;
    default:
      return state
  }
}

export default authReducer;
