import { 
    LOGIN_REQUEST, 
    LOGIN_SUCCESS, 
    LOGIN_FAILURE, 
    CHECK_TOKEN, 
    USER_LIST, 
    APPROVE_LIST, 
    FLEXT_TIME_TYPE,
    DAYOFF_TYPE
}   from '../actions/types';
import { 
    put, 
    call, 
    take, 
    fork, 
    cancel, 
    takeLatest 
}   from 'redux-saga/effects';
import { 
    checkAccount, 
    getUser 
}   from '../api/auth';
import { 
    listUserApi, 
    listLibraryCodeApi 
}   from '../api/common';
import { getFlextimeApi }   from '../api/offtime';

export function* doLogin() {
    while (true) {
        try {
            let action = yield take(LOGIN_REQUEST);
            let checkLogin = yield checkAccount(action.payload);
            let response = checkLogin.data;
            if (response.status) {
                //data payload
                let data = {
                    status  : response.status,
                    token   : response.token,
                    user    : response.user[0][0],
                    branch  : response.user[2][0],
                    group   : response.user[1],
                    
                };
                //set reducer user login
                yield put({ type: LOGIN_SUCCESS, payload: data });
                let paramListUser = {
                    user_id     :   '',
                    baranch     :   data.branch.branch_id
                }
                let listUser = yield listUserApi(paramListUser);
                yield put({ type: USER_LIST, payload: listUser.data.result });
                //get user approve list
                let paramApproveList = {
                    id     :   0,
                    date   :   '',
                    user   :   data.user.user_id,
                    branch :   data.branch.branch_id,
                }
                let approveList = yield getFlextimeApi(paramApproveList);
                yield put({ type: APPROVE_LIST, payload: approveList.data.approverlist });
                //get user flex time type
                let paramFlexTimeType = {
                    baranch     :   data.branch.branch_id,
                    language    :   'en',
                    code        :   '14',
                }
                let flexTimeList    =   yield listLibraryCodeApi(paramFlexTimeType);
                yield put({ type: FLEXT_TIME_TYPE, payload: flexTimeList.data.result });
                //get user DayOff type
                let paramDayOffType = {
                    baranch     :   data.branch.branch_id,
                    language    :   'en',
                    code        :   '34',
                }
                let dayOffType    =   yield listLibraryCodeApi(paramDayOffType);
                yield put({ type: DAYOFF_TYPE, payload: dayOffType.data.result });
            } else {
                yield put({ type: LOGIN_FAILURE, payload: {} });
            }
        } catch (error) {
            yield put({ type: LOGIN_FAILURE, payload: {} });
        }
    }
}

export function* tokenUser() {
    while (true) {
        try {
            let action   = yield take(CHECK_TOKEN);
            let response = yield getUser(action.payload);
                response = response.data;
            if (response.status) {
                //data payload
                let data = {
                    status  : response.status,
                    token   : response.token,
                    user    : response.user[0][0],
                    branch  : response.user[2][0],
                    group   : response.user[1],
                    
                };
                //set reducer user login
                yield put({ type: LOGIN_SUCCESS, payload: data });
                let paramListUser = {
                    user_id     :   '',
                    baranch     :   data.branch.branch_id
                }
                let listUser = yield listUserApi(paramListUser);
                yield put({ type: USER_LIST, payload: listUser.data.result });
                //get user approve list
                let paramApproveList = {
                    id     :   0,
                    date   :   '',
                    user   :   data.user.user_id,
                    branch :   data.branch.branch_id,
                }
                let approveList = yield getFlextimeApi(paramApproveList);
                yield put({ type: APPROVE_LIST, payload: approveList.data.approverlist });
                //get user flex time type
                let paramFlexTimeType = {
                    baranch     :   data.branch.branch_id,
                    language    :   'en',
                    code        :   '14',
                }
                let flexTimeList    =   yield listLibraryCodeApi(paramFlexTimeType);
                yield put({ type: FLEXT_TIME_TYPE, payload: flexTimeList.data.result });
                //get user DayOff type
                let paramDayOffType = {
                    baranch     :   data.branch.branch_id,
                    language    :   'en',
                    code        :   '34',
                }
                let dayOffType    =   yield listLibraryCodeApi(paramDayOffType);
                yield put({ type: DAYOFF_TYPE, payload: dayOffType.data.result });
            } else {
                yield put({ type: LOGIN_FAILURE, payload: {} });
            }
        } catch (error) {
            yield put({ type: LOGIN_FAILURE, payload: {} });
        }
    }
}