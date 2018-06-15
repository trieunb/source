/**
*| Component      : Reducer
*| Author       	: ANS806 - trieunb@ans-asia.com
*| Created date 	: 2018-06-11
*| Description   	:
*/
/*============================================================================*/
//import library
import { LOGIN, LOGIN_SUCCESS, LOGOUT } from '../actions/types';

const defaultState = {
    isLoggedIn : false,
    user : {
        username: '',
        password: ''
    }
};

const  authReducer = (state = {}, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                isLoggedIn: true,
                user : {
                    username: action.payload.username,
                    password: action.payload.username
                }
            };
            break;
        case LOGIN_SUCCESS:
            break;
        case LOGOUT:
            return {
                isLoggedIn: false,
                user : {
                    username: '',
                    password: '',
                }
            };
        break;
    default:
      return state
  }
}

export default authReducer;
