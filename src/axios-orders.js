import axios from 'axios';

const instanceOrders = axios.create({
    baseURL: ''
});

export default instanceOrders;
