import { OFFTIME_REQUEST, OFFTIME_SUCCESS, OFFTIME_FAILURE } from '../actions/types';
import { put, call, take, fork, cancel, takeLatest } from 'redux-saga/effects';
import { searchOfftimeApi } from '../api/offtime';
import axios from '../axios';

export function* offtimeSearch() {
    while (true) {
        try {
            let action = yield take(OFFTIME_REQUEST);
            let response = yield searchOfftimeApi(action.payload);
            let data = response.data;
            yield put({ type: OFFTIME_SUCCESS, response: data.result, status: data.status });
        } catch (error) {
            yield put({ type: OFFTIME_FAILURE, response: [], status: false });
        }
    }
}
