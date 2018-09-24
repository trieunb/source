/**
*| Component      : Reducer
*| Author       	: ANS806 - trieunb@ans-asia.com
*| Created date 	: 2018-06-11
*| Description   	:
*/
/*============================================================================*/
//import library
import { 
    LOGIN_REQUEST, 
    LOGIN_SUCCESS, 
    LOGIN_FAILURE, 
    USER_INFO, 
    USER_LIST, 
    APPROVE_LIST, 
    FLEXT_TIME_TYPE,
    DAYOFF_TYPE
}   from '../actions/types';

const defaultState = {
    token           :   '',
    payload         :   {},
    userInfo        :   {},
    branch          :   {},
    groups          :   [],
    listUser        :   [],
    flexTimeType    :   [],
    dayOffType      :   [],
    approveList     :   [],
    isFormSearch    :   false,
};

const authReducer = (state = defaultState, { type, payload }) => {
    switch (type) {
        case LOGIN_SUCCESS: {
            return { ...state, 
                    payload         : payload,
                    token           : payload.token,
                    userInfo        : payload.user,
                    branch          : payload.branch,
                    groups          : payload.group,
                    isFormSearch    : true
                };
        }
        case LOGIN_FAILURE: {
            return { ...state, payload: {} }
        }
        case USER_LIST: {
            return { ...state, 
                    listUser : payload, 
                }
        }
        case APPROVE_LIST: {
            return { ...state, 
                    approveList : payload, 
                }
        }
        case FLEXT_TIME_TYPE: {
            return { ...state, 
                    flexTimeType : payload, 
                }
        }
        case DAYOFF_TYPE: {
            return { ...state, 
                    dayOffType : payload, 
                }
        }
        default:
            return state;
    }
}

export default authReducer;
