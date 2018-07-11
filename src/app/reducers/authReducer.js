/**
*| Component      : Reducer
*| Author       	: ANS806 - trieunb@ans-asia.com
*| Created date 	: 2018-06-11
*| Description   	:
*/
/*============================================================================*/
//import library
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/types';

const defaultState = {
  payload: {},
  error: {}
};

const  authReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case LOGIN_SUCCESS: {
      return { ...state, payload: payload };
    }
    case LOGIN_FAILURE: {
      return { ...state, error: payload }
    }
    default:
      return state;
  }
}

export default authReducer;
