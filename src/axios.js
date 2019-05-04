import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/2201567809937229/search'
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

//instance.interceptors.request...

export default instance;