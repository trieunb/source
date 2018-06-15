/**
*| Component      : Action
*| Author       	: ANS806 - trieunb@ans-asia.com
*| Created date 	: 2018-06-11
*| Description   	:
*/
/*============================================================================*/
//import library
import { LOGIN, LOGIN_SUCCESS, LOGOUT } from './types';

export const login = (payload) => {
    return {
        type: LOGIN,
        payload: payload
    }
};

export const logout = () => {
    return {
        type: LOGOUT
    };
}
