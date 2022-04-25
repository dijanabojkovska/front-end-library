import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:8080/api',
    headers:{
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods': '*',
        'Content-Type': 'application/json; charset=utf8'
    }
})

export default instance