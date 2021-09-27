import axios from 'axios';

const Api = axios.create({
  baseURL: 'http://jsonplaceholder.typicode.com/',
});

export default Api;
