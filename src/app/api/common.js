import axios from '../axios';
export async function getInfoApi(data) {
    try {
        return await axios.post('auth/user', data);
    }
    catch (e) {
        return null;
    }
}
export async function listUserApi(data) {
    try {
        return await axios.post('common/list-user', data);
    }
    catch (e) {
        return null;
    }
}
export async function listLibraryCodeApi(data) {
    try {
        return await axios.post('common/library-code', data);
    }
    catch (e) {
        return null;
    }
}