import axios from "axios";

const api = axios.create({
    baseURL: '/api'
});

export default {
    getSomeStuff: params => api.get('/stuff', params),
    postSomeStuff: item => api.post('/stuf', item)
}
