import axios from 'axios';

const instanceOrders = axios.create({
    baseURL: 'https://api.burgerionproject.ml/v1/'
});


export default instanceOrders;
