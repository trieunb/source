/**
*| Component        : Action Offtime search
*| Author       	: ANS806 - trieunb@ans-asia.com
*| Created date 	: 2018-08-10
*| Description   	:
*/
/*============================================================================*/
//import library
import { OFFTIME_REQUEST } from './types';

export const offtimeSearch = (data) => ({
    type: OFFTIME_REQUEST,
    payload:  data
});
