/**
*| Screen           : Login
*| Author       	: ANS809 - quypn@ans-asia.com
*| Created date 	: 2018-06-14
*| Description   	: combine all saga of locin screen to a root
*/
/*============================================================================*/
// import child saga
import { doLogin, tokenUser, getUserInfo } from './authSaga';
import { offtimeSearch } from './offtimeSaga';
import { fork } from 'redux-saga/effects';

export default function* () {
    yield [
        fork(doLogin),
        fork(tokenUser),
        fork(offtimeSearch)
    ]
}
