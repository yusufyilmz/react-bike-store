import axios from 'axios';

export default axios.create({
    baseURL: process.env.REACT_APP_BIKEWISE_URL,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'Content-Type': 'application/json',
    }
});

