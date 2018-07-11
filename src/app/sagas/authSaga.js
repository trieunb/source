import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/types';
import {put, call, take, fork, cancel, takeLatest} from 'redux-saga/effects';
import { checkAccount } from '../api/auth';
import axios from '../axios';

export function* doLogin(){
    while (true){
        try {
            const action = yield take(LOGIN_REQUEST);
            // console.log(action.payload);
            const checkLogin = yield checkAccount(action.payload);
            var res = checkLogin.data;
            // console.log(res);
            yield put({type: LOGIN_SUCCESS, payload: res});
        } catch(error) {
            yield put({type: LOGIN_FAILURE, error: error});
        }
    }
}
