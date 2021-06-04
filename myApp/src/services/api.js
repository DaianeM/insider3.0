import axios from 'axios';

export const key = '18a671dc0ec99285da1393b73f963add761fe5ea';

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers:{
        'Content-Type':'application/json',
        'Authorization':`Bearer ${key}`
    }
})

export default api;


