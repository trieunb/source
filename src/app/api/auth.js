import axios from '../axios';

export async function checkAccount(user) {
    try{
        return await axios.post('auth/login', user);
    }
    catch(e) {
        return null;
    }
}
