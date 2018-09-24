/**
*| Component        : Reducer Offtime
*| Author       	: ANS806 - trieunb@ans-asia.com
*| Created date 	: 2018-08-10
*| Description   	:
*/
/*============================================================================*/
//import library
import { OFFTIME_REQUEST, OFFTIME_SUCCESS, OFFTIME_FAIL } from '../actions/types';

const defaultState = {
    loading: false,
    response: [],
    status: true
};

const offtime = (state = defaultState, { type, response, status }) => {
    switch (type) {
        case OFFTIME_REQUEST: {
            return { ...state, loading: true };
        }
        case OFFTIME_SUCCESS: {
            return {
                ...state,
                loading: false,
                response: response,
                status: status
            };
        }
        case OFFTIME_FAIL: {
            return {
                ...state,
                loading: false,
                response: [],
                status: status
            }
        }
        default:
            return state;
    }
}
export default offtime;