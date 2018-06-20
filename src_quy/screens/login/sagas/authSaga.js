import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILED } from '../actions/types';
import {put, call, take, fork, cancel, takeLatest} from 'redux-saga/effects';
import { checkAccount } from '../api/api';
import axios from '../../../common/axios';

export function* doLogin(){
    while (true){
        try {
            const action = yield take(LOGIN);
            const checkLogin = yield checkAccount(action.payload);
            console.log(checkLogin);
            //if(checkLogin.data.status == 'ok'){
                yield put({type: LOGIN_SUCCESS, payload: checkLogin});
            //}
            //else{
            //    yield put({type: LOGIN_FAILED, error: checkLogin});
            //}
        } catch(error) {
            yield put({type: LOGIN_FAILED, error: error});
        }
    }
}