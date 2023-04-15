import axios from 'axios';

const instanceCar = axios.create({
    baseURL:'http://owu.linkpc.net/carsAPI/v1',
    headers: {},
});

const instanceUsers = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com',
    timeout: 1000,
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
});

const instanceComments = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com',
    timeout: 1000,
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
});


export {instanceCar, instanceUsers, instanceComments}