/**
*| Component      : Action
*| Author       	: ANS806 - trieunb@ans-asia.com
*| Created date 	: 2018-08-10
*| Description   	:
*/
/*============================================================================*/
//import library
import { LOGIN_REQUEST, CHECK_TOKEN } from './types';

export const login = (user_id, password) => ({
    type: LOGIN_REQUEST,
    payload: { user_id, password }
});

export const checkToken = (token) => ({
    type: CHECK_TOKEN,
    payload: { token }
});