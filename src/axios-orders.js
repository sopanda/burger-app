import axios from 'axios';

const instanceOrders = axios.create({
    baseURL: 'http://api.burgerionproject.ml/v1/'
});

export default instanceOrders;
