import axios from 'axios';

const api = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    // You can also add other default configurations for your requests here
});

export const get = (url, params) => {
    return api.get(url, { params })
        .then(response => response.data)
        .catch(error => {
            throw error;
        });
};

export const post = (url, data) => {
    return api.post(url, data)
        .then(response => response.data)
        .catch(error => {
            throw error;
        });
};

export default api;
