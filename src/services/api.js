import axios from 'axios'

//O que muda em relação ao web é a url, ou seja, conforme o ambiente...
const api = axios.create({
    baseUrl: 'http://192.168.56.1:3333'
})