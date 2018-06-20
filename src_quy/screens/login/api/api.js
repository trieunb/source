import axios from '../../../common/axios';

export async function checkAccount(user) {
    try{
        user['chk-remember'] = 'on';
        return await axios.post('login/do-login', user);
    }
    catch(e) {
        return null;
    }
}