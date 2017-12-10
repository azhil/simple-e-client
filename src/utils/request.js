import { API_ROOT } from 'constants/config';

export const get = (path, method = 'GET') => {
    return fetch(`${API_ROOT}/${path}`, {
        method
    });
}

export const post = (path, params = {}, method = 'POST') => {
    return fetch(`${API_ROOT}/${path}`, {
        method,
        body: JSON.stringify(params)
    });
}

export const del = (path) => get(path, 'DELETE');
export const put = (path, params = {}) => post(path, params, 'PUT');

export const dummyGet = path => new Promise(resolve => {
    setTimeout(() => {
        resolve();
    }, 100)
});

export const dummyPost = (path, params) => new Promise(resolve => {
    setTimeout(() => {
        resolve(params);
    }, 100)
});

export const dummyDel = dummyGet;
export const dummyPut = dummyPost;
