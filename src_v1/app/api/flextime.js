import axios from '../axios';
export async function addFlextimeApi(data) {
    try {
        return await axios.post('flextime/add', data);
    }
    catch(e) {
        return null;
    }
}

export async function searchFlextimeApi(data) {
    try {
        return await axios.post('flextime/search', data);
    }
    catch(e) {
        return null;
    }
}