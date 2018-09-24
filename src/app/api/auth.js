import axios from '../axios';

export async function checkAccount(user) {
    try {
        return await axios.post('auth/login', user);
    }
    catch (e) {
        return null;
    }
}

export async function getUser(data) {
    try {
        return await axios.post('auth/user', data);
    }
    catch (e) {
        return null;
    }
}
