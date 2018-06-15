/**
*| Screen           : Login
*| Author       	: ANS809 - quypn@ans-asia.com
*| Created date 	: 2018-06-14
*| Description   	: combine all saga of locin screen to a root
*/
/*============================================================================*/
// import child saga
import { doLogin } from './authSaga';
import { fork } from 'redux-saga/effects';

export default function* () {
    yield [
        fork(doLogin)
    ]
}
