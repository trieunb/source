import axios from '../axios';
export async function addFlextimeApi(data) {
    try {
        return await axios.post('flextime/add', data);
    }
    catch (e) {
        return null;
    }
}

export async function updateFlextimeApi(data) {
    try {
        return await axios.post('flextime/update', data);
    }
    catch (e) {
        return null;
    }
}

export async function deleteFlextimeApi(data) {
    try {
        return await axios.post('flextime/delete', data);
    }
    catch (e) {
        return null;
    }
}

export async function getFlextimeApi(data) {
    try {
        return await axios.post('flextime/get', data);
    }
    catch (e) {
        return null;
    }
}

export async function searchOfftimeApi(data) {
    try {
        return await axios.post('offtime/search', data);
    }
    catch (e) {
        return null;
    }
}

export async function addDayOffApi(data) {
    try {
        return await axios.post('dayoff/add', data);
    }
    catch (e) {
        return null;
    }
}